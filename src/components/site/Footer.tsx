export function Footer() {
  return (
    <footer className="border-t border-border py-8 text-sm text-foreground/60">
      <div className="container flex flex-col items-center justify-between gap-2 sm:flex-row">
        <p>© {new Date().getFullYear()} Imran Uzair. All rights reserved.</p>
        <p className="text-foreground/50">v1.0 — polished and in progress.</p>
      </div>
    </footer>
  );
}
