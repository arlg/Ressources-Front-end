#Front-end checklist

## Checklist de fin de projet :

* Les images décoratives sont compressées : [Image Optim](https://imageoptim.com/fr), [JPEGmini](https://www.jpegmini.com/)
* Les images et pictos sont intégrés dans des sprites
* Les attributs width et height des images sont renseignées (si possible)
* Les attributs ALT des images sont renseignées et liées au back-office.

* Le JS ne comporte aucune erreur : Tester avec jshint
* Le JS ne comporte plus de [console.log](https://www.npmjs.com/package/gulp-strip-debug)

* Le HTML de **chaque page** passe la validation [W3C](https://validator.w3.org/) (ou s'en rapproche le plus)
* Le CSS passe la validation [W3C](https://jigsaw.w3.org/css-validator/) (ou s'en rapproche le plus)

* Une Favicon est présente, [Utiliser Favicon Generator](https://realfavicongenerator.net/)
* Une image de partage Facebook / Twitter et les metas opengraph sont présentes.
* Une page 404 est présente et fonctionne
* WordPress - Décocher "Ne pas indexer ce site" dans les options

* Les scripts sont situés en bas de page
* Les scripts JS et le CSS sont minifiés
* Les formulaires de contact sont fonctionnels et communiquent avec une bonne adresse mail
* Si une carte est présente, la clé d'API est spécifique au projet et est restreinte à l'url de prod. (Gmaps / Mapbox)
* Un code de tracking est présent.

* Un message s'affiche pour les navigateurs trop anciens, par exemple [BrowserUpdate](https://browser-update.org/)

* -> Lancer un audit Google Chrome et corriger si nécessaire 🔨


## Checklist Performance :

* On ne charge pas trop de typo non-système, on préfère les héberger sur notre serveur.
* Les typos intègrent seulement les glyphes nécessaires au langage du site (configuration Font Squirrel par exemple)
* Précharger les typos les plus utilisées (Voir page #Performance)
* Lazyload des images off-screen

## Autres listes :

* Front-end performance checklists avec liens pour tester : [thedaviddias](https://github.com/thedaviddias/Front-End-Performance-Checklist)
* Web Application performance Checklist : [antarestupin](https://github.com/antarestupin/performance-checklist)
* Checklist checklist : [huyingjie](https://github.com/huyingjie/Checklist-Checklist)
