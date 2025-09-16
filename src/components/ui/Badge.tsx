import { cn } from "@/lib/cn";

export function Badge({ children, className, tone = "accent" }: { children: React.ReactNode; className?: string; tone?: "accent" | "primary" }) {
  const styles =
    tone === "accent"
      ? "border-accent/30 bg-accent/10 text-accent"
      : "border-primary/30 bg-primary/10 text-primary";
  return <span className={cn("inline-flex items-center rounded-md border px-2.5 py-1 text-xs font-medium", styles, className)}>{children}</span>;
}
