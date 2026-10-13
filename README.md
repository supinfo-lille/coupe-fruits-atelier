# 🍉 Coupe-Fruits — atelier jeu vidéo et vision par ordinateur

Dans cet atelier, tu construis pas à pas un jeu où l'on tranche des fruits avec son index,
devant la webcam. La main est reconnue par **MediaPipe**, une intelligence artificielle
de Google qui repère 21 points sur la main, en temps réel, directement dans le navigateur.

👉 **Lis le fichier `ETAPE.md` : il te dit où tu en es et ce que tu dois faire.**

## Lancer le projet

La webcam ne fonctionne que si la page est servie par un petit serveur local
(un double-clic sur `index.html` ne suffit pas).

- **VS Code** : installe l'extension *Live Server*, puis clic droit sur `index.html` → *Open with Live Server*.
- **En ligne de commande**, dans ce dossier : `npx serve` (puis ouvre http://localhost:3000)
  ou `python -m http.server 8000` (puis ouvre http://localhost:8000).

Utilise Chrome ou Edge. Commence par ouvrir la page **`check.html`** : elle vérifie que ton ordinateur est prêt.

Tu n'as jamais programmé ? Commence par la page **`bases.html`** : une mise en jambe en JavaScript
où tu fais tomber et rebondir des balles, avec tout ce qu'il faut savoir pour le jeu.

## Les étapes (une branche par étape)

Chaque branche contient le projet **une fois l'étape terminée**. Si tu es bloqué ou en retard,
récupère la branche de l'étape précédente et repars de là.

| Branche | Ce qui marche dans cette branche |
|---|---|
| `main` | Le point de départ : la page s'ouvre |
| `etape-00-bases` | Corrigé de la mise en jambe JavaScript (`bases.html`) |
| `etape-01-webcam` | La webcam s'affiche en miroir |
| `etape-02-main` | Les 21 points de la main sont dessinés |
| `etape-03-lame` | Le doigt laisse une traînée lumineuse |
| `etape-04-fruits` | Des fruits sont lancés et retombent |
| `etape-05-decoupe` | On coupe les fruits, le score augmente |
| `etape-06-jeu-complet` | Le jeu complet : menu, vies, bombes |

### Récupérer une branche

- **Sans Git** : sur la page GitHub du projet, choisis la branche dans le menu en haut à gauche
  (il affiche `main`), puis clique sur **Code → Download ZIP**.
- **Avec Git** : `git switch etape-03-lame`
  (attention, tes modifications non enregistrées seront perdues : fais d'abord `git stash` si besoin).

## Les fichiers

| Fichier | Rôle |
|---|---|
| `js/config.js` | Tous les réglages du jeu : vitesse, gravité, fruits, vies… |
| `js/camera.js` | Webcam et affichage en miroir |
| `js/hand.js` | Détection de la main avec MediaPipe |
| `js/blade.js` | La traînée qui suit le doigt |
| `js/fruits.js` | Lancer, gravité, dessin et découpe des fruits |
| `js/collision.js` | Le calcul « la lame touche-t-elle le fruit ? » |
| `js/game.js` | Score, vies, bombes, menus |
| `js/main.js` | Démarrage et boucle de jeu |
| `check.html`, `outils/` | Page de diagnostic de l'ordinateur |
| `bases.html`, `bases/` | Mise en jambe JavaScript pour les débutants |

Les endroits à compléter sont marqués `TODO` dans le code, avec le numéro de l'étape.
