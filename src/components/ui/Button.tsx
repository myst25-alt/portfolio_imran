import { cn } from "@/lib/cn";
import React from "react";

type Variant = "primary" | "outline" | "ghost";

type Size = "sm" | "md" | "lg";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
};

const base =
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition will-change-transform focus-ring disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary: "bg-primary text-primary-foreground hover:bg-primary/90 active:translate-y-px",
  outline: "border border-border bg-transparent hover:bg-foreground/5 active:translate-y-px",
  ghost: "hover:bg-foreground/5",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-3",
  md: "h-11 px-4",
  lg: "h-12 px-6 text-base",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return <button ref={ref} className={cn(base, variants[variant], sizes[size], className)} {...props} />;
  }
);
Button.displayName = "Button";
