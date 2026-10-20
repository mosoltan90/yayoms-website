# YAYOMS public website — local review candidate

Static HTML/CSS and one small vanilla-JavaScript language switcher. No build step,
server-side runtime, dependencies, collection forms, cookies, analytics or trackers.
The files are prepared for a later GitHub Pages publication from this existing
repository's root. Nothing has been committed, pushed, published or configured in DNS.

## Pages and review

- `index.html` — Home
- `privacy/index.html` — full Arabic and English privacy policy
- `support/index.html` — contact and native accessible FAQ disclosures
- Arabic is the default (RTL); English uses `?lang=en` (LTR).
- Language follows internal navigation through the URL. It is not saved in browser storage.
- Without JavaScript, both translations remain readable. JavaScript is not required to read the privacy policy.
- Review each page and both languages locally **before** approving any Git commit or publication.

For a local HTTP preview, from this folder a standard static server can be used,
for example `python -m http.server 4173 --bind 127.0.0.1` if Python is installed.
Then visit `http://127.0.0.1:4173/`. No server is required on GitHub Pages.
Development-only QA utilities and evidence are kept **outside this repository**
in the sibling `YAYOMS_WEBSITE_QA` folder, so they are not part of the public site.

## Current composition — IMAGE 1 + IMAGE 2 (20 October 2026)

The homepage is native HTML/CSS, composed from the two owner-approved references.
IMAGE 1 is the visual source; IMAGE 2 guides the layout only and is not served by
the site. The hero has live text/actions on the right and a blended cropped
entertainment visual on the left, with six native feature cards immediately below.
At mobile widths it stacks text, actions, note, visual and feature cards in that order.

- `assets/yayoms-hero-source-image1.png`: exact, unchanged master copied from
  the attached IMAGE 1 (1672×941).
- `assets/yayoms-hero-visual.webp`: crop x=0, y=0, width=1060, height=941;
  WebP quality 93, no stretching or generation. The crop excludes the outside-phone
  logo, headline, copy, features and download button. The fictional in-phone UI
  remains part of the illustrative visual; it is not a catalog or interactive app.
- The original full artwork and earlier button-removal derivative below are retained
  for provenance only. They are **not referenced by any current page**.
- The same visual is used in both languages; native surrounding copy/alt/caption
  and navigation switch between Arabic RTL and English LTR.
- No new AI image, logo, movie, series, football brand, framework or tracker was added.

Local review evidence and five screenshots are in the sibling
`YAYOMS_WEBSITE_QA/composition-final/` directory, outside the public site.
See `../YAYOMS_WEBSITE_COMPOSITION_FINAL_REPORT.md` for the final handoff.

## Approved identity and retained legacy assets

- `assets/yayoms-logo.png`: byte-for-byte copy of the approved transparent horizontal
  YAYOMS lockup with the full S. No tracing, recoloring, mirroring or redraw.
- `assets/yayoms-icon.png`: byte-for-byte copy of the approved 512px app icon.
- `assets/yayoms-hero-approved-master.png`: the exact owner-supplied promotional
  PNG, preserved byte-for-byte. This is the approved visual source of truth.
- The owner subsequently requested removal of the large outside-phone download
  button. `assets/yayoms-hero-approved-no-download.png` is the limited edited
  derivative. Every pixel outside the authorized lower-right button/background
  region matches the master; the logo, phone and other text remain unchanged.
- `assets/yayoms-hero-approved.webp`: optimized delivery version of that derivative,
  1672×941. No alternate hero or branding was generated. The artwork is illustrative
  and depicts fictional entertainment, not a YAYOMS-supplied content catalog.
- The old full-composition version is retained only. The current homepage uses the
  cropped IMAGE 1 derivative described above, not the full poster.
- Earlier generated football/adventure assets and mockup CSS remain preserved but
  are no longer referenced by the pages. Do not mistake them for the approved hero.
- Earlier `assets/app-home-ar.webp` and `assets/app-home-en.webp` screenshot exports
  are preserved locally but no longer referenced by the pages.
- Arabic fonts are the existing IBM Plex Sans Arabic Regular and SemiBold, self-hosted.
  Their SIL Open Font License and copyright notice are retained in `assets/fonts/OFL.txt`.
  “No third-party copyrighted content” refers to media/catalog imagery; these fonts are
  properly licensed third-party software, not claimed to be original YAYOMS fonts.

The site uses the approved black/teal palette and system fonts for English. No
remote font/CDN/image service is loaded. The only external links are public policy
references and the site's canonical domain; they are not embedded resources.

## Privacy source basis and owner review

The policy uses the current Android implementation and the prior final policy draft:
encrypted remembered login (Android Keystore/AES-GCM), salted PBKDF2 PIN verification,
local Room/library/search/preferences, backup exclusions, provider-direct requests,
HTTP risk, Google Play Billing foundation and Google Play services/Cronet disclosures.
It also explains hosting and email-support processing without claiming “no data”.

Developer: **yayoms app**. Public contact: **yayomsapp@gmail.com**.
Effective date: **19 October 2026**. The policy's profiles/supervision section neutrally
explains that the app is not designed for children. No public age-rating emphasis.
No paid-benefit promotion or nonexistent app-store download link is included.
The owner should approve the public policy wording and ensure it still matches the
release and actual support retention practices before publishing. This is not a
claim of legal certification or that the URLs are already publicly live.

Canonical targets: `https://yayoms.com/`, `https://yayoms.com/privacy`,
`https://yayoms.com/support`. Folder links intentionally use trailing slashes for
static hosting; canonical tags use the exact requested targets.

`CNAME` contains only `yayoms.com`. It does not configure DNS by itself locally.
`.nojekyll` prepares ordinary static serving. **No automatic deployment workflow is included.**

Do not copy private review-provider credentials, validation files, Android source,
provider URLs, or the sibling QA folder into this public website repository.
