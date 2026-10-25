# Ελένη Σακκά — ψυχολόγος

Single-page site. HTML, a little CSS, a little JavaScript, and [Tailwind](https://tailwindcss.com/) from a CDN so colours and layout classes can be edited and refreshed without a build.

The copy, phone, and email are placeholders.

## View it

From this folder:

```bash
python3 -m http.server 4173
```

Open `http://localhost:4173`. An internet connection is needed the first time so Tailwind and the fonts can load.

## Customise

- **Colours and fonts** — `tailwind.config` in `index.html`.
- **Words** — the text in `index.html`.
- **Phone and email** — search for `69Χ` and `email@example.com`.
- **Landing branches** — `images/branch-top.png` (top-left corner) and `images/branch-bottom.png` (bottom-right). They grow out once when the page opens. The mark inside the dark shape is `images/logo.png`.
- **Original files** — `images/originals/` keeps the uploads before background removal.

Motion is in `css/custom.css` (branch growth, the morphing shape, scroll reveals, the side vine). Behaviour is in `js/main.js`.

The contact form checks the fields in the browser and then shows a thank-you state. It does not send email yet.

Before publishing, remove the `noindex` meta tag in `index.html`.
