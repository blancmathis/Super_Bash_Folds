# 02 — Une troupe, pas un catalogue

Tous les noms sont provisoires. Les descriptions sont des briefs de conception, pas des illustrations achevées. Les mécaniques marquées **extension** ne sont pas implémentées par le simple ajout d'un pack.

## Vue d'ensemble

| Héros | Promesse dans la main | Silhouette | Émotion | Fragilité principale |
|---|---|---|---|---|
| Rivo | Tendre, bondir, repartir | Virgule compacte + queue en pli cassé | Élan contagieux | Engagement mal anticipé |
| Bront | S'ancrer, rapprocher, expulser | Cloche trapue + grandes mains plates | Force chaleureuse | Approche et retour horizontal |
| Nacre | Planer, orienter, effleurer | Cerf-volant dissymétrique | Élégance un peu snob | Corps léger, départs lents |
| Tambo | Poser une note, attendre, surprendre | Ovale creux + jambes en compas | Timidité sonore | Préparation et proximité |
| Vesper | Montrer, feinter, changer d'angle | Diagonale fine + aile en rideau | Panache fragile | Mauvaise lecture très punissable |
| Noue | Faire pousser, inviter, détourner | Nœud bas + grande feuille latérale | Fierté obstinée | Son outil profite aux deux camps |

Les héros ne sont pas six déclinaisons d'un animal avec un accessoire. Leur centre de gravité, leur ligne d'action, leur cadence et leur occupation de l'espace doivent être différents. La lisibilité du corps prime sur la finesse de l'espèce fictive.

## 1. Rivo — Le coursier qui part avant d'avoir fini de réfléchir

### Personnage et dessin

Petit **bondelin** au corps mandarine compact, museau court et asymétrie nette : une oreille arrondie, l'autre comme repliée. Sa grande queue n'est ni une boule ni un ressort métallique ; c'est un épais ruban vivant à deux coudes, qui dessine un Z souple derrière lui. Ventre crème, extrémité de queue bleu pétrole. Trois masses : tête, buste, pli. Pieds nus plats, mains courtes ; pas de gants blancs, chaussures géantes ou silhouette de hérisson.

Il livre les plis du Port des Courants et dit oui avant de connaître la destination. Son courage vient de l'enthousiasme, pas de l'absence de peur. Il aime être utile, déteste attendre, et finit parfois de saluer alors que son corps est déjà parti. Au repos, sa queue le ramène discrètement à sa place. Après une défaite, il vérifie d'abord que le courrier n'est pas abîmé.

**Mini-scène de reconnaissance :** il tente une pose héroïque, sa queue encore tendue le fait avancer d'un petit bond involontaire, il transforme l'accident en salut. Le geste doit rester compréhensible sans visage et sans son.

### Combat

C'est la porte d'entrée au jeu : déplacement réactif, attaques proches et nettes, poursuite aérienne plaisante. Il ne doit pas cumuler meilleure vitesse, meilleure portée et meilleur retour. Poids légèrement inférieur à la médiane ; portée courte à moyenne ; bon freinage. Le contraste avec Bront doit être ressenti dès trois pas.

**Signature proposée : le ricochet choisi.** Son spécial latéral est une détente de queue. Sur une touche corporelle valide, il peut repartir une seule fois vers le haut ou en arrière, selon la direction tenue. Ce n'est pas un saut rendu automatiquement : le moteur doit conserver un jeton `ricochetAvailable` consommé jusqu'à l'atterrissage sur une surface stable. Bouclier, projectile, objet, allié ou invulnérabilité ne donnent pas de ricochet. Une touche reçue simultanément l'annule. **Extension moteur**, à comparer à une variante sans ricochet avant de l'adopter.

| Entrée | Geste et rôle | Réponse adverse |
|---|---|---|
| Spécial neutre — Claque-pli | Claque courte de la queue ; charge légère visible, pas de projectile longue portée | Reculer et punir le relâchement, ou sauter |
| Spécial côté — Détente | Bond offensif horizontal, arrêt clair si raté ; ricochet conditionnel dans la version étendue | Bouclier, déplacement vertical, punition de fin |
| Spécial haut — Déplié | Éjecte le corps au-dessus de la queue comprimée ; direction partiellement contrôlable | Attendre l'angle choisi ; il ne traverse pas gratuitement l'adversaire |
| Spécial bas — Rabattue | Balayage bas qui couvre la proximité, peu de déplacement | Petit saut ; le coup n'est ni invincible ni un contre universel |

**Normaux essentiels :** jab « Petit pli », petite frappe horizontale ; attaque basse « Balayette », met en l'air sans éjecter prématurément ; aérien avant « Coup de hanche », déplace latéralement ; aérien haut « Virgule », suit une trajectoire ascendante ; gros coup avant « Grand déplié », exige de lire une approche et rate au-dessus d'une cible trop basse. Les autres normales doivent compléter ce vocabulaire, pas ajouter une arme sans lien.

**Séquence rêvée :** balayette, saut, aérien avant ; l'autre joueur choisit sa dérive ; Rivo doit décider entre poursuivre pour une seconde touche ou garder sa queue pour revenir. Une belle poursuite qui finit en chute est acceptable et drôle si le risque était visible.

**Anti-frustration :** pas de rebond infini, pas d'attaque latérale sûre sur tous les boucliers, pas de récupération renouvelée sur les plantes de Noue. L'accessoire de queue ne devient une hurtbox que dans les poses de combat explicitement définies ; une grande décoration ne doit pas faire subir une touche invisible.

**Test décisif :** en une minute, un nouveau joueur découvre un mouvement plaisant et revient sur le terrain au moins une fois après démonstration. En duel confirmé, on peut forcer et punir sa détente. S'il est simplement le meilleur partout, réduire une force, pas son caractère.

## 2. Bront — Le colosse qui ne veut rien casser

### Personnage et dessin

Un grand habitant de céramique mate des Fours de Braise : corps en cloche, petites jambes solides, bras lourds terminés par des mains de potier très larges. Le visage se niche haut dans une petite ouverture expressive ; deux plaques de poitrine rappellent les portes d'un four sans dessiner un robot réaliste. Terre rouge sourde, crème poussière et lumière miel seulement dans les ouvertures. Pas de pointes, carapace, armure militaire ou marteau générique.

Il transporte un four de quartier et fait du pain de pierre pour les voyageurs. Il s'excuse trop vite, mais devient intraitable quand on maltraite son travail. Sa lenteur est une décision tranquille, pas de la bêtise. Il souffle sur une minuscule pâtisserie pour la refroidir ; le souffle fait claquer toutes les nappes autour.

### Combat

**Le plaisir d'un gros corps précis.** Bront doit se déplacer avec une inertie lisible mais s'arrêter à l'endroit voulu. Le joueur ne doit pas se sentir puni d'avoir choisi un lourd. Il prend de la place, gagne sur une bonne lecture et souffre quand il poursuit. Ses grosses mains sont des surfaces d'attaque explicites, pas des bulles qui couvrent la moitié de l'écran.

Sa signature initiale est **la paume inclinée** : des attaques lentes dont la géométrie et l'angle distinguent nettement repousser, soulever et rabattre. Une future sélection d'angle pendant la préparation peut être testée, mais le premier prototype utilise des coups séparés et lisibles. Aucun besoin d'une jauge de rage ou d'armure permanente.

| Entrée | Geste et rôle | Réponse adverse |
|---|---|---|
| Spécial neutre — Soufflet | Souffle de four bref, charge visible et portée limitée | Se placer hors de l'axe ; punir le temps de recharge animé |
| Spécial côté — Brassée | Prise courte puis poussée ; pas une course invulnérable | Saut ou recul ; saisir son raté |
| Spécial haut — Soupape | Décollage vertical puissant, dérive horizontale réduite | Intercepter l'approche latérale ; respecter sa montée |
| Spécial bas — Tassement | Paumes au sol, onde courte à hauteur des pieds | Sauter ; ne pas confondre poussière décorative et hitbox |

**Normaux essentiels :** jab « Toc », reprise proche pas démesurément lente ; tilt avant « Paume », contrôle horizontal ; tilt haut « Soulève », antiaérien ; smash avant « Porte-four », engagement important ; aérien arrière « Revers de plaque », bon outil de sortie, pas un bouton sûr universel.

**Séquence rêvée :** l'adversaire saute pour éviter la Brassée ; Bront s'arrête, anticipe sa retombée et le soulève d'une paume. Le joueur de Bront se sent malin, pas seulement puissant.

**Faiblesses exploitables :** longues fins d'attaque, grande surface corporelle, déplacement aérien limité. Son retour vertical doit quand même lui donner une chance réelle de rejouer. Aucun combo garanti très long simplement parce qu'il est lourd.

**Test décisif :** un débutant peut toucher intentionnellement avec Bront ; un expert ne peut pas gagner en répétant sa prise. Si le personnage est ennuyeux hors impact, améliorer sa marche, ses arrêts et ses gestes plutôt qu'augmenter encore les dégâts.

## 3. Nacre — La navigatrice qui veut que tout reste élégant

### Personnage et dessin

Une **raie de ciel** qui marche sur deux petites nageoires repliées. Son manteau forme un cerf-volant dissymétrique ; une aile large et souple s'oppose à une aile plus courte tenue comme un éventail. Visage étroit sous le bord avant, grands espaces négatifs entre bras et voile. Ivoire, turquoise profond et accent pêche. Éviter l'apparence de princesse avec robe et pouvoir élémentaire interchangeable.

Elle guide les traversées entre les régions et traite les turbulences comme des fautes de goût. Elle est généreuse mais veut tout prévoir. Quand elle manque un atterrissage, elle remet sa voile en place avec une dignité excessive. Son attachement à Rivo vient précisément de ce qu'il improvise ce qu'elle n'aurait jamais planifié.

### Combat

Promesse : **changer l'angle, pas disparaître**. Dérive aérienne précise, descente relativement lente, faible poids et difficulté à finir sans bon placement.

Neutre « Éventail » : poussée directionnelle courte. Côté « Bordée » : dash oblique exposé en fin. Haut « Grande voile » : remontée puis descente contrôlée, pas un vol infini. Bas « Courant tenu » : une zone courte visible qui infléchit légèrement une trajectoire, **extension**. La zone affecte les deux joueurs et les projectiles explicitement compatibles, pas les déplacements scriptés invulnérables ; un seul courant à la fois, vitesse additionnelle plafonnée, disparition à l'éjection de Nacre.

**Risque principal :** rendre les contrôles de l'autre joueur désagréables. Une bourrasque doit proposer un angle à anticiper, pas inverser les commandes. Aucun affaiblissement caché du saut, aucune force hors champ.

**Séquence rêvée :** l'adversaire voit le courant, l'utilise lui-même pour raccourcir son approche ; Nacre doit se replacer. Le jeu se passe autour d'un espace partagé, pas dans un piège unilatéral.

**Test :** demander à l'adversaire d'expliquer pourquoi il a été dévié. S'il ne peut pas, corriger l'effet et le signal avant l'équilibrage.

## 4. Tambo — Le musicien qui fait trop de bruit quand il a peur

### Personnage et dessin

Un petit habitant creux des Falaises d'Écho. Torse ovale de bois résonnant, ouverture sombre non circulaire, visage au bord supérieur, jambes fines en compas et avant-bras en baguettes souples. Il ne porte pas seulement un tambour : son corps résonne, mais sa forme reste une créature. Ocre chaud, prune et crème. Pas de notes flottantes permanentes qui brouilleraient l'écran.

Il rêve de jouer en solo et s'entraîne partout où personne ne l'écoute. Le silence d'un public le panique ; son pied produit alors un gros son involontaire. En victoire, il attend une fraction de seconde puis réalise que les applaudissements sont pour lui.

### Combat

Promesse : **placer une conséquence dans le futur**. Neutre « Toc sec » : attaque proche et simple. Côté « Note roulée » : projectile au sol lent. Haut « Coup de caisse » : percussion sous lui qui le propulse. Bas « Rappel » : pose un unique écho qui répète une pulsation après un délai fixe, **extension**.

Pour le premier essai, un seul écho, délai de 30 frames, cercle qui se referme jusqu'au déclenchement et son d'alerte distinct. L'écho est détruisible ; il disparaît quand son auteur est éjecté. Il ne copie pas automatiquement toute l'attaque ni ses dégâts et ne peut pas lancer une nouvelle copie. Ne pas autoriser immédiatement des chaînes de rappels ou des empilements d'objets.

Il gagne en faisant choisir entre avancer maintenant ou attendre, mais perd si on l'étouffe pendant sa préparation. Son jab doit être fonctionnel, sans supprimer cette faiblesse.

**Pas un jeu de rythme obligatoire.** Les commandes ne gagnent pas de puissance si elles suivent la musique ; celle-ci ne doit pas dicter l'avantage ni exclure un joueur qui coupe le son. Le rythme du personnage est visible dans ses animations.

**Séquence rêvée :** Tambo lance une note ; l'adversaire attend son rappel ; Tambo ose enfin avancer plutôt que de rester derrière. Si la meilleure stratégie est toujours de fuir, revoir le kit.

## 5. Vesper — Le prestidigitateur qui a besoin d'être admiré

### Personnage et dessin

Un **papillon de coulisses** longiligne, avec une aile courte pliée devant comme un rideau et une seconde en longue diagonale derrière le corps. Tête étroite, sourcils en accents épais, jambes fines et pieds légèrement évasés. Aubergine, ivoire et jaune ambre en touches. Ni costume de sorcier connu, ni haut-de-forme obligatoire, ni masque intégral qui effacerait l'expression.

Il veut sauver son théâtre et prétend que rien ne l'atteint. Ses tours fonctionnent moins bien quand personne ne le regarde. Il est fanfaron, pas cruel. Son respect pour Bront vient du fait que celui-ci applaudit même les mauvais numéros.

### Combat

Promesse : **faire engager l'autre au mauvais endroit**. Courte portée, déplacement souple, fortes punitions sur lecture et erreurs coûteuses.

Neutre « Pan de rideau » : frappe précise courte. Côté « Pas de côté » : glissement au sol, sans traversée automatique de bouclier. Haut « Rappel de scène » : retour oblique exposé. Bas « Doublure » : pose une silhouette et peut échanger sa place avec elle après une préparation visible, **extension**.

La doublure porte un motif hachuré distinct du vrai joueur et n'affiche jamais un second indicateur P1/P2 identique. Un seul leurre, durée courte, position de destination valide vérifiée, pas d'apparition derrière un adversaire sans signal. Interdit dans le vide hors limites, pendant hitstun, saisie ou invulnérabilité de réapparition. Une préparation d'environ 15 frames est un point de départ à tester, pas une garantie de réaction pour tous.

La profondeur vient de l'intention révélée puis déjouée, pas d'une invisibilité permanente ou d'un écran devenu illisible. Une option de contraste renforcé doit conserver la mécanique sans exiger de percevoir de faibles différences de couleur.

**Test :** le perdant doit pouvoir dire « il m'a fait croire qu'il allait faire ceci », pas « je ne savais plus quel personnage contrôler ».

## 6. Noue — La jardinière qui croit que tout pousse mieux sous ses ordres

### Personnage et dessin

Une créature de racines nouées : corps bas, deux jambes torsadées de longueur visuellement proche, une grosse main comme une pince de branches et une feuille latérale beaucoup trop large. Visage clair pris entre deux nœuds, petites pousses qui suivent ses émotions. Vert sauge, violet terre et crème. Pas de cactus humain, pas de champignon posé sur un personnage standard.

Elle entretient le Jardin des Nœuds et donne des instructions à toutes ses plantes. Elle bougonne quand elles poussent ailleurs, puis les protège quand même. Le gag de victoire est une plante qui lui vole son emplacement sur le podium : elle soupire et lui laisse la place.

### Combat

Promesse : **créer un outil dont il faut conserver le contrôle**. Neutre « Graine lourde » : projectile arqué, peu rapide. Côté « Coup de racine » : portée horizontale avec retour exposé. Haut « Vrille » : remontée courte et lisible. Bas « Bourgeon » : fait pousser une fleur-rebond partagée, **extension**.

Un seul bourgeon, posé uniquement sur une surface stable ; 180 frames de vie comme premier essai, destruction possible, pas de plantation en vol ni sur un autre bourgeon. Les deux joueurs peuvent l'utiliser. Son rebond ne remet pas à zéro les sauts ni les usages de recovery, et il ne transforme pas artificiellement un état aérien en véritable atterrissage. Les validations de stabilité devront être explicites dans le moteur.

À éviter : mur défensif indestructible, génération automatique de terrain, réparation infinie de la plante, dégâts de contact permanents. Le jardin doit être une invitation au jeu, pas une taxe à payer avant d'approcher.

**Séquence rêvée :** Noue prépare un bond pour attaquer, Rivo lui vole son trampoline, Noue l'attend à sa destination. Le mécanisme génère une petite histoire sans script.

## Relations qui produisent des animations

Rivo apporte à Bront des commandes trop pressées ; Bront prétend râler mais garde toujours une fournée pour lui. Nacre reproche à Rivo son improvisation et s'en sert quand sa carte est fausse. Tambo accompagne les numéros de Vesper et est le seul à connaître ses ratés. Noue cultive le bois résonnant de Tambo et exige qu'il joue moins fort près des semis. Bront et Noue se disputent la température idéale d'une serre.

Ces relations doivent d'abord apparaître en deux secondes dans les menus et après les parties. Aucun dialogue long avant une revanche. Les variantes de réplique peuvent enrichir le monde sans devenir une condition de compréhension.

## Priorité et budget créatif

Produire **Rivo et Bront** en premier : contraste mobilité/puissance, silhouettes très différentes, mécaniques de base abordables. **Nacre** en troisième pour éprouver l'air. **Tambo** ensuite pour le placement temporel. Noue et Vesper demandent davantage de règles et ne doivent pas retarder le premier duel satisfaisant.

Six fiches ne sont pas six engagements de production. Abandonner ou fusionner un personnage si son plaisir dépend seulement de chiffres différents, si son contre-jeu n'est pas perceptible ou si son animation exige trop d'exceptions pour rester cohérente.
