# Nail Tech Trainer · אתמר ניילס

אפליקציית הדרכה לטכנאיות ציפורניים (PWA־סטייל, מובייל־פרסט) בעברית RTL.

**English:** Mobile-first Hebrew SPA for nail technician training — guided lessons, local AI mentor (no API key), store placeholder, and brand kit for Etamar Nails.

## Features (v1)
- מדריכים צעד־אחר־צעד (עיצוב, מבנה/C‑curve, טיפים, ג׳ל, נייל ארט, טעויות)
- מנטורית ידע מקומית (מילות מפתח) + stub ל־xAI/Grok
- חנות — קטלוג אתמר ניילס (בקרוב)
- מסך מותג — שמות, פלטה, טון, מחירים ₪, ספקים, אזהרת רגולציה
- כרטיסי מוצר עם תמונות בתוך המדריכים

## Files
- `index.html` `styles.css` `app.js`
- `lessons.js` `mentor.js` `products.js` `brand.js`
- `BRAND.md` — מסמך אסטרטגיית מותג
- `images/etamar-*.png` — מוקאפי מוצר
- `manifest.json` + icons

## Run locally
Open `index.html` in a browser, or:

```bash
cd nail-tech-trainer && python3 -m http.server 8080
```

## GitHub Pages
1. Repo → **Settings → Pages**
2. Source: **Deploy from a branch**
3. Branch: `main` / folder: `/ (root)`
4. Save → site at `https://2hsy6kr58k-blip.github.io/nail-tech-trainer/`

Optional custom domain under Pages → Custom domain.

## Brand
Working name: **אתמר ניילס / Etamar Nails** (placeholder; see `BRAND.md` for 7 name options).

## License
Educational demo content. Product prices are estimates, not an offer for sale. Compliance with Israeli cosmetics rules is the seller’s responsibility.
