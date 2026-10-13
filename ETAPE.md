# ✅ Étape 4 terminée : les fruits volent (branche `etape-04-fruits`)

## Étape 5 — Couper les fruits

**Fichiers à modifier :** `js/collision.js` puis `js/blade.js`

1. Dans `collision.js`, termine `segmentHitsCircle()` : la lame touche-t-elle le fruit ?
2. Dans `blade.js`, fonction `getBladeSegment()` : calcule la vitesse de la lame.
   Un fruit n'est coupé que si le geste est assez rapide.

**✅ C'est réussi si** un geste rapide coupe le fruit en deux et augmente le score,
alors qu'un geste lent passe à travers sans le couper.

**🎯 Défi :** règle `BLADE_MIN_SPEED` dans `js/config.js` pour que le jeu soit ni trop facile, ni trop dur.

Bloqué ? Récupère la branche `etape-05-decoupe`.
