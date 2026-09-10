# Linda's Ringana USA site

A custom, single-page site — no page builder, no dependencies beyond two Google Fonts and one handwritten accent font. Ready to publish on GitHub Pages for free.

## 1. Add your photos

The site works right now with soft placeholder boxes wherever a photo is missing, so nothing looks broken while you're getting images ready. Drop files into the `images/` folder using these **exact filenames** and they'll appear automatically — no code changes needed:

| Filename | Where it's used | Suggested shape |
|---|---|---|
| `images/hero.jpg` | You & your baby, top of page | portrait, roughly 4:5 |
| `images/moment-playdate.jpg` | Mama & Mini playdate | portrait, 4:5 |
| `images/moment-team-event.jpg` | Bigger partner event | portrait, 4:5 |
| `images/moment-workspace.jpg` | Your home workspace | portrait, 4:5 |
| `images/product-tinted-moisturiser.jpg` | Tinted moisturiser | portrait, 4:5 |
| `images/product-overnight.jpg` | Overnight face treatment | portrait, 4:5 |
| `images/product-chi.jpg` | CHI | portrait, 4:5 |
| `images/product-enzyme-mask.jpg` | Enzyme mask | portrait, 4:5 |

**On the product photos specifically:** I wasn't able to reliably pull real images directly off ringana.com — their shop is a JavaScript app that blocks the kind of automated fetch I have access to, and their press-image page blocks bots outright. As an official partner you have the cleanest path to the real ones: save them straight from your Ringana partner back-office or product pages (right-click → Save Image), rename to match the table above, and drop them in. That's also more reliable long-term than linking to their site directly, since a hotlinked image can break if they ever restructure their store.

## 2. Preview it locally (optional)

Just double-click `index.html` — it opens in any browser, no server needed.

## 3. Publish for free on GitHub Pages

1. Go to [github.com](https://github.com) and log in (or create a free account).
2. Click the **+** in the top right → **New repository**. Name it something like `ringana-usa` and make sure it's set to **Public**. Don't add a README (you already have one).
3. On the new repo's page, click **uploading an existing file**.
4. Drag in all four items: `index.html`, the `css` folder, the `js` folder, and the `images` folder (with your photos already inside). Commit the changes.
5. Go to the repo's **Settings** tab → **Pages** (left sidebar).
6. Under "Build and deployment," set **Source** to "Deploy from a branch," branch `main`, folder `/ (root)`. Save.
7. GitHub gives you a live link in a minute or two, usually `https://your-username.github.io/ringana-usa/`.

That link is what you'll share on Instagram, in your bio, everywhere.

## 4. Customizing

All colors, fonts, and spacing live at the top of `css/styles.css` under `:root { ... }` — change a value there and it updates everywhere it's used. The three fonts (Outfit for headings, Manrope for body text, Caveat for the handwritten notes) are loaded from Google Fonts in `index.html`.

## What's intentionally restrained

Per solid design practice, motion is used in exactly three places — the hero's one-time entrance, the stat numbers counting up as you scroll to them, and the timeline's connecting line drawing itself in — rather than a generic fade-in on every section, which tends to read as templated rather than considered.
