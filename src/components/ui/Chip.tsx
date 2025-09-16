import { cn } from "@/lib/cn";

export function Chip({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={cn("inline-flex items-center rounded-full border border-border bg-foreground/5 px-3 py-1 text-xs text-foreground/80", className)}>
      {children}
    </span>
  );
}
