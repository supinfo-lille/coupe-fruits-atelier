// ===============================================================
//  LES FRUITS : lancer, physique, dessin, découpe en deux
// ===============================================================
import { CONFIG } from "./config.js";

function randomBetween(min, max) {
  return min + Math.random() * (max - min);
}

// Crée un fruit (ou une bombe) qui part du bas de l'écran
export function createFruit(width, height, isBomb) {
  const radius = CONFIG.FRUIT_SIZE * height;
  const gravity = CONFIG.GRAVITY * height;

  const x = width * randomBetween(0.2, 0.8);
  const y = height + radius;

  // On choisit la hauteur où le fruit s'arrêtera de monter…
  const peakY = height * randomBetween(0.15, 0.4);
  // …et on calcule la vitesse de départ nécessaire pour l'atteindre (physique du lycée !)
  const vy = -Math.sqrt(2 * gravity * (y - peakY));

  // Le fruit dérive doucement vers le centre de l'écran
  const flightTime = (2 * -vy) / gravity;
  const targetX = width * randomBetween(0.3, 0.7);
  const vx = (targetX - x) / flightTime;

  // TODO étape 4 : pour l'instant c'est toujours le premier fruit de la liste.
  // Choisis-en un au hasard : Math.random() donne un nombre entre 0 et 1,
  // multiplie-le par CONFIG.FRUITS.length et arrondis à l'entier inférieur (Math.floor).
  const fruitIndex = 0;
  const emoji = isBomb ? CONFIG.BOMB : CONFIG.FRUITS[fruitIndex];

  return {
    emoji,
    isBomb,
    x,
    y,
    vx,
    vy,
    radius,
    angle: 0,
    spin: randomBetween(-3, 3), // vitesse de rotation (radians par seconde)
  };
}

// Fait avancer un objet (fruit ou moitié de fruit) pendant dt secondes
export function moveObject(obj, dt, height) {
  // TODO étape 4 : la physique ! À chaque image, pendant dt secondes :
  //   1. la gravité augmente la vitesse vers le bas :  obj.vy += CONFIG.GRAVITY * height * dt;
  //   2. la position avance selon la vitesse :         obj.x += obj.vx * dt;   (et pareil pour y)
  //   3. le fruit tourne sur lui-même :                obj.angle += obj.spin * dt;
}

// Vrai quand l'objet est retombé sous le bas de l'écran
export function isOffScreen(obj, height) {
  // TODO étape 4 : renvoie true si le fruit redescend (obj.vy > 0)
  // ET que son bord supérieur (obj.y - obj.radius) est plus bas que le bas de l'écran (height).
  return false;
}

// Dessine un emoji centré, tourné d'un certain angle
export function drawEmoji(ctx, emoji, x, y, radius, angle = 0) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(angle);
  ctx.font = `${radius * 2}px "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", sans-serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(emoji, 0, 0);
  ctx.restore();
}

export function drawFruit(ctx, fruit) {
  drawEmoji(ctx, fruit.emoji, fruit.x, fruit.y, fruit.radius, fruit.angle);
}
