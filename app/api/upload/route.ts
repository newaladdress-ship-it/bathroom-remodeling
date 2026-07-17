import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import sharp from "sharp";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    // Create uploads directory if not exists
    const uploadsDir = path.join(process.cwd(), "public/images/uploads");
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
    }

    // Generate unique slugified filename
    const ext = path.extname(file.name);
    const baseName = path.basename(file.name, ext)
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

    const timestamp = Date.now();
    const fileNameWebP = `${baseName}-${timestamp}.webp`;
    const fileNameAVIF = `${baseName}-${timestamp}.avif`;

    const pathWebP = path.join(uploadsDir, fileNameWebP);
    const pathAVIF = path.join(uploadsDir, fileNameAVIF);

    // Save as WebP (standard compression)
    await sharp(buffer)
      .webp({ quality: 80 })
      .toFile(pathWebP);

    // Save as AVIF (high next-gen compression)
    await sharp(buffer)
      .avif({ quality: 65 })
      .toFile(pathAVIF);

    return NextResponse.json({
      success: true,
      webpUrl: `/images/uploads/${fileNameWebP}`,
      avifUrl: `/images/uploads/${fileNameAVIF}`,
      fileName: baseName
    });
  } catch (error: any) {
    console.error("Image upload/optimization failed:", error);
    return NextResponse.json({ error: error.message || "Failed to process image" }, { status: 500 });
  }
}
