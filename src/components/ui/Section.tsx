import { cn } from "@/lib/cn";

export function Section({ id, title, children, className }: { id: string; title?: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={cn("section", className)}>
      <div className="container">
        {title ? <h2 className="section-title">{title}</h2> : null}
        {children}
      </div>
    </section>
  );
}
