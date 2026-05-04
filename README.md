# My Cafe

A React + TypeScript + Vite admin dashboard for a cafe. Use this app to manage orders, inventory, staff, reservations, tables, and menu items.

## Features

- Dashboard overview with quick summary cards
- Orders management and status display
- Inventory tracking with product counts
- Staff list and details view
- Reservations scheduling and table assignments
- Menu browsing with categories and prices
- Responsive layout built with React components

## Project structure

- `src/` — application source code
  - `components/` — UI components used across pages
  - `features/` — dashboard and section-specific views
  - `hooks/` — custom hooks for menu, reservations, and staff data
- `public/` — static JSON data for inventory, menu, reservations, staff, and tables
- `vite.config.ts` — Vite build configuration
- `tsconfig.json` — TypeScript config

## Getting started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open the app in your browser at:

```text
http://localhost:5173
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Scripts

- `npm run dev` — start Vite development server
- `npm run build` — build production assets
- `npm run preview` — preview the production build locally

## Notes

The app uses local JSON data in `public/` for demo content. Update those files to change menu items, inventory, reservations, tables, or staff.
