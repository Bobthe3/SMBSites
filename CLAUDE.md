# Claude Supply - Agency & Client Sites

Single Next.js app hosting the Claude Supply agency website and client sites.

## Live Sites

| Route | Site | Description |
|-------|------|-------------|
| `/` | Agency Home | Claude Supply agency homepage |
| `/keekuzcom` | Keekuz | Restaurant client site |
| `/dinos` | Dinos | Restaurant client site |
| `/pingsbistro` | Ping's Bistro | Hunan Chinese restaurant (bilingual EN/中文) |
| `/verdant` | Verdant | Healthy fast-casual restaurant (Sweetgreen-style) |
| `/ysg` | YSG Halal | Pakistani-American fusion halal restaurant |
| `/siafusion` | Sia Fusion | Korean-Japanese fusion eatery (late night) |

## Structure

```
claudesupply.com/                → Agency website
claudesupply.com/keekuzcom/      → Keekuz restaurant
claudesupply.com/dinos/          → Dinos restaurant
claudesupply.com/pingsbistro/    → Ping's Bistro (Hunan)
claudesupply.com/verdant/        → Verdant (healthy bowls)
claudesupply.com/ysg/            → YSG Halal (Pakistani-American)
claudesupply.com/siafusion/      → Sia Fusion (Korean-Japanese)
```

### File Structure

```
sites/keekuzcom/
├── app/
│   ├── layout.tsx              # Root layout (agency)
│   ├── page.tsx                # Agency homepage
│   ├── globals.css
│   ├── keekuzcom/              # Keekuz client site
│   ├── dinos/                  # Dinos client site
│   ├── pingsbistro/            # Ping's Bistro (standalone)
│   ├── verdant/                # Verdant (standalone)
│   ├── ysg/                    # YSG Halal (standalone)
│   └── siafusion/              # Sia Fusion (standalone)
├── components/
│   ├── keekuzcom/              # Keekuz components
│   └── dinos/                  # Dinos components
├── data/
│   ├── keekuzcom/              # Keekuz data
│   └── dinos/                  # Dinos data
└── ...
```

## Development

```bash
cd sites/keekuzcom
npm run dev                     # Run locally at localhost:3000
```

- Agency site: `localhost:3000/`
- Client sites: `localhost:3000/[sitename]/`

## Adding a New Client Site

### Simple (Standalone page)
1. Create route folder: `app/newclient/`
2. Add `layout.tsx` and `page.tsx` with inline styles
3. Push to GitHub → auto-deploys to `claudesupply.com/newclient/`

### Full (With components/data)
1. Create route folder: `app/newclient/`
2. Add `layout.tsx` and `page.tsx`
3. Create components: `components/newclient/`
4. Create data: `data/newclient/`
5. Push to GitHub → auto-deploys to `claudesupply.com/newclient/`

## Deployment

- **GitHub repo:** github.com/Bobthe3/SMBSites
- **Vercel:** Auto-deploys on push to master
- **Root directory in Vercel:** `sites/keekuzcom`

## Tech Stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS

## TODO

### Contact Forms (Lead Generation)
Wire up contact forms across all sites to actually send emails to business owners.

**Implementation:**
1. Create `/app/api/contact/route.ts` API endpoint
2. Set up email service (Resend - free tier: 100 emails/day)
3. Add spam protection (honeypot field, rate limiting)
4. Config file mapping site → owner email address
5. Add success/error states to all contact forms

**Flow:**
```
Contact Form → /api/contact → Resend API → Business Owner Email
```

**Affected sites:** All client sites with contact sections
