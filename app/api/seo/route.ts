import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { exec } from "child_process";
import { getAppRoutes } from "@/lib/seo-utils";
import { generateAllLocationSlugs } from "@/lib/chandler-locations";
import { getPublishedPosts } from "@/lib/actions/blog";

export const dynamic = "force-static";


// Helper to find the metadata block and extract title/description from a static page file
function getStaticPageOriginalMetadata(route: string): { title: string; description: string } {
  try {
    const workspaceDir = process.cwd();
    let relativeFilePath = "";
    if (route === "/") {
      relativeFilePath = "app/page.tsx";
    } else {
      const cleanPath = route.replace(/^\/|\/$/g, "");
      relativeFilePath = `app/${cleanPath}/page.tsx`;
    }
    const fullPath = path.join(workspaceDir, relativeFilePath);
    if (!fs.existsSync(fullPath)) {
      // Check if layout file exists
      const layoutPath = fullPath.replace("page.tsx", "layout.tsx");
      if (fs.existsSync(layoutPath)) {
        return parseMetadataFromFile(layoutPath);
      }
      return { title: "", description: "" };
    }
    return parseMetadataFromFile(fullPath);
  } catch (err) {
    return { title: "", description: "" };
  }
}

function parseMetadataFromFile(filePath: string): { title: string; description: string } {
  const content = fs.readFileSync(filePath, "utf8");
  const titleMatch = content.match(/title\s*:\s*({[\s\S]*?}|"([^"]*)"|'([^']*)')/);
  const descMatch = content.match(/description\s*:\s*("([^"]*)"|'([^']*)')/);

  let title = "";
  if (titleMatch) {
    if (titleMatch[2]) title = titleMatch[2];
    else if (titleMatch[3]) title = titleMatch[3];
    else {
      // It might be absolute or an object, try to extract absolute string
      const absMatch = titleMatch[1].match(/absolute\s*:\s*["']([^"']+)["']/);
      if (absMatch) title = absMatch[1];
    }
  }

  let description = "";
  if (descMatch) {
    description = descMatch[2] || descMatch[3] || "";
  }

  return { title, description };
}

export async function GET(req: NextRequest) {
  try {
    const workspaceDir = process.cwd();
    const overridesPath = path.join(workspaceDir, "lib/custom-metadata-overrides.json");
    let overrides: Record<string, { title: string; description: string }> = {};
    if (fs.existsSync(overridesPath)) {
      overrides = JSON.parse(fs.readFileSync(overridesPath, "utf8"));
    }

    const pagesList: any[] = [];

    // 1. Static App Routes
    const appRoutes = getAppRoutes();
    appRoutes.forEach((route: string) => {
      const normalizedRoute = route === "/" ? "/" : route.endsWith("/") ? route : `${route}/`;
      const original = getStaticPageOriginalMetadata(route);
      const override = overrides[normalizedRoute];

      pagesList.push({
        route: normalizedRoute,
        type: "static",
        title: override ? override.title : original.title,
        description: override ? override.description : original.description,
        originalTitle: original.title,
        originalDescription: original.description,
        isOverride: !!override,
      });
    });

    // 2. Programmatic Location Routes
    const locationSlugs = generateAllLocationSlugs();
    locationSlugs.forEach((slug) => {
      const normalizedRoute = `/chandler-az-${slug}/`;
      const override = overrides[normalizedRoute];
      
      pagesList.push({
        route: normalizedRoute,
        type: "location",
        title: override ? override.title : "",
        description: override ? override.description : "",
        originalTitle: "",
        originalDescription: "",
        isOverride: !!override,
      });
    });

    // 3. Blog Post Routes
    const blogPosts = await getPublishedPosts();
    blogPosts.forEach((post) => {
      const normalizedRoute = `/blog/${post.slug}/`;
      const override = overrides[normalizedRoute];

      pagesList.push({
        route: normalizedRoute,
        type: "blog",
        title: override ? override.title : post.title,
        description: override ? override.description : post.excerpt,
        originalTitle: post.title,
        originalDescription: post.excerpt,
        isOverride: !!override,
      });
    });

    return NextResponse.json({ success: true, pages: pagesList });
  } catch (error: any) {
    console.error("GET SEO list failed:", error);
    return NextResponse.json({ error: error.message || "Failed to list pages" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const workspaceDir = process.cwd();
    const overridesPath = path.join(workspaceDir, "lib/custom-metadata-overrides.json");
    
    const body = await req.json();
    
    if (body.action === "sync") {
      // Run the sync-metadata.js script
      await new Promise<void>((resolve, reject) => {
        exec("node scripts/sync-metadata.js", (error, stdout, stderr) => {
          if (error) {
            console.error("Sync execution failed:", error);
            reject(new Error(stderr || error.message));
          } else {
            console.log("Sync output:", stdout);
            resolve();
          }
        });
      });
      return NextResponse.json({ success: true, message: "Metadata successfully synced to source files." });
    }

    const { route, title, description } = body;
    if (!route) {
      return NextResponse.json({ error: "Route is required" }, { status: 400 });
    }

    let overrides: Record<string, { title: string; description: string }> = {};
    if (fs.existsSync(overridesPath)) {
      overrides = JSON.parse(fs.readFileSync(overridesPath, "utf8"));
    }

    if (!title && !description) {
      // Remove override if empty
      delete overrides[route];
    } else {
      overrides[route] = { title, description };
    }

    fs.writeFileSync(overridesPath, JSON.stringify(overrides, null, 2), "utf8");

    // Automatically trigger the sync to update TSX and mapping files in-place
    try {
      await new Promise<void>((resolve, reject) => {
        exec("node scripts/sync-metadata.js", (error, stdout, stderr) => {
          if (error) {
            console.error("Auto-sync execution failed:", error);
            reject(new Error(stderr || error.message));
          } else {
            console.log("Auto-sync output:", stdout);
            resolve();
          }
        });
      });
    } catch (syncErr) {
      console.warn("Failed to auto-sync, but metadata overrides JSON was saved.", syncErr);
    }

    return NextResponse.json({ success: true, message: "Metadata override saved successfully." });
  } catch (error: any) {
    console.error("POST SEO update failed:", error);
    return NextResponse.json({ error: error.message || "Failed to update metadata" }, { status: 500 });
  }
}
