# Summer House Medspa Site

Production-ready Next.js marketing and lead-generation site for `summerhousemedspa.com`.

## Stack

- Next.js (App Router, TypeScript)
- Tailwind CSS v4
- GA4-ready analytics integration
- Serverless lead endpoint (`POST /api/leads`) with webhook + Airtable support

## Local Development

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Environment Variables

- `NEXT_PUBLIC_SITE_URL` - public base URL (default: `https://summerhousemedspa.com`)
- `NEXT_PUBLIC_CONTACT_PHONE` - public call CTA number
- `NEXT_PUBLIC_CONTACT_EMAIL` - footer/legal contact email
- `NEXT_PUBLIC_BOOKING_URL` - optional external booking link (if omitted, CTA routes to on-page form)
- `NEXT_PUBLIC_DIRECTIONS_URL` - optional map/directions URL override
- `NEXT_PUBLIC_REVIEW_URL` - optional reviews URL override
- `NEXT_PUBLIC_INSTAGRAM_URL` - optional social profile for schema/footer
- `NEXT_PUBLIC_FACEBOOK_URL` - optional social profile for schema/footer
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` - GA4 measurement ID (example: `G-XXXXXXXXXX`)
- `GOOGLE_SITE_VERIFICATION` - Search Console verification token
- `LEAD_WEBHOOK_URL` - webhook for lead forwarding (Zapier/Make/CRM middleware)
- `AIRTABLE_API_KEY` - Airtable personal access token (optional)
- `AIRTABLE_BASE_ID` - Airtable base ID (optional)
- `AIRTABLE_TABLE_NAME` - Airtable table name (default: `Summer House Leads`)

If neither Airtable nor webhook is configured, form submission succeeds and writes lead payloads to function logs (`sink: logs_only`).

## Quality Checks

```bash
npm run lint
npm run build
```

## Deploy (Netlify)

1. Create/import Netlify site from this repo.
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Add required environment variables in Netlify UI.
5. Attach primary domain: `summerhousemedspa.com`.

### Recommended Domain Routing (Porkbun)

Use one canonical primary domain and 301-redirect intent domains to matching service pages:

- `dallasfiller.com` -> `/services/dallas-filler`
- `dallasozempic.com` -> `/services/glp1-weight-loss-dallas`
- `glp1weightlossdallas.com` -> `/services/glp1-weight-loss-dallas`
- `dallasprescriptionweightloss.com` -> `/services/glp1-weight-loss-dallas`
- `retatrutidedallas.com` + `dallasretatrutide.com` -> `/blog/semaglutide-vs-tirzepatide-dallas`
- `oralweightlossdallas.com` + `glp1pilldallas.com` + `pillglp1.com` -> `/blog/semaglutide-vs-tirzepatide-dallas`
- `dallasbestmedspa.com` -> `/`

## Repository Structure

```
src/                        # Next.js app source
  app/                      # Pages (App Router)
  components/               # Shared UI components
  lib/                      # Content, analytics, site config
  middleware.ts             # www → apex 308 redirect

public/images/              # Brand images (logo, salon)

content/
  condition-pages/          # SEO hub-and-spoke content (peptide therapy)
  seo-research/             # Keyword research & market briefings
  strategy/                 # Marketing strategy docs

assets/documents/           # PDFs, DOCX strategy files
domains/
  landing-pages/            # Static HTML pages for intent domains
  docs/                     # Domain deployment guides
```
