// ===============================================================
//  WEBCAM : démarrage et affichage en miroir
// ===============================================================
import { CONFIG } from "./config.js";

// Demande l'accès à la webcam et lance la vidéo
export async function startCamera(video) {
  // TODO étape 1 : demander la webcam au navigateur.
  //   const stream = await navigator.mediaDevices.getUserMedia({
  //     video: { width: CONFIG.VIDEO_WIDTH, height: CONFIG.VIDEO_HEIGHT, facingMode: "user" },
  //     audio: false,
  //   });
  //
  // TODO étape 1 : brancher ce flux sur la balise <video> :  video.srcObject = stream;
  // TODO étape 1 : lancer la lecture :  await video.play();
  //
  // Quand c'est fait, supprime la ligne "throw" ci-dessous.
  throw new Error("Étape 1 à faire : complète startCamera() dans js/camera.js");
}

// Calcule où placer la vidéo pour qu'elle remplisse tout l'écran
// sans être déformée (comme "object-fit: cover" en CSS)
export function getVideoLayout(video, width, height) {
  const scale = Math.max(width / video.videoWidth, height / video.videoHeight);
  const w = video.videoWidth * scale;
  const h = video.videoHeight * scale;
  return { x: (width - w) / 2, y: (height - h) / 2, w, h };
}

// Dessine la vidéo dans le canvas
export function drawVideo(ctx, video, layout) {
  ctx.save();
  // TODO étape 1 : pour l'instant l'image est à l'endroit, ce qui est déroutant
  // quand on bouge la main. Retourne-la comme un miroir :
  //   1. ajoute ici  ctx.translate(layout.x + layout.w, layout.y);
  //   2. puis        ctx.scale(-1, 1);
  //   3. et dessine l'image en (0, 0) au lieu de (layout.x, layout.y).
  ctx.drawImage(video, layout.x, layout.y, layout.w, layout.h);
  ctx.restore();
}
