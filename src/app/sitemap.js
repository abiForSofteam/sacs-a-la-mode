// Ce fichier génère le sitemap lorsqu'on ouvre la page suivante : http://localhost:3000/sitemap.xml
// Il suffit donc d'indiquer l'adresse de cette page aux moteurs de recherche (Google en l'occurrence)
// On n'oubliera pas de le faire dans le fichier robots.txt

import getUlsForSitemap from './getUlsForSitemap'

export default async function sitemap() {
  const urlsForSitemap = await getUlsForSitemap();

console.log('urlsForSitemap', urlsForSitemap)

  return urlsForSitemap
}
