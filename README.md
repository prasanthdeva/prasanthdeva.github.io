# manirathnam.dev

Personal portfolio site — React + TypeScript + Vite, deployed to GitHub Pages.

## Stack

- Vite + React + TypeScript
- Tailwind CSS v4
- Framer Motion (scroll-reveal + interaction animations)
- `qrcode.react` for the contact vCard QR code

## Develop

```bash
npm install
npm run dev
```

## Deploy

Pushing to `master` triggers `.github/workflows/deploy.yml`, which builds
the site and publishes it via GitHub Pages' native Actions deployment —
no `gh-pages` branch, no manual build-and-commit step. The repo's Pages
source must be set to **GitHub Actions** (Settings → Pages → Build and
deployment → Source) for this to take effect; it only needs setting once.
