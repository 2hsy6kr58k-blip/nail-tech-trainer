/**
 * אתמר ניילס / Etamar Nails — קו מוצרים התחלתי (placeholder מותג)
 * ניתן לשנות שם מותג, תמונות ומחירים בהמשך.
 */
window.ETAMAR_BRAND = {
  nameHe: "אתמר ניילס",
  nameEn: "Etamar Nails",
  tagline: "קו מוצרים מקצועי לטכנאיות — בקרוב בחנות",
  instagram: "etamar_nail"
};

window.PRODUCTS = [
  {
    id: "gel-set",
    nameHe: "סט לק ג׳ל",
    nameEn: "Gel Polish Set",
    image: "images/etamar-gel-set.png",
    short: "גווני ניוד ופינק מקצועיים לעבודה יומיומית",
    useNote: "ליישום צבע אחרי בסיס — שכבות דקות וייבוש מלא בין שכבות",
    category: "gel",
    comingSoon: true,
    priceLabel: "בקרוב"
  },
  {
    id: "tips-kit",
    nameHe: "קיט טיפסים",
    nameEn: "Nail Tips Kit",
    image: "images/etamar-tips-kit.png",
    short: "טיפסים שקופים וטבעיים לבנייה והארכה",
    useNote: "בחרי גודל מדויק, הדביקי עם דבק/ג׳ל מתאים וחתכי עודף לפני עיצוב",
    category: "structure",
    comingSoon: true,
    priceLabel: "בקרוב"
  },
  {
    id: "decor-kit",
    nameHe: "קיט קישוטים",
    nameEn: "Decoration Kit",
    image: "images/etamar-decor-kit.png",
    short: "אבני חן, פויל וגליטר לנייל ארט",
    useNote: "הצמידי קישוטים על שכבת ג׳ל דביקה לפני טופ, או עם ג׳ל דבק ייעודי",
    category: "art",
    comingSoon: true,
    priceLabel: "בקרוב"
  },
  {
    id: "tools-set",
    nameHe: "סט כלים בסיסי",
    nameEn: "Basic Tools Set",
    image: "images/etamar-tools-set.png",
    short: "פצירה, באפר, מברשת ודוחף קוטיקולה",
    useNote: "כלים חיוניים לעיצוב, הכנה וניקוי — שמרי על חיטוי בין לקוחות",
    category: "tools",
    comingSoon: true,
    priceLabel: "בקרוב"
  }
];

window.getProduct = function (id) {
  return (window.PRODUCTS || []).find(function (p) { return p.id === id; });
};

window.getProductsByIds = function (ids) {
  if (!ids || !ids.length) return [];
  return ids.map(window.getProduct).filter(Boolean);
};
