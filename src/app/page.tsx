import type { SVGProps } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Mail } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { MediaGallery, type MediaItem } from "@/components/media-gallery"

/* Brand icons as local SVGs (newer lucide-react versions no longer ship them) */
const svgProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const

function Github(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...svgProps} {...props}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.1-1.4-.4-2.7-1.3-3.7.4-1.2.4-2.5 0-3.7 0 0-1.2-.3-3.5 1.3a12 12 0 0 0-6.4 0C6.5 2.8 5.3 3.1 5.3 3.1c-.4 1.2-.4 2.5 0 3.7A5.4 5.4 0 0 0 4 10.5C4 14 7 16 10 16a4.8 4.8 0 0 0-1 3.5V22" />
      <path d="M9 18c-4.5 2-5-2-7-2" />
    </svg>
  )
}

function Linkedin(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...svgProps} {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
    </svg>
  )
}

function Facebook(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...svgProps} {...props}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

/* ------------------------------------------------------------------ */
/*  Edit your content here                                             */
/* ------------------------------------------------------------------ */

const profile = {
  name: "Adrian",
  role: "Software and DevOps Engineer",
  location: "Davao, Philippines",
  photo: "/profile.png", // e.g. "/profile.jpg" (file goes in public/). Leave empty to show your initial.
  year: 2026, // footer copyright year (update when it changes)
  headline: "I build and run software that stays up.",
  bio: "4+ years across backend systems, cloud infrastructure, IoT dashboards, and computer vision.",
}

const projects = [
  {
    title: "PulseGrid",
    description:
      "Landing page for an IoT monitoring dashboard. Replace this with a one-sentence summary of the problem it solves.",
    tags: ["IoT", "JavaScript"],
    href: "https://pulse-grid-coral.vercel.app/",
  },
  {
    title: "FinFlow",
    description:
      "Personal finance dashboard. Replace this with what it does and what you’re proud of.",
    tags: ["Dashboard", "Python"],
    href: "https://finflow-tkes.vercel.app/",
  },
  {
    title: "AquaPrint",
    description:
      "E-commerce landing page. Replace this with the audience, the goal, and the result.",
    tags: ["E-commerce", "HTML/CSS"],
    href: "https://aqua-print.vercel.app/",
  },
  {
    title: "Argus Security",
    description:
      "Landing page for a CCTV services company. Replace this with your role and what you shipped.",
    tags: ["Landing page", "JavaScript"],
    href: "https://argus-security-opal.vercel.app/",
  },
]

const gallery: MediaItem[] = [
  // Put files in public/gallery/ and reference them like "/gallery/your-file.jpg".
  // // For YouTube, use { type: "video", youtube: "VIDEO_ID", title: "..." }.
  // { type: "image", src: "/gallery/dashboard.jpg", title: "IoT dashboard", caption: "Live sensor charts and alerts." },
  // { type: "video", youtube: "YOUTUBE_VIDEO_ID", title: "Project walkthrough", caption: "A short tour of how it works." },
  // { type: "image", src: "/gallery/landing-page.jpg", title: "Client landing page", caption: "Responsive layout for a services company." },
  { type: "video", src: "/gallery/yolo.mp4", poster: "/gallery/yolo.png", title: "Detection demo", caption: "YOLO model running on a live camera feed." },
  { type: "image", src: "/gallery/scorsaizy.png", title: "Scorsaizy", caption: "Content Creation Web App" },
  { type: "video", src: "/gallery/live-dashboard.mov", poster: "/gallery/live-dashboard.png", title: "Live 3D map Dashboard", caption: "Live 3D map dashboard" },
]

const work = [
  {
    period: "2025 – Present",
    title: "Freelance Software Developer & DevOps Engineer",
    detail:
      "Developing IoT monitoring dashboards, managing Proxmox infrastructure and Linux servers, and training YOLO computer vision models for real-time analytics and automation.",
  },
  {
    period: "2023 – 2025",
    title: "SAS-AIN – Dolibarr & PrestaShop Developer",
    detail:
      "Developed custom PHP modules, plugins, and integrations for Dolibarr ERP/CRM and PrestaShop e-commerce platforms, extending functionality to meet specific business requirements.",
  },
  {
    period: "2021 – 2023",
    title: "Salmet GmbH – Software Engineer",
    detail:
      "Built and maintained web applications, developed IoT solutions for device communication and data monitoring, and managed Linux server infrastructure and deployments.",
  },
  {
    period: "2020 – 2021",
    title: "Junior Full-Stack Developer",
    detail:
      "Designed and developed custom PHP-based CRM dashboards, implementing frontend interfaces, backend logic, and database integrations to streamline business workflows.",
  },
]

const stack = [
  "Python", "JavaScript", "PHP", "Flask", "PostgreSQL", "InfluxDB", "Supabase",
  "pandas", "YOLO", "FFmpeg", "Docker", "Proxmox", "Prometheus", "Grafana",
  "Moodle", "n8n", "make.com", "zapier", "Claude", "Cursor", "Lovable",
]

const socials = [
  { label: "Email", handle: "adrianglenn.atibagos@gmail.com", href: "mailto:adrianglenn.atibagos@gmail.com", icon: Mail },
  { label: "GitHub", handle: "@adrianglenn21", href: "https://github.com/adrianglenn21", icon: Github },
  { label: "LinkedIn", handle: "/in/adrian-glenn-atibagos-a650441b3/", href: "https://www.linkedin.com/in/adrian-glenn-atibagos-a650441b3/", icon: Linkedin },
]

const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Gallery", href: "#gallery" },
  { label: "Education", href: "#education" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#socials" },
]

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

/* Hero background: apps get packaged and shipped up to the cloud */
function CloudBackground() {
  const routes = [
    { d: "M560 600 C560 440 860 420 880 190", begin: "0s", label: "git push", x: 560 },
    { d: "M760 600 C760 470 890 430 895 190", begin: "1.7s", label: "docker build", x: 760 },
    { d: "M1010 600 C1010 460 930 420 910 190", begin: "3.4s", label: "deploy", x: 1010 },
  ]
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute left-1/2 top-0 -z-10 h-full w-screen -translate-x-1/2 overflow-hidden"
      style={{
        maskImage: "linear-gradient(to bottom, #000 75%, transparent)",
        WebkitMaskImage: "linear-gradient(to bottom, #000 75%, transparent)",
      }}
    >
      <svg viewBox="0 0 1200 600" preserveAspectRatio="xMaxYMid slice" className="size-full">
        <defs>
          <pattern id="cl-grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M48 0H0V48" fill="none" className="stroke-border" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="1200" height="600" fill="url(#cl-grid)" opacity="0.6" />

        {/* delivery routes */}
        {routes.map((r) => (
          <path key={r.d} d={r.d} fill="none" className="cl-flow stroke-primary/30" strokeWidth="2" strokeLinecap="round" />
        ))}

        {/* origins */}
        {routes.map((r) => (
          <text key={r.label} x={r.x} y={578} textAnchor="middle" fontSize="13" className="fill-muted-foreground font-mono">
            {r.label}
          </text>
        ))}

        {/* the cloud */}
        <g transform="translate(790 60) scale(1.15)">
          <ellipse cx="95" cy="108" rx="70" ry="14" fill="none" className="cl-ring stroke-primary" strokeWidth="2" />
          <path
            d="M50 110 C22 110 8 90 14 70 C18 54 34 46 46 50 C50 24 78 8 106 18 C124 24 134 40 134 52 C162 48 184 66 180 88 C177 102 164 110 148 110 Z"
            className="fill-card stroke-primary/50"
            strokeWidth="2"
          />
          <circle cx="95" cy="68" r="16" className="fill-primary" />
          <path d="M87 68l6 6 12-13" fill="none" className="stroke-primary-foreground" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </g>

        {/* app packages travelling to the cloud */}
        {routes.map((r) => (
          <g key={`p-${r.d}`} className="cl-packet" opacity="0">
            <rect x="-18" y="-13" width="36" height="26" rx="5" className="fill-card stroke-primary" strokeWidth="2" />
            <path d="M-10 -4H6M-10 3H0" className="stroke-primary" strokeWidth="2" strokeLinecap="round" />
            <animateMotion path={r.d} dur="5.1s" begin={r.begin} repeatCount="indefinite" />
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.12;0.85;1" dur="5.1s" begin={r.begin} repeatCount="indefinite" />
          </g>
        ))}
      </svg>
      {/* keeps the headline readable */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, var(--background) 0%, color-mix(in oklab, var(--background) 60%, transparent) 40%, transparent 70%)",
        }}
      />
    </div>
  )
}

export default function Portfolio() {
  return (
    <div className="min-h-screen scroll-smooth overflow-x-clip bg-background text-foreground">
      {/* Animations: marquee (left to right), hero cloud routes */}
      <style>{`
        @keyframes marquee-ltr {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
        .marquee-track { animation: marquee-ltr 40s linear infinite; }
        .marquee:hover .marquee-track { animation-play-state: paused; }
        @keyframes cl-dash { to { stroke-dashoffset: -12; } }
        @keyframes cl-ring { 0% { transform: scale(.85); opacity: .55; } 100% { transform: scale(1.35); opacity: 0; } }
        .cl-flow { stroke-dasharray: 4 8; animation: cl-dash 1.2s linear infinite; }
        .cl-ring { transform-box: fill-box; transform-origin: center; animation: cl-ring 1.7s ease-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none; }
          .marquee { overflow-x: auto; }
          .cl-flow, .cl-ring { animation: none; }
          .cl-packet { display: none; }
        }
      `}</style>

      {/* Header */}
      <header className="sticky top-0 z-20 border-b bg-background/85 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-5">
          <Link href="#top" className="font-semibold tracking-tight">
            {profile.name}
          </Link>
          <nav aria-label="Main" className="hidden items-center gap-1 sm:flex">
            {navLinks.map((l) => (
              <Button
                key={l.href}
                render={<Link href={l.href} />}
                nativeButton={false}
                variant="ghost"
                size="sm"
                className="text-muted-foreground"
              >
                {l.label}
              </Button>
            ))}
          </nav>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-5xl px-5">
        {/* Hero */}
        <section className="relative isolate min-h-[36rem] pt-20 pb-10">
          <CloudBackground />
          <div className="relative max-w-2xl">
            <div className="mb-6 flex items-center gap-5">
              {profile.photo ? (
                <Image
                  src={profile.photo}
                  alt={`${profile.name}, profile photo`}
                  width={96}
                  height={96}
                  priority
                  className="size-24 shrink-0 rounded-full border object-cover"
                />
              ) : (
                <div
                  aria-hidden
                  className="grid size-24 shrink-0 place-items-center rounded-full border bg-muted text-3xl font-semibold"
                >
                  {profile.name[0]}
                </div>
              )}
              <Badge variant="outline" className="gap-1.5 bg-background/70 py-1 backdrop-blur">
                <span className="size-2 rounded-full bg-green-500" />
                Available for new projects
              </Badge>
            </div>
            <h1 className="text-4xl font-bold leading-[1.05] tracking-tighter sm:text-5xl md:text-6xl">
              Hi, I’m {profile.name}. {profile.headline}
            </h1>
            <p className="mt-4 max-w-xl text-lg text-muted-foreground">
              {profile.role} in {profile.location}. {profile.bio}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button render={<Link href="#projects" />} nativeButton={false}>
                View projects
              </Button>
              <Button render={<Link href="#socials" />} nativeButton={false} variant="outline">
                Get in touch
              </Button>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="scroll-mt-20 pt-20">
          <h2 className="text-3xl font-semibold tracking-tight">Projects</h2>
          <p className="mb-8 mt-2 max-w-xl text-muted-foreground">
            A selection of things I’ve designed, built, and deployed.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {projects.map((p) => (
              <Card key={p.title} className="flex flex-col">
                <CardHeader>
                  <CardTitle>{p.title}</CardTitle>
                  <CardDescription>{p.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <Badge key={t} variant="secondary">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    render={<Link href={p.href} target="_blank" rel="noopener noreferrer" />}
                    nativeButton={false}
                    variant="link"
                    className="h-auto p-0"
                  >
                    View project <ArrowUpRight className="size-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="education" className="scroll-mt-20 pt-20">
          <h2 className="mb-8 text-3xl font-semibold tracking-tight">Work experience</h2>
          <ol className="ml-1 space-y-7 border-l pl-6">
            {work.map((e) => (
              <li key={e.title} className="relative">
                <span className="absolute -left-[29px] top-2 size-2.5 rounded-full bg-primary" />
                <span className="font-mono text-xs text-muted-foreground">{e.period}</span>
                <h3 className="font-semibold">{e.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{e.detail}</p>
              </li>
            ))}
          </ol>
        </section>
      </main>

      {/* Languages and tools: auto-scrolls left to right */}
      <section id="stack" className="scroll-mt-20 pt-20">
        <div className="mx-auto max-w-5xl px-5">
          <h2 className="text-3xl font-semibold tracking-tight">Languages and tools</h2>
          <p className="mb-8 mt-2 max-w-xl text-muted-foreground">What I reach for day to day.</p>
        </div>
        <div
          className="marquee overflow-hidden border-y py-5"
          style={{
            maskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
            WebkitMaskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
          }}
          aria-label="Languages and tools"
        >
          <div className="marquee-track flex w-max">
            {[0, 1].map((copy) => (
              <ul
                key={copy}
                aria-hidden={copy === 1}
                className="flex shrink-0 gap-3 pr-3"
              >
                {stack.map((s) => (
                  <li key={s}>
                    <Badge variant="outline" className="h-10 rounded-md px-4 text-sm font-medium">
                      {s}
                    </Badge>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-5">
        {/* Socials */}
        <section id="socials" className="scroll-mt-20 pt-20">
          <h2 className="text-3xl font-semibold tracking-tight">Find me online</h2>
          <p className="mb-8 mt-2 max-w-xl text-muted-foreground">
            The fastest way to reach me is email.
          </p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {socials.map(({ label, handle, href, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group"
              >
                <Card className="transition-colors group-hover:bg-muted">
                  <CardContent className="flex items-center gap-3 p-4">
                    <span className="grid size-9 shrink-0 place-items-center rounded-md bg-secondary">
                      <Icon className="size-4" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-semibold leading-tight">{label}</span>
                      <span className="block truncate text-[13px] text-muted-foreground">
                        {handle}
                      </span>
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="mt-20">
        <Separator />
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-5 py-8 text-sm text-muted-foreground">
          <span>
            © {profile.year} {profile.name}. All rights reserved.
          </span>
          <nav aria-label="Footer" className="flex gap-4">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-foreground">
                {l.label}
              </Link>
            ))}
            <Link href="#top" className="hover:text-foreground">
              Back to top
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}