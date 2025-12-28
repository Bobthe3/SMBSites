# Site Deployment Monorepo

Multi-site deployment repository for claudesupply.com subfolders.

## Structure

```
sites/
├── keekuzcom/     → claudesupply.com/keekuzcom/
├── template/      → claudesupply.com/template/
└── [new-site]/    → claudesupply.com/[new-site]/
```

## Commands

### Development
```bash
npm run dev:keekuzcom    # Run keekuzcom locally (port 3000)
npm run dev:template     # Run template locally (port 3000)
```

### Build
```bash
npm run build:keekuzcom  # Build keekuzcom → sites/keekuzcom/out/
npm run build:template   # Build template → sites/template/out/
npm run build:all        # Build all sites
```

## Sites

| Folder | URL | Description |
|--------|-----|-------------|
| keekuzcom | claudesupply.com/keekuzcom/ | Keeku da Dhaba restaurant website |
| template | claudesupply.com/template/ | Basic starter template |

## Adding a New Site

1. Copy the `template` folder: `cp -r sites/template sites/newsite`
2. Update `sites/newsite/package.json` name to `"newsite"`
3. Update `sites/newsite/next.config.js` basePath to `'/newsite'`
4. Add scripts to root `package.json`:
   ```json
   "dev:newsite": "npm run dev --workspace=sites/newsite",
   "build:newsite": "npm run build --workspace=sites/newsite"
   ```
5. Run `npm install` to register the new workspace
6. Update this table with the new site info

## Deployment

Each site builds to static HTML in `sites/[name]/out/`. Upload the contents to the corresponding folder on claudesupply.com.

## Tech Stack

- Next.js 16 (App Router)
- React 18
- TypeScript
- Tailwind CSS
