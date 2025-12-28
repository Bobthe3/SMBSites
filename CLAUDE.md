# Claude Supply - Agency & Client Sites

Single Next.js app hosting the Claude Supply agency website and client sites.

## Live Sites

| Route | Site | Description |
|-------|------|-------------|
| `/` | Agency Home | Claude Supply agency homepage |
| `/keekuzcom` | Keekuz | Restaurant client site |
| `/dinos` | Dinos | Restaurant client site |
| `/sweetgarden` | Sweet Garden | Bakery client site |
| `/pingsbistro` | Ping's Bistro | Hunan Chinese restaurant (bilingual EN/中文) |
| `/verdant` | Verdant | Healthy fast-casual restaurant (Sweetgreen-style) |
| `/ysg` | YSG Halal | Pakistani-American fusion halal restaurant |

## Structure

```
claudesupply.com/                → Agency website
claudesupply.com/keekuzcom/      → Keekuz restaurant
claudesupply.com/dinos/          → Dinos restaurant
claudesupply.com/sweetgarden/    → Sweet Garden bakery
claudesupply.com/pingsbistro/    → Ping's Bistro (Hunan)
claudesupply.com/verdant/        → Verdant (healthy bowls)
claudesupply.com/ysg/            → YSG Halal (Pakistani-American)
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
│   ├── sweetgarden/            # Sweet Garden client site
│   ├── pingsbistro/            # Ping's Bistro (standalone)
│   ├── verdant/                # Verdant (standalone)
│   └── ysg/                    # YSG Halal (standalone)
├── components/
│   ├── keekuzcom/              # Keekuz components
│   ├── dinos/                  # Dinos components
│   └── sweetgarden/            # Sweet Garden components
├── data/
│   ├── keekuzcom/              # Keekuz data
│   ├── dinos/                  # Dinos data
│   └── sweetgarden/            # Sweet Garden data
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
