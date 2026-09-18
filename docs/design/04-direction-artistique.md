# 04 — Direction artistique : merveilleux tangible, mouvement graphique

## Le rendu choisi

Des volumes arrondis et sculptés, des couleurs franches mais organisées, des matières légèrement peintes, des poses exagérées. L'image doit évoquer un monde que l'on pourrait toucher, sans donner l'impression que chaque personnage est un jouet en plastique brillant. La lumière est chaleureuse ; les contours de gameplay sont nets ; le détail est concentré sur les visages et les accessoires signifiants.

**Pipeline proposé :** corps et poses conçus en 3D stylisée, rendus en atlases 2D compatibles avec le système existant. Cela permet une base commune de lumière et de proportions sans imposer immédiatement un changement de renderer. La simulation reste à 60 Hz ; le rythme des poses peut varier. Les vrais avantages mémoire et performance devront être mesurés : un atlas très grand n'est pas « gratuit » parce qu'il est en 2D.

Éviter trois impasses : petits personnages ultra-détaillés illisibles ; mélange de pixel art et de personnages lissés ; esthétique pastel uniformément mignonne sans contraste de tempérament. Le plateau n'est pas une galerie de concept arts : c'est un espace de décision.

## Grammaire des formes

Rivo : virgule, pli et diagonale rapide. Bront : cloche, rectangle arrondi et appui. Nacre : losange dissymétrique et courbe de voile. Tambo : creux ovale, petites baguettes et compas. Vesper : longue diagonale et espaces négatifs. Noue : nœuds, branches irrégulières et feuille latérale.

La famille commune vient du traitement des yeux, de la netteté des grandes masses, des mains expressives et des ombres, pas de six têtes identiques. Les pieds et le centre du corps indiquent toujours l'orientation. Le visage peut être légèrement orienté vers la caméra pour conserver l'émotion, tant que cela ne brouille pas le sens du déplacement. Le problème visage/direction est précisément discuté par Nintendo dans S2 ; notre solution doit être évaluée sur notre caméra.

## Palette de travail

Fond de documentation : ivoire `#F7F0DF`. Encre et contours : nuit pétrole `#173A43`. Accent principal : mandarine `#F37C42`. Second accent : turquoise `#45B8AF`. Notes secondaires : jaune miel `#E7B950`, prune `#70456D`, terre `#A6573F`.

Ces couleurs sont des points de départ artistiques, pas une certification d'accessibilité. Tester chaque paire de texte/fond. En match, réserver la plus forte saturation aux acteurs et aux événements importants. Les palettes de joueur remplacent des surfaces contrôlées, sans recolorer le corps au point de perdre l'identité.

La reconnaissance ne dépend pas de rouge contre vert. Ajouter un numéro, une forme d'indicateur, un motif ou un bord distinct. Tester les miroirs du même personnage et les configurations à quatre dès les maquettes, même si le moteur reste à deux pour la première tranche.

## Trois plans de lecture

**Premier :** corps, faces avant, bords praticables, objets dangereux. Contraste franc, mouvement propre.

**Deuxième :** accessoires proches, végétation non interactive, éléments de spectacle. Plus calme, moins contrasté ; rien qui ressemble à un projectile actif.

**Troisième :** monde, profondeur, habitants. Valeurs rapprochées, détails plus doux, réactions rares. Un spectateur peut sursauter à un gros impact ; une foule ne danse pas constamment derrière chaque hitbox.

Bannir les particules qui masquent les pieds, les floraisons lumineuses sur les plateformes et les décors devant les personnages. Le mode effets réduits garde toute information de timing.

## Animation : une personnalité, même quand il ne se passe rien

Avant de produire les 50 rôles exigés, réaliser une planche de huit poses : silhouette debout, course, freinage, saut, anticipation, impact, réception d'une frappe et victoire. Les examiner à la taille réelle de match, en aplats noirs, puis en niveaux de gris. Une pose magnifique en gros plan peut être inutile une fois réduite.

Le premier ensemble animé comprend déplacement, saut, réception, hitstun, trois attaques, protection et retour. Chaque mouvement de combat doit avoir une anticipation, une pose dangereuse et un relâchement distincts. Après validation, compléter le contrat de 50 rôles avec des animations réellement adaptées. `author_required` ne devient pas `direct` en recopiant une animation de marche sous un autre nom.

La silhouette de gameplay doit suivre le corps sans « respiration » artificielle de la hurtbox à chaque frame décorative. Les effets d'étirement peuvent dépasser la géométrie active, mais jamais suggérer régulièrement une portée inexistante. Ajouter dans l'Animation Lab une superposition hitbox/pose pour cette vérification.

**Gags réservés aux moments sûrs :** Rivo se fait rattraper par sa queue ; Bront ramasse une miette ; Nacre réajuste sa voile ; Tambo coupe un dernier écho ; Vesper cherche le regard de la caméra ; Noue pousse une feuille hors de son visage. Aucun gag ne doit prolonger le verrouillage d'un joueur après la fin effective d'une action.

## Interface

La sélection ressemble à un départ de voyage : six grands portraits et des poses, pas quarante cases en attente. Afficher trois informations : « son truc », sa difficulté de prise en main, sa faiblesse. Les détails de frame sont dans le laboratoire, pas sur l'écran d'accueil.

Un mini-aperçu permet d'essayer la signature sans changer d'écran. Les joueurs choisissent simultanément quand le système le permettra. Le HUD de match conserve pourcentage, vies, joueur et information spéciale indispensable ; pas de collection de jauges décoratives.

Après une manche, un résultat lisible, une action Revanche dominante et une possibilité de changer de héros. Cible de conception : revanche déclenchable en moins de trois secondes après le résultat, avec animation sautée automatiquement si tous sont prêts. Ne pas charger une page complète de progression avant de rejouer.

## Identité sonore

Une orchestration hybride : percussions sèches, petites cordes, bois, basse chaleureuse et quelques timbres synthétiques. Énergie dans la pulsation, pas dans un mur de sons. Chaque région possède un instrument-signature et chaque personnage un petit motif rythmique, sans mélodie empruntée.

Rivo : froissement tendu et claquement de toile. Bront : céramique mate, basses courtes et souffle. Nacre : voile, air et glissement clair. Tambo : bois creux et écho bref. Vesper : tissu sec, pas et accent étouffé. Noue : bois souple et craquement végétal.

Les impacts distinguent contact, protection, saisie, frappe lourde et éjection. Les alertes utiles se lisent également à l'image. Limiter le nombre de voix concurrentes et donner priorité au joueur et aux risques proches. Variations de bruitages possibles, mais séparées du générateur aléatoire de simulation.

La musique peut gagner une couche quand le match se resserre ; elle ne doit ni accélérer les règles ni masquer une alerte. Les voix sont de petites intentions et exclamations originales, pas une imitation d'acteurs connus. Tester dix minutes de jeu pour repérer les sons agréables une fois mais irritants cinquante fois.

## Livraison artistique exigée pour un héros

Modèle ou sources 2D éditables ; face/profil/dos et échelle relative ; palettes ; huit poses-clefs ; animation-source ; correspondance des 50 rôles ; hitboxes superposées ; règles de cadrage ; portraits ; bruitages ; provenance et licences compatibles avec la politique existante. Les sources et les transformations sont versionnées. Aucun rendu conceptuel n'est présenté comme une animation jouable terminée.
