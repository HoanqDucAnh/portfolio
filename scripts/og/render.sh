#!/usr/bin/env bash
#
# Renders scripts/og/preview.html into public/preview.jpg (the 1200x630 social
# share card). Run with `npm run og` after editing the HTML.
#
# Dev-only: macOS Chrome + sips, no npm dependencies, not part of `next build`.
# Shoots at 2x and downsamples so the serif edges stay crisp at 1x.
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
SRC="$ROOT/scripts/og/preview.html"
OUT="$ROOT/public/preview.jpg"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

if [ ! -x "$CHROME" ]; then
	echo "Chrome not found at: $CHROME" >&2
	exit 1
fi

TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

# --allow-file-access-from-files is required for the local @font-face files.
"$CHROME" \
	--headless=new \
	--disable-gpu \
	--hide-scrollbars \
	--allow-file-access-from-files \
	--force-device-scale-factor=2 \
	--window-size=1200,630 \
	--screenshot="$TMP/og@2x.png" \
	"file://$SRC" >/dev/null 2>&1

sips -s format jpeg -s formatOptions 88 -z 630 1200 \
	"$TMP/og@2x.png" --out "$OUT" >/dev/null

echo "Wrote $OUT ($(du -h "$OUT" | cut -f1))"
