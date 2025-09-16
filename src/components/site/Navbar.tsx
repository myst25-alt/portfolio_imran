"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { IconLink } from "@/components/ui/IconLink";
import { Github, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { site } from "@/data/site";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [active, setActive] = useState<string>("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -55% 0px", threshold: [0, 1] }
    );

    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) observer.observe(el);
    });

    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className={cn("sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-background/60", scrolled ? "border-b border-border" : "border-transparent")}>
      <div className="container flex h-16 items-center justify-between">
        <Link href="#home" className="text-sm font-semibold tracking-wide focus-ring">
          {site.name}
        </Link>
        <nav className="hidden gap-6 md:flex">
          {links.map((l) => (
            <Link key={l.id} href={`#${l.id}`} className={cn("relative text-sm text-foreground/80 transition hover:text-foreground focus-ring px-1 py-1")}> 
              <span>{l.label}</span>
              <span
                className={cn(
                  "absolute -bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded bg-primary transition-all duration-200",
                  active === l.id ? "w-6" : "w-0"
                )}
                aria-hidden
              />
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-2 sm:flex">
            <IconLink href={site.socials.github} label="GitHub">
              <Github size={18} />
            </IconLink>
            <IconLink href={site.socials.instagram} label="Instagram">
              <Instagram size={18} />
            </IconLink>
            <IconLink href={site.socials.linkedin} label="LinkedIn">
              <Linkedin size={18} />
            </IconLink>
          </div>
          <Link href="#contact" className="hidden md:inline-flex">
            <Button>Hire Me</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
