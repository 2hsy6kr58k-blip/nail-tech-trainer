/**
 * אתמר ניילס / Etamar Nails — קו מוצרים התחלתי
 */
window.ETAMAR_BRAND = {
  nameHe: "אתמר ניילס",
  nameEn: "Etamar Nails",
  tagline: "קו מוצרים מקצועי לטכנאיות — בקרוב בחנות",
  instagram: "etamar_nail"
};
window.PRODUCTS = [
  { id:"gel-set", nameHe:"סט לק ג׳ל", nameEn:"Gel Polish Set", emoji:"🧴", image:"", short:"גווני ניוד ופינק מקצועיים", useNote:"שכבות דקות וייבוש מלא בין שכבות", category:"gel", comingSoon:true, priceLabel:"189–219 ₪ · בקרוב" },
  { id:"tips-kit", nameHe:"קיט טיפסים", nameEn:"Nail Tips Kit", emoji:"➕", image:"", short:"טיפסים שקופים וטבעיים לבנייה", useNote:"בחרי גודל מדויק והדביקי ללא בועות", category:"structure", comingSoon:true, priceLabel:"89–109 ₪ · בקרוב" },
  { id:"decor-kit", nameHe:"קיט קישוטים", nameEn:"Decoration Kit", emoji:"💎", image:"", short:"אבני חן, פויל וגליטר לנייל ארט", useNote:"הצמידי על שכבה דביקה לפני טופ", category:"art", comingSoon:true, priceLabel:"69–89 ₪ · בקרוב" },
  { id:"tools-set", nameHe:"סט כלים בסיסי", nameEn:"Basic Tools Set", emoji:"🛠️", image:"", short:"פצירה, באפר, מברשת ודוחף", useNote:"חיטוי בין לקוחות חובה", category:"tools", comingSoon:true, priceLabel:"79–99 ₪ · בקרוב" }
];
window.getProduct = function (id) { return (window.PRODUCTS||[]).find(function(p){return p.id===id;}); };
window.getProductsByIds = function (ids) { if(!ids||!ids.length)return[]; return ids.map(window.getProduct).filter(Boolean); };
