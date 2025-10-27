export default function sitemap() {
  const base = "https://aimemories.ru";
  return [
    { url: base + "/", changefreq: "weekly", priority: 1.0 },
    { url: base + "/services/song", changefreq: "weekly", priority: 0.9 },
    { url: base + "/services/advertising", changefreq: "weekly", priority: 0.9 },
    { url: base + "/services/youtube", changefreq: "weekly", priority: 0.9 },
    { url: base + "/services/podcast", changefreq: "weekly", priority: 0.9 },
  ];
}
