# Cummins Worldwide

A redesigned, responsive, multi-page Cummins Worldwide website built with Next.js and ready for Vercel.

## Pages

- `/` — Home
- `/about` — About
- `/services` — Services
- `/wisdom-center` — Wisdom Center
- `/careers` — Careers
- `/contact` — Contact
- `/thank-you` — Form submission confirmation

## Manage the site

- Main page content lives in `app/page.tsx`.
- Colors, typography, spacing, and responsive design live in `app/globals.css`.
- Logo and photography live in `public/`.
- Search and social-sharing details live in `app/layout.tsx`.

## Run locally

Install dependencies with `npm install`, then run `npm run dev`.

## Deploy to Vercel

Import this folder or its Git repository in Vercel. Vercel detects Next.js automatically; no custom build settings or environment variables are required.

The contact form uses FormSubmit and sends inquiry notifications to `kristopher@agmagency.com`. After the first live submission, open the activation email sent by FormSubmit and confirm the address once. Careers applications link directly to the relevant JobScore listings.
