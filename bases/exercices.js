// ===============================================================
//  MISE EN JAMBE JAVASCRIPT
//  Complète les TODO dans l'ordre. Après chaque modification :
//  enregistre (Ctrl+S) et recharge la page (F5).
// ===============================================================


// ---------------------------------------------------------------
// EXERCICE 1 — Variables et calculs
// Ouvre la console du navigateur (touche F12, onglet « Console »).
// Tout ce que tu donnes à console.log s'affiche dedans.
// ---------------------------------------------------------------
console.log("Bonjour ! Le JavaScript fonctionne.");

// Une variable, c'est une boîte qui porte un nom et contient une valeur.
// "let" crée une variable qui pourra changer, "const" une valeur fixe.
const largeur = 800;
let score = 0;

// TODO 1a : affiche dans la console la moitié de la largeur.
//   Indice : console.log(largeur / 2);
console.log(largeur / 2);

// TODO 1b : ajoute 1 au score, trois fois, puis affiche le score.
//   Indice : score += 1;  veut dire « score devient score + 1 »
score += 1;
score += 1;
score += 1;
console.log("Score :", score);


// ---------------------------------------------------------------
// EXERCICE 2 — Un objet pour décrire une balle
// Un objet regroupe plusieurs valeurs sous un même nom.
// On lit ou on change une valeur avec un point : ball.x
// ---------------------------------------------------------------
const canvas = document.getElementById("terrain");
const ctx = canvas.getContext("2d");

const ball = {
  x: 100,
  y: 100,
  vy: 0, // vitesse verticale, en pixels par seconde
  radius: 30,
  color: "#F15A4F",
};

// TODO 2a : place la balle en haut, au centre du terrain.
//   Indice : ball.x = canvas.width / 2;   et   ball.y = ball.radius;
ball.x = canvas.width / 2;
ball.y = ball.radius;

// TODO 2b : change la couleur et la taille de la balle comme tu veux.
//   Les couleurs s'écrivent "#RRVVBB" ou avec un nom : "orange", "purple"…
ball.color = "#3B3092";
ball.radius = 40;

// Cette fonction dessine n'importe quelle balle qu'on lui donne
function drawBall(b) {
  ctx.fillStyle = b.color;
  ctx.beginPath();
  ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
  ctx.fill();
}


// ---------------------------------------------------------------
// EXERCICE 3 — La balle tombe
// dt est le temps écoulé depuis l'image précédente (environ 1/60 s).
// ---------------------------------------------------------------
const GRAVITY = 900; // en pixels par seconde²

function update(b, dt) {
  // TODO 3 : fais tomber la balle.
  //   1. la gravité augmente la vitesse :   b.vy += GRAVITY * dt;
  //   2. la vitesse change la position :     b.y += b.vy * dt;
  b.vy += GRAVITY * dt;
  b.y += b.vy * dt;
}


// ---------------------------------------------------------------
// EXERCICE 4 — La balle rebondit
// "if" exécute du code seulement si une condition est vraie.
// ---------------------------------------------------------------
function bounce(b) {
  // TODO 4 : si le bas de la balle (b.y + b.radius) dépasse le bas du terrain (canvas.height) :
  //   - remets la balle au bord :           b.y = canvas.height - b.radius;
  //   - renvoie-la vers le haut, plus lente : b.vy = -b.vy * 0.8;
  if (b.y + b.radius > canvas.height) {
    b.y = canvas.height - b.radius;
    b.vy = -b.vy * 0.8;
  }
}


// ---------------------------------------------------------------
// EXERCICE 5 — Une pluie de balles
// Un tableau est une liste. balls[0] est le premier élément,
// balls.length le nombre d'éléments, balls.push(x) ajoute x à la fin.
// ---------------------------------------------------------------
const COLORS = ["#F15A4F", "#3B3092", "#6D62D1", "#14112E", "#F2A93B"];
const balls = [ball];

// Une fonction peut renvoyer un résultat avec "return"
function createRandomBall(x) {
  // TODO 5a : renvoie une nouvelle balle qui apparaît en haut, à la position x du clic,
  //   avec un rayon au hasard entre 10 et 40 et une couleur au hasard.
  //   Indices :  Math.random() donne un nombre entre 0 et 1
  //              10 + Math.random() * 30  donne un nombre entre 10 et 40
  //              COLORS[Math.floor(Math.random() * COLORS.length)]  donne une couleur au hasard
  return {
    x: x,
    y: 0,
    vy: 0,
    radius: 10 + Math.random() * 30,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
  };
}

canvas.addEventListener("click", (event) => {
  const x = event.offsetX * (canvas.width / canvas.clientWidth);
  // TODO 5b : ajoute une nouvelle balle au tableau, à chaque clic.
  //   Indice : balls.push(createRandomBall(x));
  balls.push(createRandomBall(x));

  // TODO 5c : garde 30 balles au maximum : tant que (while) le tableau en contient plus de 30,
  //   retire la plus ancienne avec balls.shift();
  while (balls.length > 30) {
    balls.shift();
  }
});


// ---------------------------------------------------------------
// LA BOUCLE D'ANIMATION (déjà écrite) : 60 fois par seconde,
// on efface, on met à jour chaque balle, et on la redessine.
// ---------------------------------------------------------------
let lastTime = performance.now();

function loop(now) {
  const dt = Math.min((now - lastTime) / 1000, 0.05);
  lastTime = now;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (const b of balls) {
    if (!b) continue; // tant que l'exercice 5a n'est pas fait, on ignore les balles vides
    update(b, dt);
    bounce(b);
    drawBall(b);
  }
  requestAnimationFrame(loop);
}

requestAnimationFrame(loop);
