import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export function About() {
  return (
    <section id="about" className="section">
      <div className="container grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2 space-y-4">
          <h2 className="section-title">About</h2>
          <p className="max-w-prose text-foreground/80">
            I’m a Hyderabad-based professional video editor (24) focused on cinematic storytelling, fast-turnaround social reels, and clean motion graphics. I blend pacing, sound design, and color to bring narratives to life.
          </p>
          <div className="flex items-center gap-3">
            <Badge>AVAILABLE</Badge>
            <Link href="#contact">
              <Button variant="outline">Let’s collaborate</Button>
            </Link>
          </div>
        </div>
        <div className="h-48 rounded-xl border border-border bg-gradient-to-br from-primary/20 to-accent/20 shadow-soft" />
      </div>
    </section>
  );
}
