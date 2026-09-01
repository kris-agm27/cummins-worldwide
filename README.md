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

Import this folder or its Git repository in Vercel. Vercel detects Next.js automatically.

### Contact form email notifications

The contact form sends a team notification and a visitor confirmation through Mailgun. Add the variables listed in `.env.example` to the Vercel project before deploying. The sender is fixed in server code as `admin@agmagency.com`; never expose the Mailgun API key through a `NEXT_PUBLIC_` variable or commit it to the repository.

For strong deliverability, confirm that `agmagency.com` is active in Mailgun and that its SPF and DKIM records pass. Keep the existing DMARC policy monitored, test delivery to Gmail and Microsoft 365, and review Mailgun delivery, bounce, and complaint logs. Careers applications link directly to the relevant JobScore listings.
