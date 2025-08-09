Mission
 - Build a mobile-first, multilingual React website for Délice Brugge with pages: Home, Menu, Reserve. Animate tastefully using free Aceternity/Framer Motion-styled effects. Include embedded BookingNinja. Enrich copy for SEO while preserving the brand voice and content from the current site (`https://delicebrugge.be/`). Menu is displayed with tabs and links to the live PDF (`https://delicebrugge.be/wp-content/uploads/2025/07/Delice-Menu.pdf`).

Tech Stack
 - Vite + React 19
 - Tailwind CSS for styling
 - React Router for routing
 - i18next + react-i18next for i18n (EN default; NL, FR, DE, ES supported)
 - Framer Motion for subtle animations (free Aceternity-style motion)

Pages and Features
 - `/` Home: Hero, About, Reviews highlights (from site copy), address/hours, CTA buttons.
 - `/menu` Menu: Tabbed sections (Belgian Classics, Seafood, Pasta & Vegetarian, Desserts). Items derived from site content; link + inline PDF viewer to official menu PDF.
 - `/reserve` Reserve: Embed BookingNinja widget via provided script.
 - Footer: Address, opening hours, VAT, Traveller’s Choice note.

Content Sources (cited)
 - Current site copy and details: https://delicebrugge.be/
 - Menu PDF: https://delicebrugge.be/wp-content/uploads/2025/07/Delice-Menu.pdf

Internationalization
 - All UI strings and menu items localized (EN/NL/FR/DE/ES). Language switcher persists selection in `localStorage` and updates `<html lang>`.

SEO
 - Semantic HTML, enriched meta description/title in `index.html`.
 - Copy expanded with concise keyword phrases: “Authentic Belgian cuisine,” “Carbonade Flamande,” “Mussels,” “Minnewaterpark Bruges,” “family-owned restaurant,” “Traveller’s Choice”.

Animations
 - Use Framer Motion for hero entrance and section reveals; keep accessibility and performance in mind.

Accessibility
 - High color contrast, focus styles, semantic landmarks (`header`, `main`, `footer`).

Execution Steps (completed)
 1) Scaffold Vite app and install deps
 2) Configure Tailwind and base styles
 3) Add router and i18n with five locales
 4) Create pages: Home, Menu (tabs + PDF), Reserve (BookingNinja embed)
 5) Add SEO head tags and language switcher

Next Steps
 - Replace placeholder hero image with brand-provided asset
 - Add favicon/OG image
 - Fine-tune colors/typography to match brand
 - Optional: Add sitemap and robots.txt in `public/`


