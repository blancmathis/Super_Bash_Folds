# Données de travail — pas de personnages publiables

`rivo.normals.json` et `bront.normals.json` décrivent chacun les treize attaques normales : noms, timings, dégâts, angles, portée et quelques chaînes de hitboxes dédiées. Les valeurs sont absolues dans les unités du moteur et ne sont pas encore équilibrées par des humains. Ce ne sont ni des packs `ready`, ni des modèles, ni des animations.

Après création d'un vrai pack, le contenu d'un fichier peut alimenter `gameplay.normals`. Cela ne donne pas au combattant son poids, ses mouvements, ses quatre spéciaux, sa personnalité animée ou ses mécanismes nouveaux. Ne pas remplacer un héros existant silencieusement avec ces données. Le roster public reste inchangé.

Les tests chargent les deux fichiers, valident leur contrat et vérifient qu'ils traversent le builder. Les hits sont à synchroniser avec les poses futures avant tout marquage de qualité `direct`. Les hitboxes sont locales au corps ; +x indique l'avant, +y le haut ; leurs fenêtres sont indexées à partir de zéro dans la phase active, fin comprise.

Le ricochet de Rivo n'est pas implémenté par ces données. Bront n'a pas d'armure ou de sélection dynamique d'angle implicite. Les animations de prévisualisation et les tests humains restent à produire.
