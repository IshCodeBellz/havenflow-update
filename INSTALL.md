# Haven Flow Care — website

The marketing site for [havenflowcare.co.uk](https://www.havenflowcare.co.uk), built with
**Next.js 14 (App Router)**, **TypeScript** and **Tailwind CSS**, deployed on Vercel.

`havenflow.co.uk` serves the same deployment.

---

## Running locally

```bash
npm install
npm run dev
```

Other scripts: `npm run build`, `npm run start`, `npm run lint`.

Form submissions will not send locally — see [Forms](#forms) below.

---

## Environment variables

| Variable | Used by | Scope |
|---|---|---|
| `CONTACT_FORM_WEBHOOK_URL` | `/api/contact`, `/api/care-home-staffing` | Production only |
| `CAREGIVER_FORM_WEBHOOK_URL` | `/api/caregiver-application` | Production only |

Both point at Formspree endpoints and are set in the Vercel project, **scoped to
Production only**. Two consequences worth knowing:

- Preview deployments have no webhook, so form submissions there return
  `503 Form service not configured yet` instead of reaching the live inbox.
- The same is true locally unless you create a `.env.local` (see `.env.example`).

Contact and care-home-staffing enquiries share one Formspree form, distinguished
by an `enquiryType` field in the payload. Splitting them means adding a third
variable and pointing `app/api/care-home-staffing/route.ts` at it.

---

## Structure

```
app/
  layout.tsx                      Root layout — fonts, metadata, OG tags
  globals.css                     Tokens as utility classes (.container-hf, .btn, .eyebrow…)
  page.tsx                        Home
  about/ services/ contact/       Marketing pages
  care-home-staffing/             Staffing offer + enquiry form
  caregiver-application/          Careers + application form
  havenwork/                      HavenWork app page
  nanny-services/                 Hidden from nav, still routable
  privacy/ cookies/ terms/        Legal, one shared layout
  not-found.tsx                   404
  sitemap.ts  robots.ts           SEO
  icon.png  apple-icon.png        Favicons, generated from public/havenflow-mark.png
  api/contact/                    Form handlers — rate limiting, honeypot, webhook POST
  api/caregiver-application/
  api/care-home-staffing/

components/
  layout/SiteShell.tsx            Header + <main> + footer; every page wraps in this
  layout/SiteHeader.tsx           Contact bar, nav with active state, mobile menu
  layout/SiteFooter.tsx           Navy arc, nav, contact, referral card
  layout/PageHero.tsx             Page headings — split / stacked / center
  layout/PageCta.tsx              Closing pink band
  layout/LegalArticle.tsx         Shared layout for the three legal pages
  home/                           Homepage sections
  contact/ caregiver/ staffing/   Client-side forms
  ui/ArchFrame.tsx                The arched photo frame motif
  ui/Icons.tsx                    Inline SVG icons
  CookieBanner.tsx                Consent banner
  StructuredData.tsx              LocalBusiness JSON-LD

lib/
  services.ts                     The six services — shared by /services, the homepage
                                  list and the JSON-LD OfferCatalog
  images.ts                       The four Contentful photo assets
  formSubmission.ts               Rate limiting, email validation, name splitting
```

---

## Design tokens

Defined in `tailwind.config.ts`, with shared patterns as component classes in
`app/globals.css`.

### Colour

| Token | Hex | Use |
|---|---|---|
| `navy` | `#0F3459` | Primary ink, buttons, dark sections, footer |
| `navy-card` | `#183F67` | Card on navy |
| `navy-line` | `#2B5079` | Dividers on navy |
| `rose` | `#DAAAB2` | Palette rose |
| `rose-ink` | `#9A5262` | Rose **text** on light backgrounds (contrast-safe) |
| `rose-deep` | `#8A4656` | Rose text on `pink-pale` |
| `rose-soft` | `#F3DCE1` | Pills, icon circles, light buttons on navy |
| `rose-on-navy` | `#E6B9C2` | Eyebrows and numbers on navy |
| `blush` | `#FEF9FA` | Page background |
| `blush-2` | `#F6E6EA` | Alternate section bands |
| `pink-pale` | `#EED3D7` | CTA band, card fills |
| `mauve` | `#E0D5DB` | Card fills |
| `sky` | `#D5E0EA` | Card fills |
| `steel` | `#5C7E9B` | Care Home Staffing hero, check icons |
| `body` | `#33445A` | Body text |
| `muted` | `#5A6779` | Secondary text |
| `line` | `#EADDE2` | Borders |
| `input-border` | `#D9C9D0` | Form field borders |

Never use `rose` for text on a light background — use `rose-ink`.

### Type

- **Jost** 400/500/600 — everything. Headings are 500 with tight tracking.
- **Newsreader** italic 400 — accent words in headings, step numbers, the mission
  quote. Apply with the `.accent` class.
- Sizes: `text-display-1` … `text-display-5` and `text-lead` are clamp-based.
- Eyebrows: the `.eyebrow` class (13px, 600, uppercase, `0.18em`, `rose-ink`).
  Add `.eyebrow-on-navy` on dark sections.

### Layout

- `.container-hf` — max 1240px, `clamp(20px, 4vw, 32px)` side padding.
- `.section-y` — the standard ~104px vertical rhythm.
- `.btn` with `.btn-primary` / `.btn-secondary` / `.btn-light` / `.btn-white` /
  `.btn-outline-white`; add `.btn-sm` for the 48px variant.
- Cards: white, 1px `line` border, radius 24–32px.
- **Arched frames** (`rounded-arch`) are the signature motif, echoing the curve at
  the base of the logo. Use `components/ui/ArchFrame.tsx`.
- The footer opens with a navy SVG arc over the page background, so **the last
  section on every page must sit on `blush`**.

---

## Forms

Three forms, each posting to its own API route rather than to Formspree directly,
so the endpoint stays server-side:

| Form | Route | Handler |
|---|---|---|
| Contact | `/contact` | `app/api/contact/route.ts` |
| Caregiver application | `/caregiver-application` | `app/api/caregiver-application/route.ts` |
| Care home staffing | `/care-home-staffing#enquire` | `app/api/care-home-staffing/route.ts` |

Every handler rate limits to 5 submissions per IP per 15 minutes, silently accepts
honeypot hits, validates required fields, and returns:

- `400` invalid input · `429` rate limited · `503` webhook not configured · `502` webhook rejected

Rate limiting is in-memory, so it resets on cold start and is per-instance — it
deters casual spam rather than a determined attacker.

---

## Accessibility

Maintained deliberately; keep these when editing:

- Real `<button>` / `<a>` / `<label>` elements, never clickable `<div>`s
- `aria-current="page"` on the active nav link, `aria-pressed` on the contact pills
- Visible focus outline on every interactive element (set globally in `globals.css`)
- 44px minimum touch targets
- Decorative images use `alt=""`; meaningful ones describe the content

---

## Images

Photography comes from Contentful and is referenced in `lib/images.ts`. The host is
allow-listed in `next.config.js`. Use `next/image` with `object-cover` and keep the
arched shapes.

---

## Deployment

Pushing to `main` deploys to production; pull requests get preview deployments.

After changing the share card (`public/og-image.png`), re-scrape it in Facebook's
Sharing Debugger and LinkedIn's Post Inspector — both cache aggressively. Browsers
cache favicons just as hard.

`public/og-image.png` and the favicons are generated placeholders built from the
existing brand assets, not bespoke design work. Both are swappable by replacing the
file.

---

Questions? Email admin@havenflowcare.co.uk
