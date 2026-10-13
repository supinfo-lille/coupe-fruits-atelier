// ===============================================================
//  LA LAME : la traînée qui suit le doigt
// ===============================================================
import { CONFIG } from "./config.js";

// Historique des dernières positions du doigt : { x, y, time }
const points = [];

// Ajoute une position à l'historique
export function addBladePoint(x, y, time) {
  // TODO étape 3 : ajoute l'objet { x, y, time } à la fin du tableau points.
  // Indice : points.push(…)
}

// Supprime les positions trop anciennes : c'est ce qui fait disparaître la traînée
export function updateBlade(time) {
  // TODO étape 3 : tant que le tableau n'est pas vide ET que le plus vieux point
  // (points[0]) a été ajouté il y a plus de CONFIG.BLADE_DURATION secondes,
  // retire-le avec points.shift().
  // Indice : une boucle while, et l'âge d'un point vaut  time - points[0].time
}

// Renvoie le dernier morceau de trajectoire et sa vitesse en pixels par seconde.
// C'est ce segment qu'on utilise pour savoir si un fruit est coupé.
export function getBladeSegment(time) {
  if (points.length < 2) return null;
  const a = points[points.length - 2];
  const b = points[points.length - 1];
  // Si le doigt ne bouge plus depuis un moment, la lame ne coupe plus
  if (time - b.time > 0.1) return null;
  const duration = b.time - a.time;
  if (duration <= 0) return null;
  // TODO étape 5 : calcule la vitesse de la lame, en pixels par seconde.
  // vitesse = distance parcourue / durée
  // La distance entre a et b se calcule avec Math.hypot(b.x - a.x, b.y - a.y).
  const speed = 0;
  return { a, b, speed };
}

// Dessine la traînée : plus un point est récent, plus le trait est épais et opaque
export function drawBlade(ctx, time) {
  if (points.length < 2) return;

  ctx.save();
  ctx.lineCap = "round";
  ctx.shadowColor = CONFIG.BLADE_GLOW;
  ctx.shadowBlur = 20;

  for (let i = 1; i < points.length; i++) {
    const p0 = points[i - 1];
    const p1 = points[i];
    const life = 1 - (time - p1.time) / CONFIG.BLADE_DURATION; // de 1 (neuf) à 0 (vieux)
    if (life <= 0) continue;

    ctx.globalAlpha = life;
    ctx.strokeStyle = CONFIG.BLADE_COLOR;
    ctx.lineWidth = 2 + 12 * life * (i / points.length);
    ctx.beginPath();
    ctx.moveTo(p0.x, p0.y);
    ctx.lineTo(p1.x, p1.y);
    ctx.stroke();
  }
  ctx.restore();
}
