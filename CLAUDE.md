# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start Vite dev server
npm run build      # Production build (outputs to /dist)
npm run lint       # Run ESLint
npm run preview    # Preview production build locally
```

## Tech Stack

- **React 19** + **React Router 7** (SPA with language-prefixed routes)
- **Vite 7** (build tool, ES modules)
- **Tailwind CSS 3** with custom design tokens
- **Framer Motion** for animations
- **i18next** / **react-i18next** for multilingual support (en, nl, fr, de, es)
- **EmailJS** for group booking form submission
- **BookingNinja** embedded widget for table reservations

## Architecture

### Routing

All routes exist in both a non-prefixed and a language-prefixed form:

```
/           → HomePage
/menu       → MenuPage
/reserve    → ReservePage
/groupmenu/:optionId?  → GroupMenuPage
/group-booking         → GroupBookingPage

/:lang/...  → same routes with language prefix (en, nl, fr, de, es)
```

Language is extracted from the URL path via helpers in `src/utils/languageUtils.js`. The active language is also persisted to `localStorage`.

### Internationalization

- Translation keys live in `src/locales/{lang}.js` (e.g., `en.js`, `nl.js`)
- Menu content (names, descriptions, prices) lives in `src/data/menu.json` and carries per-language translations inline
- Use the `useTranslation` hook with `t('namespace.key')` pattern
- When adding new UI strings, add the key to **all five** locale files

### Group Booking Flow

`GroupBookingPage.jsx` owns a `useReducer`-based state machine with 7 steps (Step0–Step6 components in `src/components/`). Each step component receives state and a dispatch function. The final submission sends email via EmailJS; credentials are in `src/config/emailjs.js`.

### Styling Conventions

Custom Tailwind tokens (defined in `tailwind.config.js`):
- Colors: `brand` (orange), `burgundy`, `cream`, `chocolate`, `gold`
- Reusable CSS classes: `.btn-primary`, `.surface`, `.container-responsive` (defined in global CSS)

### Deployment

Push to `dev` branch → GitHub Actions builds → publishes `/dist` to the `deploy` branch → Hostinger pulls from `deploy` branch.
