# Sources et portée

Consultées le 18 septembre 2026. Les propositions des autres documents sont notre conception, et non des conclusions scientifiques sur le plaisir.

## Sources primaires externes

**S1 — Nintendo, Ask the Developer, vol. 11, Super Mario Bros. Wonder, partie 1, 17 octobre 2023.** Prototypage, recherche de surprises et maintien de la confiance dans les règles du monde. https://www.nintendo.com/us/whatsnew/ask-the-developer-vol-11-super-mario-bros-wonder-part-1/

**S2 — Nintendo, même entretien, partie 2, 17 octobre 2023.** Animation qui communique l'état du personnage ; arbitrage visage/direction ; transformations conçues depuis des actions de jeu. https://www.nintendo.com/us/whatsnew/ask-the-developer-vol-11-super-mario-bros-wonder-part-2/

**S3 — Walt Disney Animation Studios, Visual Development.** Relation entre vision, personnages, monde, thèmes, couleur et composition. https://www.disneyanimation.com/process/visual-development/

**S4 — Sega, site officiel Sonic Superstars.** Référence de mouvement et de capacités différenciées, pas benchmark du présent moteur. https://sonic.sega.jp/SonicSuperStars/

## Sources internes, base 1028a3b

- `README.md` et `ROADMAP.md` : statut public et objectif d'un premier héros original.
- `src/game/contracts.ts` : `PlayerSlot = 0 | 1` ; `MatchConfig.players` est un tuple de deux joueurs.
- `src/game/fighterBuilders.ts` : famille commune des treize attaques normales ; quatre spéciaux configurés.
- `src/game/openRoster.ts` : construction des combattants depuis les packs ; sauts et certains attributs communs.
- `src/game/roster.ts` : structures d'attaque, hitboxes locales et comportements de projectile disponibles.
- `src/game/engine.ts` : simulation fixe à 60 Hz ; hitstop, DI/SDI, amortis d'impact et hitboxes animées ; ces éléments ne prouvent pas un ressenti satisfaisant.
- `fighters/README.md` : 50 rôles d'animation ; classification `direct`, `adapted`, `author_required` ; génération de registres.
- `stages/README.md` : version 1 des stages statiques ; pas de scripts exécutables dans les packs.
- `IP_AND_CONTENT_POLICY.md`, `ASSET_POLICY.md` : règles du projet, conservées sans modification.

## Limites

Aucun sondage utilisateur n'a été réalisé pour ce dossier. Aucun nom nouveau n'a fait l'objet d'une recherche de disponibilité. Aucun concept décrit ici ne constitue une validation juridique, une promesse d'équilibrage ou une animation de production livrée.
