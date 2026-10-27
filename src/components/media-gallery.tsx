"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react"

import { Button } from "@/components/ui/button"

export type MediaItem = {
    type: "image" | "video"
    title: string
    caption?: string
    /** Path in /public (e.g. "/gallery/demo.mp4") or a full URL. Not needed for YouTube. */
    src?: string
    /** Optional thumbnail for videos. */
    poster?: string
    /** YouTube video ID (the part after ?v=). Use with type: "video". */
    youtube?: string
}

type Filter = "all" | "image" | "video"

const filters: { value: Filter; label: string }[] = [
    { value: "all", label: "All" },
    { value: "image", label: "Images" },
    { value: "video", label: "Videos" },
]

function thumbnail(item: MediaItem) {
    if (item.youtube) return `https://i.ytimg.com/vi/${item.youtube}/hqdefault.jpg`
    if (item.poster) return item.poster
    return item.type === "image" ? item.src : undefined
}

export function MediaGallery({ items }: { items: MediaItem[] }) {
    const [filter, setFilter] = useState<Filter>("all")
    const [index, setIndex] = useState<number | null>(null)
    const dialogRef = useRef<HTMLDialogElement>(null)

    const visible = items.filter((i) => filter === "all" || i.type === filter)
    const active = index !== null ? visible[index] : null

    function open(i: number) {
        setIndex(i)
        dialogRef.current?.showModal()
    }

    function close() {
        dialogRef.current?.close()
    }

    function step(dir: number) {
        if (index === null || visible.length === 0) return
        setIndex((index + dir + visible.length) % visible.length)
    }

    // Arrow keys move between items while the viewer is open
    useEffect(() => {
        if (index === null) return
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "ArrowRight") step(1)
            if (e.key === "ArrowLeft") step(-1)
        }
        window.addEventListener("keydown", onKey)
        return () => window.removeEventListener("keydown", onKey)
    })

    if (items.length === 0) {
        return (
            <p className="rounded-xl border border-dashed p-10 text-center text-muted-foreground">
                Add your first image or video to the <code>gallery</code> list in page.tsx.
            </p>
        )
    }

    return (
        <div>
            <div className="mb-6 flex flex-wrap gap-2" role="group" aria-label="Filter gallery">
                {filters.map((f) => (
                    <Button
                        key={f.value}
                        size="sm"
                        variant={filter === f.value ? "default" : "outline"}
                        onClick={() => setFilter(f.value)}
                    >
                        {f.label}
                    </Button>
                ))}
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {visible.map((item, i) => {
                    const thumb = thumbnail(item)
                    return (
                        <button
                            key={`${item.title}-${i}`}
                            type="button"
                            onClick={() => open(i)}
                            className="group overflow-hidden rounded-xl border bg-card text-left transition-colors hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                        >
                            <div className="relative aspect-video bg-muted">
                                {thumb ? (
                                    // eslint-disable-next-line @next/next/no-img-element
                                    <img
                                        src={thumb}
                                        alt={item.title}
                                        loading="lazy"
                                        className="size-full object-cover"
                                        onError={(e) => (e.currentTarget.style.display = "none")}
                                    />
                                ) : item.src ? (
                                    <video
                                        src={`${item.src}#t=0.1`}
                                        preload="metadata"
                                        muted
                                        playsInline
                                        className="size-full object-cover"
                                    />
                                ) : null}
                                {item.type === "video" && (
                                    <span className="absolute inset-0 grid place-items-center">
                                        <span className="grid size-12 place-items-center rounded-full bg-background/90 text-foreground shadow transition-transform group-hover:scale-110">
                                            <Play className="size-5 fill-current" />
                                        </span>
                                    </span>
                                )}
                            </div>
                            <div className="p-3">
                                <p className="text-sm font-medium">{item.title}</p>
                                {item.caption && (
                                    <p className="mt-0.5 text-[13px] text-muted-foreground">{item.caption}</p>
                                )}
                            </div>
                        </button>
                    )
                })}
            </div>

            {/* Full-size viewer (native <dialog>, no extra dependencies) */}
            <dialog
                ref={dialogRef}
                onClose={() => setIndex(null)}
                onClick={(e) => {
                    if (e.target === e.currentTarget) close()
                }}
                className="m-auto max-h-[92vh] w-[min(92vw,60rem)] overflow-hidden rounded-xl border bg-card p-0 text-card-foreground shadow-xl backdrop:bg-black/70"
            >
                {active && (
                    <div className="flex flex-col">
                        <div className="flex items-start justify-between gap-3 border-b px-4 py-3">
                            <div className="min-w-0">
                                <p className="truncate font-medium">{active.title}</p>
                                {active.caption && (
                                    <p className="text-sm text-muted-foreground">{active.caption}</p>
                                )}
                            </div>
                            <Button size="icon" variant="ghost" onClick={close} aria-label="Close viewer">
                                <X className="size-4" />
                            </Button>
                        </div>

                        <div className="bg-black">
                            {active.youtube ? (
                                <iframe
                                    key={active.youtube}
                                    className="aspect-video w-full"
                                    src={`https://www.youtube-nocookie.com/embed/${active.youtube}?rel=0`}
                                    title={active.title}
                                    allow="accelerometer; autoplay; encrypted-media; picture-in-picture"
                                    allowFullScreen
                                />
                            ) : active.type === "video" ? (
                                <video
                                    key={active.src}
                                    src={active.src}
                                    poster={active.poster}
                                    controls
                                    autoPlay
                                    playsInline
                                    className="max-h-[70vh] w-full"
                                />
                            ) : (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img
                                    key={active.src}
                                    src={active.src}
                                    alt={active.title}
                                    className="max-h-[70vh] w-full object-contain"
                                />
                            )}
                        </div>

                        <div className="flex items-center justify-between px-4 py-3">
                            <Button size="sm" variant="outline" onClick={() => step(-1)}>
                                <ChevronLeft className="size-4" /> Previous
                            </Button>
                            <span className="font-mono text-xs text-muted-foreground">
                                {(index ?? 0) + 1} / {visible.length}
                            </span>
                            <Button size="sm" variant="outline" onClick={() => step(1)}>
                                Next <ChevronRight className="size-4" />
                            </Button>
                        </div>
                    </div>
                )}
            </dialog>
        </div>
    )
}