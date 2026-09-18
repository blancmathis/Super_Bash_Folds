# 07 — Livraison et vérifications

Travail du 18 septembre 2026 sur la branche `design/original-universe-20260918`, depuis `1028a3b739ef54efdcbe5a2ef0ad1714fe569c47`.

## Réalisé

Un dossier de plus de 10 000 mots couvre la vision, six personnages, leurs quatre spéciaux proposés, les faiblesses et réponses adverses, le combat, la direction artistique et sonore, trois premières arènes, les modes et les critères de test humain. Les sources de référence sont séparées des décisions créatives.

Rivo et Bront ont chacun treize normales décrites en JSON de conception. Ces deux fichiers sont testés mais restent hors du roster. Aucun personnage existant n'a été renommé ou remplacé pour faire croire qu'un héros original était achevé.

Le contrat optionnel `gameplay.normals` est implémenté dans le schéma, la validation de packs, le builder et le raccordement au roster. Il expose les timings, dégâts, angles, mouvements, charges et hitboxes déjà supportés par le moteur. Les nombres sont absolus après les profils historiques. Les vecteurs sont copiés, les données inconnues rejetées et les fenêtres d'attaque vérifiées. Les quatre spéciaux ne sont pas écrasables par ce chemin.

## Vérifications exécutées

| Vérification | Résultat observé |
|---|---|
| Suite avant modification | 323 tests, 25 fichiers : réussite |
| Comparaison de toutes les attaques des 14 combattants à l'ancien builder | JSON identiques octet pour octet ; empreintes de référence conservées |
| Tests ciblés du nouveau contrat/builder/raccordement | 56 tests : réussite |
| Suite complète avec `npm test -- --maxWorkers=2` | 385 tests, 28 fichiers : réussite ; 62 tests ajoutés au total |
| `npx tsc --noEmit` | Réussite |
| `npm run check:public-assets` | Réussite dans la validation publique |
| `npm run check:public-history` | Réussite sur l'historique de départ ; à revérifier après commit |
| `npm run check:public-source` | Réussite |
| `npm run fighter:check` et `npm run stage:check` | Réussite ; registres synchronisés |
| `npm run validate:open-fighters` | Réussite du contrat ; aucun des 14 prototypes n'a 50 animations directes |
| `npm run build` | Réussite, y compris TypeScript, Vite, budgets de taille et contrôle du contenu distribué |
| `git diff --check` | Réussite avant commit |

**Limite du lancement global :** la première commande `npm run validate:public`, avec le parallélisme par défaut, s'est arrêtée sur trois dépassements de 5 secondes dans des tests CLI de packs, dont deux tests déjà présents. Les assertions n'ont pas été supprimées et les délais n'ont pas été augmentés. La suite complète a ensuite réussi avec deux workers, et le build a été exécuté séparément. Cela suggère un problème de contention sur cette machine ; cette relance ne prouve pas à elle seule que tous les environnements CI sont exempts de délais.

**Avertissements conservés :** `npm ci` a signalé quatre vulnérabilités de dépendances (trois modérées, une haute), non corrigées dans ce travail de conception. Le build avertit d'un chunk de rendu 3D dépassant 500 kB ; les budgets propres au projet passent. Aucun audit de sécurité complet ni profilage FPS sur plusieurs machines n'a été réalisé.

## Non réalisé / non annoncé

Pas d'illustrations finales, de modèles animés originaux, de 50 animations nouvelles par personnage, de nouveau personnage sélectionnable, de test humain, d'équilibrage prouvé, de nouveau stage publié, de quatre joueurs ou de réseau. Le ricochet de Rivo, le courant de Nacre, le rappel de Tambo, la doublure de Vesper et le bourgeon de Noue sont des conceptions d'extensions, pas des fonctionnalités livrées.

La direction, les noms et les chiffres restent à valider. Aucune disponibilité de marque n'est garantie. Le titre public, les licences et la version déployée restent inchangés. Le travail est présenté en proposition sur une branche dédiée, sans fusion automatique dans `main`.
