# Fonts for the OG card render

EB Garamond (latin subset), pulled from Google Fonts:

- `EBGaramond-Regular.woff2` — 400 normal
- `EBGaramond-Italic.woff2` — 400 italic

Licensed under the [SIL Open Font License 1.1](https://openfontlicense.org/),
copyright the EB Garamond Project Authors.

These are **build-time only** — they are read by `scripts/og/preview.html` when
`npm run og` renders `public/preview.jpg`, and are deliberately kept out of
`public/fonts/` so they never ship to visitors. Vendored rather than fetched at
render time so the card renders identically offline and years from now.
