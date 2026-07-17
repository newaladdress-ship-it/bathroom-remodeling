"use client"

import { useState, useEffect } from "react"
import { AdminShell } from "@/components/admin/admin-shell"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Search, Pencil, RefreshCw, Download, Settings, FileText, CheckCircle, AlertTriangle, Trash2 } from "lucide-react"

interface SeoPage {
  route: string;
  type: "static" | "location" | "blog";
  title: string;
  description: string;
  originalTitle: string;
  originalDescription: string;
  isOverride: boolean;
}

export default function AdminSeoPage() {
  const [pages, setPages] = useState<SeoPage[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("")
  const [filterType, setFilterType] = useState<string>("all")
  const [editingPage, setEditingPage] = useState<SeoPage | null>(null)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [syncing, setSyncing] = useState(false)
  const [saving, setSaving] = useState(false)

  const [formData, setFormData] = useState({
    title: "",
    description: "",
  })

  useEffect(() => {
    fetchPages()
  }, [])

  async function fetchPages() {
    setLoading(true)
    try {
      const res = await fetch("/api/seo")
      const data = await res.json()
      if (data.pages) {
        setPages(data.pages)
      }
    } catch (err) {
      console.error("Failed to load SEO pages", err)
    } finally {
      setLoading(false)
    }
  }

  function openEditDialog(page: SeoPage) {
    setEditingPage(page)
    setFormData({
      title: page.title || "",
      description: page.description || "",
    })
    setDialogOpen(true)
  }

  async function handleSave() {
    if (!editingPage) return
    setSaving(true)
    try {
      const res = await fetch("/api/seo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          route: editingPage.route,
          title: formData.title,
          description: formData.description,
        }),
      })
      const data = await res.json()
      if (data.success) {
        setDialogOpen(false)
        fetchPages()
      } else {
        alert("Error saving: " + data.error)
      }
    } catch (err) {
      console.error(err)
      alert("Failed to save metadata override.")
    } finally {
      setSaving(false)
    }
  }

  async function handleDeleteOverride(page: SeoPage) {
    if (!confirm("Are you sure you want to revert this page's metadata to defaults?")) return
    try {
      const res = await fetch("/api/seo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          route: page.route,
          title: "",
          description: "",
        }),
      })
      const data = await res.json()
      if (data.success) {
        fetchPages()
      }
    } catch (err) {
      console.error(err)
      alert("Failed to delete metadata override.")
    }
  }

  async function handleSync() {
    setSyncing(true)
    try {
      const res = await fetch("/api/seo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "sync" }),
      })
      const data = await res.json()
      if (data.success) {
        alert(data.message)
        fetchPages()
      } else {
        alert("Sync failed: " + data.error)
      }
    } catch (err) {
      console.error(err)
      alert("An error occurred during synchronization.")
    } finally {
      setSyncing(false)
    }
  }

  function handleDownloadBackup() {
    const overrides = pages
      .filter((p) => p.isOverride)
      .reduce((acc, p) => {
        acc[p.route] = { title: p.title, description: p.description }
        return acc
      }, {} as Record<string, any>)

    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(overrides, null, 2))
    const downloadAnchor = document.createElement("a")
    downloadAnchor.setAttribute("href", dataStr)
    downloadAnchor.setAttribute("download", "custom-metadata-overrides.json")
    document.body.appendChild(downloadAnchor)
    downloadAnchor.click()
    downloadAnchor.remove()
  }

  // Length Validation Helpers
  const titleLen = formData.title.length
  const descLen = formData.description.length

  const isTitleValid = titleLen >= 50 && titleLen <= 60
  const isDescValid = descLen >= 120 && descLen <= 160

  const filteredPages = pages.filter((page) => {
    const matchesSearch = page.route.toLowerCase().includes(search.toLowerCase()) || 
                          page.title.toLowerCase().includes(search.toLowerCase())
    const matchesType = filterType === "all" || page.type === filterType
    return matchesSearch && matchesType
  })

  return (
    <AdminShell
      title="SEO Metadata Manager"
      description="Manage Title Tags and Meta Descriptions for every route on the website"
      actions={
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={handleDownloadBackup} className="cursor-pointer">
            <Download className="mr-2 h-4 w-4" />
            Backup Overrides
          </Button>
          <Button size="sm" onClick={handleSync} disabled={syncing} className="cursor-pointer">
            <RefreshCw className={`mr-2 h-4 w-4 ${syncing ? "animate-spin" : ""}`} />
            Sync to Source Code
          </Button>
        </div>
      }
    >
      <div className="space-y-6">
        {/* Info Box */}
        <Card className="bg-secondary/40 border-none">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <Settings className="h-5 w-5 text-primary mt-0.5 shrink-0" />
              <div>
                <h4 className="font-semibold text-sm">Direct Code Injection System</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Editing metadata here will write overrides to <code className="bg-muted px-1.5 py-0.5 rounded text-xs">custom-metadata-overrides.json</code>.
                  Clicking <strong>Sync to Source Code</strong> will write these overrides back into the actual static page <code className="bg-muted px-1.5 py-0.5 rounded text-xs">page.tsx</code> files, blog json configs, and location json configs in-place, keeping the site fully static, optimized for Next.js build speeds, and version-controlled.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Filter Controls */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by URL route..."
              className="pl-9 h-10 w-full"
            />
          </div>
          <div className="flex items-center gap-2 border rounded-lg p-1 bg-card">
            {["all", "static", "location", "blog"].map((t) => (
              <Button
                key={t}
                variant={filterType === t ? "default" : "ghost"}
                size="sm"
                onClick={() => setFilterType(t)}
                className="capitalize text-xs px-3 h-8 cursor-pointer"
              >
                {t}
              </Button>
            ))}
          </div>
        </div>

        {/* SEO Pages Table */}
        <Card>
          <CardContent className="p-0">
            {loading ? (
              <div className="p-8 text-center text-muted-foreground flex items-center justify-center gap-2">
                <RefreshCw className="h-4 w-4 animate-spin" />
                Loading SEO metadata...
              </div>
            ) : filteredPages.length === 0 ? (
              <div className="p-8 text-center text-muted-foreground">No pages found matching criteria.</div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Route / URL Path</TableHead>
                    <TableHead>Page Type</TableHead>
                    <TableHead>Title Tag (50-60 Chars)</TableHead>
                    <TableHead>Meta Description (120-160 Chars)</TableHead>
                    <TableHead className="w-28 text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredPages.map((page) => {
                    const titleLength = page.title.length
                    const descLength = page.description.length

                    const titleStatus = titleLength >= 50 && titleLength <= 60 
                      ? "compliant" 
                      : titleLength > 0 ? "warning" : "empty"
                      
                    const descStatus = descLength >= 120 && descLength <= 160 
                      ? "compliant" 
                      : descLength > 0 ? "warning" : "empty"

                    return (
                      <TableRow key={page.route} className="hover:bg-secondary/20">
                        <TableCell className="font-mono text-xs font-semibold max-w-[200px] truncate">
                          <a href={page.route} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1.5 text-primary">
                            {page.route}
                            {page.isOverride && (
                              <Badge variant="secondary" className="text-[10px] px-1 py-0 bg-primary/10 text-primary border-none">
                                Override
                              </Badge>
                            )}
                          </a>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline" className="capitalize text-[10px] border-border bg-background">
                            {page.type}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="max-w-[250px]">
                            <p className="text-sm truncate text-foreground font-medium" title={page.title}>
                              {page.title || <span className="text-muted-foreground italic text-xs">No title set</span>}
                            </p>
                            {titleLength > 0 && (
                              <div className="flex items-center gap-1 mt-1">
                                <span className={`h-1.5 w-1.5 rounded-full ${titleStatus === "compliant" ? "bg-emerald-500" : "bg-amber-500"}`} />
                                <span className="text-[10px] text-muted-foreground">{titleLength} chars</span>
                              </div>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="max-w-[300px]">
                            <p className="text-xs text-muted-foreground line-clamp-2" title={page.description}>
                              {page.description || <span className="italic">No description set</span>}
                            </p>
                            {descLength > 0 && (
                              <div className="flex items-center gap-1 mt-1">
                                <span className={`h-1.5 w-1.5 rounded-full ${descStatus === "compliant" ? "bg-emerald-500" : "bg-amber-500"}`} />
                                <span className="text-[10px] text-muted-foreground">{descLength} chars</span>
                              </div>
                            )}
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-1.5">
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => openEditDialog(page)}
                              className="h-8 w-8 cursor-pointer"
                              title="Edit Metadata"
                            >
                              <Pencil className="h-3.5 w-3.5" />
                            </Button>
                            {page.isOverride && (
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => handleDeleteOverride(page)}
                                className="h-8 w-8 text-destructive hover:text-destructive cursor-pointer"
                                title="Revert to default"
                              >
                                <Trash2 className="h-3.5 w-3.5" />
                              </Button>
                            )}
                          </div>
                        </TableCell>
                      </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Edit Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 font-serif text-lg font-semibold">
              <FileText className="h-5 w-5 text-primary" />
              Configure Page Metadata
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-5 py-3">
            <div>
              <Label className="text-xs text-muted-foreground">Route Path</Label>
              <p className="font-mono text-sm font-semibold text-primary">{editingPage?.route}</p>
            </div>

            {/* Title Field */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <Label htmlFor="seo-title" className="font-medium text-sm">
                  Meta Title Tag
                </Label>
                <div className="flex items-center gap-1.5">
                  {titleLen > 0 && (
                    <>
                      {isTitleValid ? (
                        <CheckCircle className="h-3.5 w-3.5 text-emerald-500" />
                      ) : (
                        <AlertTriangle className="h-3.5 w-3.5 text-amber-500" />
                      )}
                      <span className={`text-xs font-semibold ${isTitleValid ? "text-emerald-600" : "text-amber-600"}`}>
                        {titleLen} / 60 Chars
                      </span>
                    </>
                  )}
                </div>
              </div>
              <Input
                id="seo-title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="Target keyword + branding | e.g. Custom Bath Remodel - ARZ"
                className="h-10"
              />
              <p className="text-[11px] text-muted-foreground">
                Ideal length is **50 to 60 characters** for search engine results.
              </p>
            </div>

            {/* Description Field */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <Label htmlFor="seo-desc" className="font-medium text-sm">
                  Meta Description
                </Label>
                <div className="flex items-center gap-1.5">
                  {descLen > 0 && (
                    <>
                      {isDescValid ? (
                        <CheckCircle className="h-3.5 w-3.5 text-emerald-500" />
                      ) : (
                        <AlertTriangle className="h-3.5 w-3.5 text-amber-500" />
                      )}
                      <span className={`text-xs font-semibold ${isDescValid ? "text-emerald-600" : "text-amber-600"}`}>
                        {descLen} / 160 Chars
                      </span>
                    </>
                  )}
                </div>
              </div>
              <Textarea
                id="seo-desc"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Enter compelling action-oriented summary of the page details..."
                rows={4}
                className="resize-none"
              />
              <p className="text-[11px] text-muted-foreground">
                Ideal length is **120 to 160 characters** to encourage user clicks.
              </p>
            </div>

            {/* Original values for comparison */}
            {editingPage && (editingPage.originalTitle || editingPage.originalDescription) && (
              <Card className="bg-secondary/20 border-none p-3 space-y-2 text-xs">
                <h5 className="font-bold text-muted-foreground">Original Hardcoded Metadata:</h5>
                {editingPage.originalTitle && (
                  <div>
                    <span className="font-semibold">Title:</span> {editingPage.originalTitle}
                  </div>
                )}
                {editingPage.originalDescription && (
                  <div>
                    <span className="font-semibold">Description:</span> {editingPage.originalDescription}
                  </div>
                )}
              </Card>
            )}

            <Button onClick={handleSave} disabled={saving} className="w-full h-11 cursor-pointer">
              {saving ? "Saving Changes..." : "Save Override"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </AdminShell>
  )
}
