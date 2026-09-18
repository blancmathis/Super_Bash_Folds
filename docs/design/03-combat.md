# 03 — Le plaisir seconde par seconde

## La boucle centrale

Se déplacer avec intention → faire réagir → toucher ou éviter → choisir poursuivre/revenir → tenter l'éjection → sauver son retour → recommencer autrement.

Les pourcentages rendent progressivement l'éjection plus menaçante. On conserve cette règle familière ; l'originalité vient des corps, des trajectoires et des décisions. Un nouveau système universel n'est utile que s'il rend cette boucle meilleure. Il ne faut pas ajouter une jauge, une parade, un sprint et un super simultanément pour avoir l'air original.

Trois plaisirs doivent coexister : **moteur**, le geste agréable ; **social**, la situation drôle ; **maîtrise**, la satisfaction d'avoir compris l'autre. Le premier se teste seul, le deuxième avec des proches, le troisième dans des duels répétés. Les retours d'un seul de ces groupes ne suffisent pas.

## Les commandes et l'accessibilité

Conserver déplacement, saut, attaque, spécial, protection et saisie, déjà présents. Quatre directions de spécial, treize normales contextuelles ; aucun quart de cercle. L'onboarding enseigne d'abord saut, attaque et retour, puis la protection et la saisie. La sélection des coups puissants doit être fiable au clavier comme au stick. Prototyper une option de commande explicite des coups puissants plutôt que supposer qu'un flick analogique est compris par tous.

Le joueur doit pouvoir remapper, déconnecter/reconnecter une manette, changer de côté et retrouver ses réglages. Une commande simultanée ambiguë doit produire un résultat documenté. Afficher les touches réellement configurées, pas une image de manette fixe. Le tactile n'est pas dans le premier périmètre : il faut une interface et un test dédiés avant d'annoncer une version mobile.

Le moteur possède déjà des tolérances d'entrée, du hitstop, de la DI/SDI et des amortis. Ne pas les réinventer aveuglément. Mesurer d'abord les intentions perdues avec les fenêtres actuelles. Comparer ensuite un buffer d'action de 3 et 5 frames dans deux builds, sans le changer en fonction du joueur ou du score. Ne jamais conserver une commande offensive tellement longtemps qu'elle part alors que l'intention a changé. Les chiffres proposés sont des hypothèses, pas des normes.

## Sensation de déplacement

Une accélération forte n'implique pas un manque de poids. Rivo doit démarrer vite avec un freinage lisible ; Bront doit être lourd dans la pose et le son, pas seulement lent à répondre. Le saut court et long, la dérive, la chute rapide et le double saut doivent rester prévisibles. Le même input produit la même réponse sous les mêmes conditions.

Le temps avant un effet peut servir l'anticipation d'un coup lourd, mais pas l'input du déplacement. Rendre immédiatement visible la compression ou le début de course ; ne pas attendre le grand mouvement pour montrer que l'entrée a été reçue. Sur un bord, une aide à la récupération ne doit pas déclencher une attaque ou un saut non demandé.

## Chaque coup a un travail

Pour chaque normale et spécial, écrire **usage**, **risque**, **réponse adverse**, **animation**, **signal sonore**, **géométrie**. Un coup qui n'a pas de rôle différent d'un autre doit être simplifié ou fusionné. Le gros coup ne doit pas être à la fois le meilleur antiaérien, l'approche la plus sûre et la meilleure fin de combo.

Ordres de grandeur de départ à 60 Hz : attaque proche 3–6 frames de préparation ; coup d'espace 6–10 ; gros engagement 14–22. Les actives et les fins doivent être pensées avec la portée, le déplacement, l'avantage sur protection et les options réelles de l'adversaire. Une frame « rapide » n'est pas seule une preuve de qualité. Pas d'équilibrage sur des pourcentages de victoire sans nombre de matchs, niveau des joueurs et intervalle d'incertitude.

Les fenêtres actives doivent correspondre à la partie dangereuse de la pose. La queue de Rivo peut dessiner un arc, mais tout cet arc n'est pas actif pendant toute l'attaque. Les paumes de Bront ne frappent pas encore quand il les lève derrière lui. Un smear n'agrandit pas silencieusement la portée.

**Technique livrable prioritaire :** permettre aux packs de définir les normales et les hitboxes locales qui existent déjà dans le type moteur. Les variantes par `power`, `speed` et `reach` sont une bonne base de prototype, pas une identité suffisante pour les nouveaux héros.

## Défense et plaisir du perdant

Conserver le triangle attaque/protection/saisie. La roulade couvre le déplacement, pas toutes les erreurs ; la protection arrête des coups, mais cède à une saisie bien placée. Éviter de multiplier les exceptions selon les personnages.

Pendant une projection, donner une influence sur la trajectoire et un retour compréhensible. Le tutoriel montre deux résultats de dérive sur un même coup. Les combos doivent contenir des décisions pour l'attaquant et le défenseur : confirmation, changement de trajectoire, poursuite risquée, retour sécurisé. Les premières explorations visent des petites séquences de 2–4 touches lisibles ; on ne les impose pas par une règle artificielle de longueur maximale.

Mesurer le temps continu sans décision utile, pas seulement le nombre de touches. Si une boucle maintient longtemps la cible sans réponse, corriger les angles, recaptures, resets ou fenêtres en cause. Ne pas ajouter immédiatement un « bouton pour sortir de tout » qui détruirait aussi les petites séquences saines.

Pas de gain de puissance caché pour le joueur mené. Les retournements proviennent du risque, des trajectoires, du terrain et des erreurs. Une aide de groupe peut exister comme règle clairement choisie, jamais comme modification invisible d'un duel.

## Impacts et spectacle

Le son d'impact porte l'information principale ; le hitstop confirme ; l'animation exprime le caractère ; les particules décorent. Tester d'abord sans tremblement, sans flash et sans musique. Si le coup devient incompréhensible, le problème n'est pas le manque de particules.

Éviter les ralentis systématiques avant les éjections : ils révèlent trop tôt l'issue et coupent le jeu des autres. Une accentuation finale peut arriver après une éjection confirmée. Un hitstop fort ne doit pas immobiliser involontairement les autres combattants si le moteur passe à quatre joueurs.

Les réglages de secousse et de flash déjà présents sont conservés. Ajouter dans une étape dédiée les profils d'effets réduits, le contraste des joueurs, les repères par forme et les signaux visuels qui doublent les sons utiles. Pas d'avantage tactique lié à une option esthétique.

## La signature d'interaction : des outils partageables

Les gestes de personnages sont la signature présente en duel. En mode fête, on peut leur ajouter des **Déclics**, mécanismes visibles d'arène activés par une attaque ordinaire. Un tambour fait rebondir ; une voile produit un courant ; une enseigne se rabat et renvoie. Pas de nouveau bouton ni de script arbitraire chargé dans le pack.

Premier prototype limité à un seul type : tambour fixe, émission de rebond prévisible, temporisation visible, force bornée et cooldown. L'activation ne retire pas le sol sous un joueur sans avertissement. Le tambour est désactivé dans la version calme de l'arène, et toutes les silhouettes de plateformes restent fiables.

**Règle :** une surprise change le problème, elle ne décide pas du gagnant. L'adversaire peut anticiper, contourner, activer le mécanisme ou en profiter. Si le mécanisme produit surtout des morts inexpliquées, le supprimer même s'il est spectaculaire.

## Matrice des interactions à spécifier avant de coder les extensions

| Situation | Résultat proposé |
|---|---|
| Rivo touche une protection | Pas de ricochet ; fin de mouvement normale |
| Rivo touche et reçoit une frappe simultanément | La touche reçue prime ; pas de reset de retour |
| Deux hitboxes touchent la même cible | Une résolution stable, pas deux crédits de ricochet |
| Rivo touche un allié en équipes | Pas de recharge, même avec dégâts alliés actifs |
| Noue pose sur une autre plante | Refus lisible ; pas de tour de plateformes |
| Un joueur utilise la plante | Rebond, mais pas d'atterrissage stable ni de reset de recovery |
| Nacre crée deux courants | Le second remplace le premier ; jamais de somme infinie |
| Projectile dans un courant | Seulement les catégories autorisées ; changement borné, propriétaire conservé |
| Tambo perd une vie avec un rappel posé | Nettoyage explicite du rappel ; pas d'attaque fantôme |
| Vesper vise un point invalide | Échange refusé sans téléportation hors limites |
| Éjection/réapparition | Toutes les ressources temporaires et propriétés d'invulnérabilité sont réinitialisées explicitement |
| Pause/reprise et perte de focus | Aucun timer de mécanique n'avance hors simulation ; pas d'inputs restés coincés |

L'ordre de résolution doit être stable, testé en miroir de P1/P2 et sérialisable. Un objet partagé doit avoir un propriétaire de dégâts distinct de son bénéficiaire actuel. Les crédits de KO et le nettoyage ne peuvent pas être laissés à l'ordre de boucle des joueurs.
