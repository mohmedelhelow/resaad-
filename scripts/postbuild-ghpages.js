const fs = require("fs");
const path = require("path");
const dist = path.resolve(__dirname, "..", "dist");
if (!fs.existsSync(dist)) { console.error("dist/ not found. Run `npm run build` first."); process.exit(1); }

const base = fs.readFileSync(path.join(dist, "index.html"), "utf8");

const upsert = (html, { title, desc, canonical, robots }) => {
  let out = html;
  out = out.replace(/<title>.*?<\/title>/i, `<title>${title}</title>`);
  if (desc) {
    if (/<meta[^>]+name=["']description["']/i.test(out))
      out = out.replace(/<meta[^>]+name=["']description["'][^>]*>/i, `<meta name="description" content="${desc}">`);
    else out = out.replace(/<\/head>/i, `<meta name="description" content="${desc}">\n</head>`);
  }
  if (robots) {
    if (/<meta[^>]+name=["']robots["']/i.test(out))
      out = out.replace(/<meta[^>]+name=["']robots["'][^>]*>/i, `<meta name="robots" content="${robots}">`);
    else out = out.replace(/<\/head>/i, `<meta name="robots" content="${robots}">\n</head>`);
  }
  if (canonical) {
    if (/<link[^>]+rel=["']canonical["']/i.test(out))
      out = out.replace(/<link[^>]+rel=["']canonical["'][^>]*>/i, `<link rel="canonical" href="${canonical}">`);
    else out = out.replace(/<\/head>/i, `<link rel="canonical" href="${canonical}">\n</head>`);
  }
  return out;
};

const routes = [
  { slug: "",        title: "Resaad — Consulting & Audit Services", canonical: "https://www.resaad.com/",          priority: "1.0", changefreq: "weekly" },
  { slug: "about",   title: "About — Resaad",                       canonical: "https://www.resaad.com/about",     priority: "0.8", changefreq: "monthly" },
  { slug: "services",title: "Services — Resaad",                    canonical: "https://www.resaad.com/services",  priority: "0.8", changefreq: "monthly" },
  { slug: "contact", title: "Contact — Resaad",                     canonical: "https://www.resaad.com/contact",   priority: "0.6", changefreq: "monthly" },
];

const homeHtml = upsert(base, {
  title: routes[0].title,
  desc: "Resaad provides Consulting, Banking & Cash Management, Audit & Inspection, Safety & Security, and IT services in KSA.",
  robots: "index,follow",
  canonical: routes[0].canonical,
});
fs.writeFileSync(path.join(dist, "index.html"), homeHtml, "utf8");

for (const r of routes.slice(1)) {
  const dir = path.join(dist, r.slug);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  const html = upsert(base, {
    title: r.title, desc: "Learn more about Resaad services and contact information.",
    robots: "index,follow", canonical: r.canonical,
  });
  fs.writeFileSync(path.join(dir, "index.html"), html, "utf8");
}

const notFound = `<!doctype html><html lang="en"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>404 — Resaad</title><meta name="robots" content="noindex">
<style>body{font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;display:grid;place-items:center;height:100vh;margin:0}
.card{padding:24px;border:1px solid #e5e7eb;border-radius:16px;max-width:560px;text-align:center}</style>
</head><body><div class="card"><h1>Page not found</h1><p>The page you’re looking for doesn’t exist.</p><a href="/">Back to Home</a></div></body></html>`;
fs.writeFileSync(path.join(dist, "404.html"), notFound, "utf8");

const robotsTxt = `User-agent: *
Allow: /
Sitemap: https://www.resaad.com/sitemap.xml
`;
fs.writeFileSync(path.join(dist, "robots.txt"), robotsTxt, "utf8");

const urls = routes.map(r => {
  const loc = r.slug ? `https://www.resaad.com/${r.slug}` : "https://www.resaad.com/";
  return `  <url><loc>${loc}</loc><changefreq>${r.changefreq}</changefreq><priority>${r.priority}</priority></url>`;
}).join("\n");
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
fs.writeFileSync(path.join(dist, "sitemap.xml"), sitemap, "utf8");

console.log("Postbuild for GH Pages done ✔");
