#Front-end checklist

## Checklist de fin de projet :
* Les images décoratives sont compressées : [Image Optim](https://imageoptim.com/fr), [JPEGmini](https://www.jpegmini.com/)
* Les images et pictos sont intégrés dans des sprites
* Le JS ne comporte aucune erreur : Tester avec jshint
* Le HTML passe la validation W3C
* Le CSS passe la validation W3C
* Une Favicon est présente, [Utiliser Favicon Generator](https://realfavicongenerator.net/)
* Les scripts sont situés en bas de page
* Une page 404 est présente et fonctionne
* Les scripts JS et le CSS sont minifiés
* Les formulaires de contact sont fonctionnels et communiquent avec une bonne adresse mail
* Si une carte est présente, la clé d'API est spécifique au projet et est restreinte à l'url de prod. (Gmaps / Mapbox)
* Un code de tracking est présent
* Les attributs ALT des images sont renseignées et liées au back-office
* Les attributs width et height des images sont renseignées (si possible)
* WordPress - Décocher "Ne pas indexer ce site" dans les options


## Checklist Performance :
* On ne charge pas trop de typo non-système, on préfère les héberger sur notre serveur.
* Les typos intègrent seulement les glyphes nécessaires au langage du site (configuration Font Squirrel par exemple)