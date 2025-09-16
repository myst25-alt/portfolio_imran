import { Chip } from "@/components/ui/Chip";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export function Hero() {
  return (
    <section id="home" className="section">
      <div className="container grid items-center gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <p className="text-sm text-foreground/60">// Welcome to my digital universe</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            <span className="font-mono text-foreground/80">Hi(); </span>
            <span className="text-foreground/70">I’m </span>
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Imran Uzair</span>
          </h1>
          <p className="text-lg font-medium text-foreground/80">Pro Video Editor</p>
          <p className="max-w-prose text-foreground/70">
            Hyderabad-based, 24 years old — crafting cinematic edits and crisp social-ready cuts.
          </p>
          <div className="flex gap-3">
            <Button asChild>
              <Link href="#projects">View Projects</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="#contact">Contact</Link>
            </Button>
          </div>
        </div>
        <div className="relative h-64 overflow-hidden rounded-2xl border border-border bg-gradient-to-tr from-primary/20 to-accent/20 shadow-soft lg:h-80">
          <div className="absolute -left-10 -top-10 h-40 w-40 animate-float rounded-full bg-primary/30 blur-3xl" />
          <div className="absolute -bottom-10 -right-10 h-48 w-48 animate-float rounded-full bg-accent/30 blur-3xl" />
        </div>
      </div>
    </section>
  );
}
