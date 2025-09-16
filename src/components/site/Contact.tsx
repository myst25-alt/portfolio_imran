"use client";
import { useState } from "react";
import { Button } from "@/components/ui/Button";

export function Contact() {
  const [status, setStatus] = useState<string | null>(null);
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const message = String(form.get("message") || "").trim();
    if (!name || !email || !message) {
      setStatus("Please fill all fields.");
      return;
    }
    setStatus("Thanks! I will get back to you soon.");
    e.currentTarget.reset();
  }

  return (
    <section id="contact" className="section">
      <div className="container grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="section-title">Contact</h2>
          <p className="max-w-prose text-foreground/70">
            Prefer email or socials? I’m flexible. Send a quick note and I’ll reply within 24 hours.
          </p>
          <div className="mt-4 space-y-2 text-sm text-foreground/80">
            <p>Email: <a href="mailto:you@example.com" className="underline decoration-primary/50 underline-offset-4">you@example.com</a></p>
          </div>
        </div>
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground/80">Name</label>
            <input id="name" name="name" type="text" required className="mt-1 block w-full rounded-md border-border bg-background/60 text-foreground shadow-sm placeholder:text-foreground/40 focus:border-primary focus:ring-primary" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground/80">Email</label>
            <input id="email" name="email" type="email" required className="mt-1 block w-full rounded-md border-border bg-background/60 text-foreground shadow-sm placeholder:text-foreground/40 focus:border-primary focus:ring-primary" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-foreground/80">Message</label>
            <textarea id="message" name="message" rows={5} required className="mt-1 block w-full rounded-md border-border bg-background/60 text-foreground shadow-sm placeholder:text-foreground/40 focus:border-primary focus:ring-primary" />
          </div>
          {status ? <p role="status" className="text-sm text-accent">{status}</p> : null}
          <Button type="submit" className="h-12 px-6">Send message</Button>
        </form>
      </div>
    </section>
  );
}
