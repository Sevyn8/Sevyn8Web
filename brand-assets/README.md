# Sevyn8 — Brand Assets (v4 · Spectrum Intelligence)

## Logo files
**Vector (preferred — scales to any size, never distorts):**
- `logo/sevyn8-mark-spectrum.svg` — primary mark, spectrum gradient, white core (use on dark / photos)
- `logo/sevyn8-mark-spectrum-light.svg` — spectrum gradient, ink core (use on light)
- `logo/sevyn8-mark-ink.svg` — one-color ink (light backgrounds, print, etch)
- `logo/sevyn8-mark-white.svg` — one-color white (dark backgrounds)
- `logo/sevyn8-mark-animated.svg` — self-contained animated mark (loops in any browser)
- `logo/sevyn8-lockup-light.svg` / `sevyn8-lockup-dark.svg` — mark + wordmark (best choice for website headers)

**Raster (PNG):**
| File | Size | Use |
|---|---|---|
| `logo/png/sevyn8-mark-ink-400.png` | 400×400 | **LinkedIn** company/profile logo |
| `logo/png/sevyn8-mark-ink-512/180/64/32.png` | square | App icon, apple-touch, favicons |
| `logo/png/sevyn8-mark-transparent-512/192.png` | square | Mark on light surfaces (transparent) |
| `logo/png/sevyn8-mark-transparent-white-512.png` | 512 | Mark on dark surfaces (transparent) |
| `logo/png/sevyn8-mark-white-512/400.png` | square | Mark on white tile |
| `logo/png/sevyn8-lockup-light-760x180.png` | 760×180 | Website header (light) |
| `logo/png/sevyn8-lockup-dark-760x180.png` | 760×180 | Website header / email (dark) |
| `logo/png/sevyn8-linkedin-banner-1128x191.png` | 1128×191 | **LinkedIn** cover banner |

All marks are 1:1 square and centered with safe padding — drop them into any square avatar slot without cropping or stretching.

## Tokens (hand to engineering / Claude Code)
- `tokens.css` — CSS custom properties (`:root`), light/dark theme hooks
- `tokens.json` — same values as structured data, with roles + rules

### Suggested Claude Code prompt
> Use `tokens.css` / `tokens.json` as the single source of truth. Ion (`--ion #414BF5`) is the only hue on chrome & CTAs; cyan = live/active only; magenta = highlights & data-viz only. The spectrum gradient is logo-only. Support dark (ink) and light (paper) from the same tokens, and never set body text in a brand hue.

## Rules of thumb
- **Never** recolor the spectrum, rotate, or stretch the mark.
- Minimum on-screen size 28px; below that use 3 layers / thicker strokes.
- Clear space around the logo ≥ its own height.
