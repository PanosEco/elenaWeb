# Ελένη Σακκά — ψυχολόγος

Single-page site. HTML, a little CSS, a little JavaScript, and [Tailwind](https://tailwindcss.com/) from a CDN so colours and layout classes can be edited and refreshed without a build.

The copy, phone, email, and address are placeholders. The photo frames stay empty until image files are added.

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
- **Address and studies** — the dashed slots in the about and contact sections.
- **Photos** — add files (or change the `src`):
  - `images/portrait.jpg`
  - `images/office.jpg`
  - `images/detail-1.jpg`
  - `images/detail-2.jpg`

  A frame fills itself when its file loads.

Motion is in `css/custom.css` (tree drawing, floating leaves, scroll reveals, the side vine). Behaviour is in `js/main.js`.

The contact form checks the fields in the browser and then shows a thank-you state. It does not send email yet.

Before publishing, remove the `noindex` meta tag in `index.html`.
