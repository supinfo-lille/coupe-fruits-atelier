# 🏁 Point de départ (branche `main`)

## Étape 0 — Prépare ton ordinateur

1. Lance le serveur (voir le `README.md`).
2. Ouvre la page `check.html` : toutes les lignes doivent être vertes ✅.

## Deux parcours pour démarrer

- **Tu n'as jamais programmé ?** Commence par la mise en jambe : ouvre la page `bases.html`
  et complète le fichier `bases/exercices.js` (environ 50 minutes). Corrigé : branche `etape-00-bases`.
  Ensuite, passe à l'étape 1 ci-dessous.
- **Tu as déjà codé ?** Passe directement à l'étape 1.

## Étape 1 — Afficher la webcam

**Fichier à modifier :** `js/camera.js`

1. Complète la fonction `startCamera()` (3 TODO), puis supprime la ligne `throw`.
2. Recharge la page du jeu : tu te vois… mais à l'envers, comme sur une photo.
3. Dans `drawVideo()`, retourne l'image pour obtenir un miroir.

**✅ C'est réussi si** tu te vois en plein écran, et que ta main droite apparaît à droite de l'écran.

**🎯 Défi :** dans `js/config.js`, change `VIDEO_WIDTH` et `VIDEO_HEIGHT` (essaie 320×240). Que remarques-tu ?

Bloqué ? Récupère la branche `etape-01-webcam`.
