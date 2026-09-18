# 05 — Arènes, jouets et modes

## Une arène est d'abord une géométrie

Avant l'illustration, tester largeur du plateau, hauteur et espacement des plateformes, bords et blast zone. Une jolie carte ne compense pas un lourd incapable de revenir ou un personnage volant impossible à poursuivre. Comparer les distances en largeurs de corps et les trajets en temps de mouvement, pas seulement en pixels.

Chaque arène possède une version **calme**, sans changement de collision, et éventuellement une version **fête**. La base v1 des packs est statique : les idées dynamiques ci-dessous sont des travaux moteur futurs, pas des propriétés déjà activables dans `stage.json`.

## Trois arènes de lancement proposées

### 1. Port des Courants — priorité

Un grand quai de bois peint entre deux mâts inclinés, deux voiles hautes et des nacelles au loin. Au premier plan, cordes épaisses et arêtes claires ; au fond, des silhouettes de bateaux portées par des courants tissés. Atmosphère de départ, lumière de fin de matinée, petits claquements de tissus.

**Calme :** grand plateau unique avec deux petites plateformes décalées, assez d'espace pour Bront, pas de tunnel ni de plafond qui piège les projections. Collisions symétriques possibles malgré une composition visuelle asymétrique ; variante asymétrique à tester séparément.

**Fête :** un tambour de chargement fixe peut être activé. Il tend sa toile, signale le rebond, puis relâche vers un angle visible. Premier test avec une seule direction et une force bornée. Le quai ne disparaît pas et le mécanisme n'inverse jamais toutes les commandes.

**Micro-vie :** un docker rate le rattrapage d'un colis lors d'une grosse éjection, uniquement en arrière-plan.

### 2. Les Fours de Braise

Un four communal monumental, toits de tuiles gonflées et pots de tailles absurdes. Ce n'est pas un niveau de lave hostile : chaleur accueillante, jaune miel, terre rouge et vapeur stylisée.

**Calme :** plateforme centrale plus courte et une plateforme haute ; comparaison directe avec le quai pour vérifier que Bront ne domine pas simplement les espaces étroits.

**Fête :** deux soupapes se signalent avant de créer un souffle vertical local. Jamais deux forces simultanées opaques ; calendrier visible ou activation par joueur, pas RNG caché. Les bandes dangereuses ne ressemblent pas aux vapeurs décoratives.

### 3. Falaises d'Écho

Des cavités de pierre claire comme des instruments, une terrasse dans la falaise et des maisons suspendues aux parois. Les aplats du plateau restent sobres ; les arêtes musicales animent surtout le fond.

**Calme :** plateforme principale et deux plateformes latérales assez hautes pour les poursuites ; pas de rebond automatique sur tous les murs.

**Fête :** une dalle résonnante répète un rebond après annonce. Ne pas partager au début la même arène avec l'écho complexe de Tambo : tester d'abord chaque système séparément, puis leur combinaison.

## Extensions de lieux, pas promesses de lancement

Jardin des Nœuds pour Noue : courbes organiques, racines tressées, outils d'horticulture démesurés. Théâtre des Faux-Jours pour Vesper : velours mat, rampes et décors coulissants. Hautes Voiles pour Nacre : élégance verticale, toiles suspendues. Pas de versions jouables avant que les trois premières géométries soient intéressantes.

## Objets : mieux vaut cinq bonnes règles que vingt effets

Le dépôt contient déjà vingt objets. Les garder dans le laboratoire et évaluer lesquels respectent la nouvelle DA et les règles d'interaction ; ne pas les supprimer sans migration. La sélection fête de départ peut être réduite à cinq catégories, sans augmenter la portée du projet.

**Balle-ressort :** projectile lent que chacun peut renvoyer. Après plusieurs renvois, la vitesse plafonne ; aucun projectile invisible incontrôlable.

**Voile de poche :** accessoire à usage limité qui aide un retour mais prive temporairement d'une option offensive. Sa présence doit être visible ; pas une sauvegarde gratuite à durée infinie.

**Grelot roulant :** fait entendre et voir une trajectoire avant l'effet, se ramasse ou s'évite. Son bruit reste bref.

**Pot à bourgeon :** rebond partagé, mêmes restrictions anti-empilement que Noue. Ne pas ajouter sa version générique avant de vérifier que cela n'efface pas l'identité de Noue.

**Écriteau retournant :** obstacle ponctuel qui renvoie un projectile selon un angle lisible. Pas de miroir permanent qui rend tout zoner inutile.

Tous ces objets sont des propositions, à mapper sur les objets existants ou à développer explicitement. Deux objets actifs au maximum constituent une première hypothèse de lisibilité à comparer, pas une limite définitive. Apparitions hors hurtbox, pas sur un joueur, annonce brève, aléatoire reproductible dans les tests. Aucun objet ne garantit une éjection à lui seul quelle que soit la situation.

## Modes et priorités

**Duel :** première cible réelle, deux joueurs ou joueur/CPU, trois vies et chronomètre proposé de quatre minutes. Sans objets par défaut dans ce preset, arènes calmes. Les règles actuelles ne sont pas changées par ce document. Temps écoulé : règle de départ à tester, vies puis pourcentage ; égalité exacte = résultat nul ou tie-break clairement affiché, pas choix arbitraire d'un slot.

**Fête :** deux joueurs d'abord ; quatre après extension du moteur. Une manche chronométrée avec réapparition immédiate après KO évite qu'un ami soit éliminé trop tôt. Proposition de score +1 KO, −1 chute, sans double pénalité pour une même mort ; la règle d'attribution doit être explicite. Les équipes 2v2 viennent ensuite, avec règles de dégâts alliés et caméra testées.

**Atelier :** personnage choisi, dummy, affichage des collisions, répétition de situations, réglage de pourcentage et reset immédiat. Réutiliser le Test/Animation Lab existant ; ne pas développer une seconde infrastructure concurrente.

**Virée :** plus tard, une courte succession de duels, défi de déplacement et petit boss réutilisant les règles. Pas de roguelite avec statistiques aléatoires avant le combat de base. Un long solo serait une autre production, pas un sous-menu gratuit.

## Première minute proposée

L'accueil permet Jouer sans compte ni tutoriel forcé. Le novice choisit Rivo ou Bront et voit une phrase : « Bondis pour poursuivre » / « Attends, puis expulse ». Dans une petite aire, il saute et frappe un mannequin. Une flèche montre ensuite le bord ; un exercice facultatif de retour explique spécial haut et double saut. L'autre joueur peut rejoindre sans remettre tout le parcours à zéro.

Les informations apparaissent au moment utile et disparaissent après la réussite. Les échecs ne déclenchent pas des panneaux supplémentaires. Une commande Aide reste accessible. Les joueurs qui connaissent le genre peuvent entrer directement en match.

## Progression sans casser le duel

Débloquer variantes cosmétiques, illustrations, petits dialogues et défis. Aucun dégât ou temps de recovery amélioré par un niveau. Tous les personnages essentiels doivent être disponibles pour jouer ensemble sans grind. Récompenser une nouvelle action essayée et les défis de maîtrise, pas seulement les victoires qui éloignent encore novices et experts.
