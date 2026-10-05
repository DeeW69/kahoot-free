# QuizVolt ⚡

Application française de quiz multijoueur gratuite et indépendante de Kahoot. Elle n’utilise pas sa marque, son code ou ses contenus.

## Fonctionnalités

- Éditeur de quiz : QCM à quatre choix, vrai/faux, durée de 10 à 120 secondes, duplication des questions.
- Bibliothèque persistante en base Cloudflare D1 ; clé privée pour retrouver la bibliothèque sur un autre appareil.
- Import et export JSON.
- Salles avec code à six chiffres et lien d’invitation ; animateur et joueurs sur des appareils séparés.
- Réponses synchronisées par interrogation du serveur toutes les 1,2 secondes.
- Chronomètre côté serveur, une réponse par joueur et question, bonne réponse cachée avant la révélation.
- Score : 500 à 1 000 points pour une bonne réponse selon la rapidité ; classement et podium.
- Interface responsive et sons activables.
- Avatars personnalisables : huit personnages, chapeaux, lunettes, badges et six couleurs. Choix à l’entrée et modification pendant la partie, sauvegardés en D1.
- Classement avec avatars, mise en évidence du joueur, évolution des places, points de la question et podium visuel.

## Limites de cette première version

100 joueurs par salle, 100 questions par quiz, accès aux salles pendant 24 heures. Pas de facturation ou de fonction premium intégrée. Les coûts et quotas éventuels de l’hébergeur restent indépendants du logiciel. Ce projet ne reproduit pas l’intégralité du catalogue commercial de Kahoot : pas de banque de quiz tierce, médias, équipes, quiz asynchrones, SSO ou rapports exportables. La bibliothèque utilise une clé privée, pas un compte utilisateur ; perdre la clé fait perdre l’accès. Le service public n’intègre pas encore de protection anti-abus ou de limitation globale des créations : durcir l’accès avant un déploiement à grande échelle.

## Développement

Node.js >=22.13, pnpm.

```sh
pnpm install
pnpm db:generate
pnpm dev
```

Le serveur est un Worker Cloudflare compatible Vinext. La liaison D1 logique se nomme `DB`, déclarée dans `.openai/hosting.json`. Les tables sont définies dans `db/schema.ts` et les migrations dans `drizzle/`. Appliquer les migrations à une base locale avant de tester les fonctions serveur. `pnpm build` produit le Worker dans `dist/server` et les assets dans `dist/client`.

```sh
pnpm exec tsc --noEmit
pnpm build
```

Le déploiement géré par Sites applique les migrations et injecte la base D1. Ne pas utiliser GitHub Pages seul : cette application nécessite son backend.

## Format d’import

```json
{"title":"Mon quiz","questions":[{"text":"Combien font 2 + 2 ?","options":["3","4","5","6"],"correct":1,"seconds":20}]}
```

`correct` est l’index de la bonne réponse à partir de zéro. Les durées autorisées sont 10, 20, 30, 60 et 120 secondes.
