# Imran Uzair — Portfolio

Modern portfolio built with Next.js (App Router), TypeScript, and Tailwind CSS. The design uses a dark-first palette with a purple → teal accent theme, subtle gradients, and accessible motion.

## Structure
```
/next.config.ts
/postcss.config.js
/tailwind.config.ts
/tsconfig.json
/src
  /app
    /layout.tsx
    /page.tsx
  /components
    /site
      Navbar.tsx, Hero.tsx, About.tsx, Skills.tsx, Projects.tsx, Contact.tsx, Footer.tsx, BuyMeACoffee.tsx
    /ui
      Button.tsx, Chip.tsx, Card.tsx, Badge.tsx, IconLink.tsx
  /data
    site.ts, skills.ts, projects.ts
  /lib
    cn.ts
  /styles
    globals.css
/public
  /images
  /projects (place project cover images here)
```

## Theming
Theme tokens are defined in `src/styles/globals.css` via CSS variables:
- --primary: #6D28D9 (purple)
- --accent: #10B981 (teal)
- Focus ring and gradients derive from --primary.

Fonts:
- Inter (variable) as the default UI font
- JetBrains Mono for code-like headings and chips (use `font-mono`)

## Editing content
- Site identity and social links: `src/data/site.ts`
- Skills list: `src/data/skills.ts`
- Projects list: `src/data/projects.ts`

Add project cover images to `public/projects/<slug>-cover.webp` and reference them from `projects.ts`. If an image is missing, the Projects grid renders a skeleton gracefully.

## Projects grid behavior
- Breakpoints: 1 col <640px, 2 cols ≥640px, 3 cols ≥1024px, 4 cols ≥1536px
- Cards keep consistent media aspect (16:9), clamp title/description, tags wrap with bounded height, and actions stay visible
- Keyboard-focus friendly with visible focus rings; hover uses transforms to avoid layout shift
- Images optimized with `next/image` and lazy loading below-the-fold

