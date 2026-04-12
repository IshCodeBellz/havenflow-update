# Haven Flow Care — Website Update

This folder contains the full redesigned homepage and all inner pages for havenflowcare.co.uk, built for **Next.js 14+ (App Router)** with **Tailwind CSS**.

---

## What's included

```
app/
  layout.tsx                    ← Root layout (fonts, metadata)
  globals.css                   ← Base styles + fade-up animation
  page.tsx                      ← Homepage
  about/page.tsx                ← About page
  services/page.tsx             ← Services page
  nanny-services/page.tsx       ← Nanny Services page
  contact/page.tsx              ← Contact page (with form)
  caregiver-application/page.tsx ← Careers / Application page (with form)

components/home/
  Navbar.tsx                    ← Sticky nav with mobile drawer
  Hero.tsx                      ← Homepage hero with stats card
  Strip.tsx                     ← Rose credibility strip
  Services.tsx                  ← Services grid (homepage)
  About.tsx                     ← About split section (homepage)
  CtaSection.tsx                ← CTA with contact details
  Footer.tsx                    ← Full footer with nav + social

tailwind.config.ts              ← Brand colours + custom fonts
```

---

## How to apply to your existing project

### Step 1 — Install fonts
Make sure you have the Google Fonts packages (already included in Next.js by default):
```
npm install next
```
The fonts (Cormorant Garamond + DM Sans) are loaded via `next/font/google` in `layout.tsx` — no extra install needed.

### Step 2 — Copy `tailwind.config.ts`
Replace or merge your existing `tailwind.config.ts` with the one in this folder. It adds:
- Brand colours: `navy`, `rose`, `slate`, `cream`
- Font families: `serif` (Cormorant Garamond), `sans` (DM Sans)

### Step 3 — Copy `app/globals.css`
Replace your existing `globals.css` (or merge if you have custom styles to keep).

### Step 4 — Copy `app/layout.tsx`
Replace your root layout. This sets up the fonts and site metadata.

### Step 5 — Copy the components
Copy the entire `components/home/` folder into your project's `components/` directory.

### Step 6 — Copy the pages
Copy each folder from `app/` into your project's `app/` directory:
- `app/page.tsx` → homepage
- `app/about/page.tsx` → `/about`
- `app/services/page.tsx` → `/services`
- `app/nanny-services/page.tsx` → `/nanny-services`
- `app/contact/page.tsx` → `/contact`
- `app/caregiver-application/page.tsx` → `/caregiver-application`

---

## Wiring up the contact forms

Both `contact/page.tsx` and `caregiver-application/page.tsx` have working React forms with state, but the submission handler is a placeholder. To make them actually send:

**Option A — Formspree (easiest, free tier available)**
1. Create a free account at [formspree.io](https://formspree.io)
2. Create a form and copy your endpoint URL
3. Replace the `handleSubmit` function with:
```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  })
  setSubmitted(true)
}
```

**Option B — Next.js Server Action**
Replace `handleSubmit` with a server action that sends via Resend or Nodemailer to `admin@havenflowcare.co.uk`.

---

## Brand colours (for reference)

| Token | Hex |
|---|---|
| `navy` | `#1a2756` |
| `navy-deep` | `#0f1c48` |
| `navy-darker` | `#0a1230` |
| `rose` | `#c26b82` |
| `rose-dark` | `#a8566b` |
| `rose-light` | `#e8aab8` |
| `cream` | `#f9f7f4` |

---

Questions? Email admin@havenflowcare.co.uk
