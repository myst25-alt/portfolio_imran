Test plan — Projects grid and cards

Breakpoints
- <640px: 1 column
- ≥640px: 2 columns
- ≥1024px: 3 columns
- ≥1536px: 4 columns

Card structure & consistency
- Media uses aspect-[16/9] with Image when present, skeleton otherwise
- Title line-clamp-2, description line-clamp-2
- Tags wrap; container max-h-16 to avoid overflow
- Footer actions visible, buttons height ≥44px
- Card uses transform for hover; no layout shift

A11y
- All interactive elements are reachable via keyboard and have focus ring
- Links have aria-labels
- Contrast checked on dark background (> 4.5:1 for body)

Performance
- Images lazy-loaded with sizes hints
- No layout shift on hover; predictable heights
