import type { SVGProps } from "react"
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
    href: "#",
  },
  {
    title: "FinFlow",
    description:
      "Personal finance dashboard. Replace this with what it does and what you’re proud of.",
    tags: ["Dashboard", "Python"],
    href: "#",
  },
  {
    title: "AquaPrint",
    description:
      "E-commerce landing page. Replace this with the audience, the goal, and the result.",
    tags: ["E-commerce", "HTML/CSS"],
    href: "#",
  },
  {
    title: "Argus Security",
    description:
      "Landing page for a CCTV services company. Replace this with your role and what you shipped.",
    tags: ["Landing page", "JavaScript"],
    href: "#",
  },
]

const work =
  [
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
  "Python",
  "JavaScript",
  "PHP",
  "Flask",
  "PostgreSQL",
  "InfluxDB",
  "Supabase",
  "pandas",
  "YOLO",
  "FFmpeg",
  "Docker",
  "Proxmox",
  "Prometheus",
  "Grafana",
  "Moodle",
  "n8n",
  "make.com",
  "zapier",
  "Claude",
  "Cursor",
  "Lovable"
]

const socials = [
  { label: "Email", handle: "adrianglenn.atibagos@gmail.com", href: "mailto:adrianglenn.atibagos@gmail.com", icon: Mail },
  { label: "GitHub", handle: "@adrianglenn21", href: "https://github.com/adrianglenn21", icon: Github },
  { label: "LinkedIn", handle: "/in/adrian-glenn-atibagos-a650441b3/", href: "https://www.linkedin.com/in/adrian-glenn-atibagos-a650441b3/", icon: Linkedin },
]

const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#socials" },
]

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function Portfolio() {
  return (
    <div className="min-h-screen scroll-smooth bg-background text-foreground">
      {/* Marquee animation: scrolls left to right, pauses on hover */}
      <style>{`
        @keyframes marquee-ltr {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
        .marquee-track { animation: marquee-ltr 40s linear infinite; }
        .marquee:hover .marquee-track { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none; }
          .marquee { overflow-x: auto; }
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
        <section className="pt-20">
          <div className="mb-6 flex items-center gap-5">
            <div
              aria-hidden
              className="grid size-[72px] shrink-0 place-items-center rounded-full border bg-muted text-2xl font-semibold"
            >
              {profile.name[0]}
            </div>
            <Badge variant="outline" className="gap-1.5 py-1">
              <span className="size-2 rounded-full bg-green-500" />
              Available for new projects
            </Badge>
          </div>
          <h1 className="max-w-3xl text-4xl font-bold leading-[1.05] tracking-tighter sm:text-5xl md:text-6xl">
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

        {/* School attainment */}
        <section id="education" className="scroll-mt-20 pt-20">
          <h2 className="text-3xl font-semibold tracking-tight">School attainment</h2>
          <p className="mb-8 mt-2 max-w-xl text-muted-foreground">
            Where I studied and what I earned.
          </p>
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
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
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