# Cummins Worldwide

A redesigned, responsive, multi-page Cummins Worldwide website built with Next.js and ready for Vercel.

## Pages

- `/` — Home
- `/about` — About
- `/services` — Services
- `/wisdom-center` — Wisdom Center
- `/careers` — Careers
- `/contact` — Contact

## Manage the site

- Main page content lives in `app/page.tsx`.
- Colors, typography, spacing, and responsive design live in `app/globals.css`.
- Logo and photography live in `public/`.
- Search and social-sharing details live in `app/layout.tsx`.

## Run locally

Install dependencies with `npm install`, then run `npm run dev`.

## Deploy to Vercel

Import this folder or its Git repository in Vercel. Vercel detects Next.js automatically; no custom build settings or environment variables are required.

The contact and careers buttons currently use the public Cummins Worldwide email addresses and require no backend service.
