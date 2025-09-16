import { cn } from "@/lib/cn";

export function IconLink({ href, label, children, className }: { href: string; label: string; children: React.ReactNode; className?: string }) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noreferrer noopener"
      className={cn(
        "focus-ring inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-foreground/5 text-foreground/80 transition hover:bg-foreground/10",
        className
      )}
    >
      {children}
    </a>
  );
}
