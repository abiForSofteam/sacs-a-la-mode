import { readdir } from "fs/promises";

export default async function getUlsForSitemap() {
  // On récupère la liste des repertoires qui se trouvent dans /src/app, puisqu'une partie des repertoires constituent les urls du site
  const directoriesList = [
    {url: '', lastModified: null}
];
  const source = process.cwd() + "/src/app";

  if (!source) throw new Error("source inconnue");

  // En savoir un peu plus sur cette fonction
  const urlsForSitemap = (await readdir(source, { withFileTypes: true }))
    .filter((mydirList) => mydirList.isDirectory())
    .map((mydir) => {
        // Exclusion de certains repertoires
      if (mydir.name !== 'api' || mydir.name !== 'style')
        directoriesList.push({url: mydir.name, lastModified: new Date() } );
      return directoriesList;
    });
  return urlsForSitemap[urlsForSitemap.length - 1];
}
