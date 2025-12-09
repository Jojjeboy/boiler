# Angular PWA Boilerplate – Sammanfattning

Denna sammanfattning täcker alla senaste delar du fått genererade:

## Ingående delar
- Komplett PWA‑stöd (service worker, manifest, ikoner)
- TailwindCSS integrerat i Angular
- Google Authentication via Firebase Auth
- Firestore och Storage inkluderade
- Offline-kö för uploads med IndexedDB/LocalForage
- GitHub Actions CI/CD med lint, test och deploy till GitHub Pages
- Kompletta page-komponenter: Login, Home, Profile, Upload
- Routing + AuthGuard
- Navbar-komponent
- Förslag på repo‑struktur för snabb kloning/reuse

## Komponenter som ingår
- `LoginPageComponent`
- `HomePageComponent`
- `ProfilePageComponent`
- `UploadPageComponent`
- `NavbarComponent`

## Services
- `AuthService`
- `AuthGuard`
- `UploadQueueService`

## CI/CD
- `ci.yml` workflow för GitHub Actions (lint → test → build → deploy)

## Rekommenderad struktur
```
/src
  /app
    /core
    /shared
    /pages
    /services
  /assets
/environments
.github/workflows/ci.yml
```

Detta är en *sammanfattning*, inte fullständig kod. Alla filer finns i huvudguiden i din canvas.
