# 06 — Production, preuves et critères de décision

## État du dépôt au départ

Base : `1028a3b739ef54efdcbe5a2ef0ad1714fe569c47`, première publication, inspectée le 18 septembre 2026. Le README annonce quatorze prototypes ouverts, une arène et vingt objets. Les sources confirment une fondation de combat, pas un roster original terminé.

| Surface | Réellement disponible | Conséquence |
|---|---|---|
| `contracts.ts` | Deux slots, tuple de deux joueurs | Quatre joueurs exige une extension transversale, pas un toggle |
| `fighterBuilders.ts` | Treize normales communes et quatre spéciaux de pack | Priorité à l'écriture de normales propres |
| `roster.ts`, `engine.ts` | Hitboxes locales animables déjà interprétées | Exposer cette capacité aux packs plutôt que créer un autre système |
| `openRoster.ts` | Certains paramètres restent communs, dont deux sauts | Un concept de vol n'est pas automatiquement un attribut configurable |
| `engine.ts` | Pas fixe 60 Hz, hitstop, DI/SDI, amortis | Mesurer avant de remplacer ; pas fixe ne prouve pas rollback déterministe |
| Packs de stage v1 | Géométrie statique, assets, provenance | Les Déclics et plateformes temporaires nécessitent du code moteur |
| Packs de fighters | 50 rôles d'animation et génération de registres | Créer les vraies animations ; ne pas modifier les fichiers générés à la main |
| Laboratoire et tests | Infrastructure existante | Ajouter les cas de design à cette infrastructure |

Aucun nouveau personnage jouable, animation finale ou réseau n'est présumé livré par les documents. La politique de contenu et le titre public restent inchangés. Les quatorze prototypes ne sont pas effacés : ils restent utiles pour les régressions et les packs communautaires.

## Phase A — Le geste avant le costume

Deux silhouettes de travail, une arène statique, pas de progression. Construire le déplacement de Rivo et Bront et trois attaques vraiment différentes chacun. Conserver une caméra de match réelle. Définir tailles et points d'ancrage avant de détailler les visages.

**Sortie :** reconnaître les deux corps à taille réelle ; comprendre quelle partie frappe ; trouver une action plaisante même sans musique ; revenir sur la scène avec chacun ; montrer un vrai moyen de punir chaque engagement.

**Arrêt :** si les trois attaques paraissent interchangeables, ne pas produire les cinquante animations. Corriger les rôles et les timings, puis reprendre les poses.

## Phase B — Premier duel original complet

Compléter les treize normales, quatre spéciaux et transitions de chaque héros ; produire les cinquante rôles ; finaliser le Port des Courants calme, les portraits, les effets et les sons. Le ricochet de Rivo reste une expérience A/B séparée jusqu'à validation de ses resets.

**Sortie :** des humains relancent volontairement une manche, peuvent expliquer les éjections, trouvent une réponse aux coups dominants et différencient les héros autrement que par « rapide/lent ». Les tests automatisés, provenance, performances et build passent.

**Arrêt :** une majorité des interactions amusantes dépend d'un seul objet ou d'une mort accidentelle illisible ; une option domine sans réponse ; des hitboxes contredisent les poses ; une part importante des échecs vient d'inputs perdus.

## Phase C — Une nouvelle dimension à la fois

Ajouter Nacre pour l'air, puis Tambo pour le temps. Tester le tambour partagé dans une variante fête du Port. Noue et Vesper restent en conception jusqu'à ce que les états temporaires, propriétaires et nettoyages soient clairement pris en charge.

Pas d'extension simultanée de personnages, du réseau, du mode quatre joueurs et des hazards. Il serait alors impossible d'attribuer une régression ou une baisse de plaisir à une cause.

## Phase D — Quatre joueurs puis réseau

Pour quatre : généraliser slots, configurations, listes d'entrées, IA, attribution des coups et KO, collisions multi-cibles, HUD, audio, caméra, sélection et résultats ; tester miroirs, équipes, élimination et limites d'objets. Le coût ne se limite pas à doubler le nombre de sprites.

Pour le réseau : état sérialisable, événements ordonnés, source aléatoire contrôlée, relecture d'inputs, comparaison de hashes, restauration d'état, séparation effets visuels/simulation. Démontrer le déterminisme sur des traces reproductibles avant un rollback. Un moteur à pas fixe n'est pas automatiquement déterministe entre machines.

## Protocole humain — aucune donnée encore collectée

Pilote proposé : 6–8 personnes découvrant le genre, 6 habituées aux jeux d'action, 4–6 connaissant bien les platform fighters. Ces effectifs servent à détecter de gros problèmes qualitatifs, pas à prouver statistiquement un succès commercial. Tester individuellement puis par paires ; contrebalancer l'ordre des héros et des variantes.

Première session : trente secondes sans consigne, puis un exercice de retour, trois matchs courts, enfin choix libre de rejouer ou changer. Seconde session : retour après un délai, sans redonner toutes les instructions. Observer les mains/entrées et demander ensuite ce que la personne voulait faire. Ne pas interrompre chaque action pour obtenir une note.

| Question | Observation | Décision |
|---|---|---|
| Le geste répond-il ? | Intention exprimée, input, action produite | Corriger entrée/animation avant la puissance |
| Le héros a-t-il une identité ? | Description spontanée, coup préféré | Retoucher la silhouette ou le rôle des coups |
| Le KO était-il compréhensible ? | Explication donnée sans suggestion | Améliorer signal, attribution ou caméra |
| Le retour est-il apprenable ? | Réussite avant/après démonstration | Ajuster trajectoire ou feedback |
| Le perdant a-t-il joué ? | Temps sans choix, options évoquées | Revoir les boucles et les verrouillages |
| La revanche est-elle désirée ? | Choix volontaire, pas demande du testeur | Creuser les raisons, pas imposer un objectif de rétention |
| L'ambiance tient-elle ? | Fatigue sonore et visuelle après dix minutes | Réduire répétition et bruit |

Cibles internes initiales, non validées : environ quatre testeurs novices sur cinq expliquent le principe d'éjection après la courte initiation ; une revanche se lance en moins de trois secondes ; aucun blocage ou entrée coincée dans les scénarios de reprise. Le seuil 4/5 ne constitue pas une estimation de la population avec un si petit échantillon. Ne pas chiffrer artificiellement « le jeu est 30 % plus amusant ».

Pour les matchs de balance, conserver personnage, niveau estimé, côté, arène, version et nombre de matchs. Distinguer un coup puissant mais lisible d'un coup incompréhensible. Ne pas équilibrer exclusivement à partir de victoires de CPU : une IA peut ignorer précisément la mécanique à tester.

## Mesures et garde-fous logiciels

Pas de télémétrie serveur imposée. Traces locales opt-in et exportées volontairement. Événements minimaux : input reçu, action démarrée, contact, protection, saisie, éjection, source attribuée, reset de ressources, reprise après pause. Éviter noms réels et données sans rapport avec le jeu.

Tests nécessaires : attack data → builder → hitbox → simulation ; aucun changement des quatorze kits existants sans intention ; champs inconnus et nombres invalides rejetés ; actifs dans leur fenêtre ; aucun partage mutable entre combattants ; effets nettoyés à l'éjection ; P1/P2 symétriques ; contrôles clavier/manette ; écran réduit ; effets réduits ; perte de focus et reconnexion.

Perf : mesurer P50/P95/P99 des frames après chauffe, les tailles d'atlas et la mémoire décodée sur une machine cible et un profil modeste identifiés. Cible 60 images/s ; budget théorique 16,67 ms, pas une garantie de rendu. Tester avec deux puis quatre personnages, objets et effets au maximum autorisé. Préchargement minimum utile, pas téléchargement de tout un futur roster au démarrage.

## Tableau de dépendances des idées

| Idée | Pack possible dans la base | Extension nécessaire |
|---|---|---|
| Statistiques et quatre spéciaux existants | Oui, comportements déjà supportés | Art/animation dédiée |
| Normales originales et hitboxes | Type moteur présent, chemin pack manquant | Contrat optionnel, validation et raccordement |
| Rivo : ricochet sur touche valide | Non | Jeton aérien, événements et priorité des contacts |
| Nacre : courant partagé | Non | Zone bornée, catégories affectées, affichage |
| Tambo : rappel retardé | Pas comme système générique | Événement différé stable et nettoyage |
| Vesper : doublure échangeable | Non | État, destination valide, indicateurs et contre-jeu |
| Noue : bourgeon partagé | Non | Support temporaire sans faux reset d'atterrissage |
| Arènes calmes | Oui | Nouveaux assets originaux et géométrie testée |
| Déclics / hazards | Non | Mécanique auditée, aucune exécution arbitraire de pack |
| Quatre joueurs / équipes / réseau | Non | Travaux séparés, transversaux |

## Pratiques de livraison

Travailler sur une branche dédiée ; ne pas publier la réflexion comme une annonce de sortie. Garder séparés le document de conception, les données prototypes, les sources d'art et les changements moteur. Donner un résultat de tests exact et signaler les échecs préexistants au lieu de faire disparaître les tests. Conserver un historique de décisions et de contre-exemples.
