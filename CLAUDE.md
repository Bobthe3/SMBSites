# Claude Supply - Agency & Client Sites

Single Next.js app hosting the Claude Supply agency website and client test sites.

## Structure

```
claudesupply.com/                → Agency website
claudesupply.com/keekuzcom/...   → Keekuz client site
claudesupply.com/[client]/...    → Future client sites
```

### File Structure

```
sites/keekuzcom/
├── app/
│   ├── layout.tsx              # Root layout (agency)
│   ├── page.tsx                # Agency homepage
│   ├── globals.css
│   └── keekuzcom/              # Client site route
│       ├── layout.tsx          # Client-specific layout
│       ├── page.tsx            # Client homepage
│       ├── menu/
│       ├── about/
│       └── ...
├── components/
│   ├── keekuzcom/              # Client-specific components
│   └── ...
├── data/
│   └── keekuzcom/              # Client-specific data
└── ...
```

## Development

```bash
cd sites/keekuzcom
npm run dev                     # Run locally at localhost:3000
```

- Agency site: `localhost:3000/`
- Client site: `localhost:3000/keekuzcom/`

## Adding a New Client Site

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

- Next.js 16 (App Router)
- React 18
- TypeScript
- Tailwind CSS
