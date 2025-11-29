---
description: Design System Guidelines for MZ Fitness Hub
---

# Design System

## Typography
- **Primary Font (Serif):** Instrument Serif
- **Usage:** Use for all headings and body text in the Hero Section and "Why We're Different" section, and potentially other feature sections to maintain a premium feel.
- **Class:** `font-serif` (configured in tailwind.config.ts to use Instrument Serif)

## Backgrounds
- **Universal Noisy Background:**
  - Base Color: Off-white `#F9F9F9`
  - Noise Overlay:
    ```jsx
    <div className="absolute inset-0 opacity-40" style={{
      backgroundImage: 'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJzIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNzKSIvPjwvc3ZnPg==")',
      backgroundSize: '300px 300px',
      mixBlendMode: 'multiply'
    }}></div>
    ```
  - **Usage:** Apply this background style to cards and light-themed sections to ensure consistency.

## Colors
- **Hero Gradient:** `bg-gradient-to-r from-black via-[#100b14] to-orange-500`
- **Accents:** Orange (`orange-500`, `orange-600`)

use grey noisy background for all of the sections to maintain consistent bg.

layout must be curved - clean & minimalistic.

use transitions if needed.