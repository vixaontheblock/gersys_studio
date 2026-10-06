import { detailedServices } from '../data/site';
export function GET({ site }: { site: URL }) {
 const paths = ['/', ...detailedServices.map(s => `/servicios/${s.slug}/`)];
 const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map(path => `<url><loc>${new URL(path, site).href}</loc></url>`).join('')}</urlset>`;
 return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
