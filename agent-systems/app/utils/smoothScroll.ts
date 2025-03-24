/**
 * Hilfsfunktion für sanftes Scrollen zu einem Element oder Anker
 * @param elementId - Die ID des Elements, zu dem gescrollt werden soll (ohne #)
 * @param duration - Die Dauer der Animation in Millisekunden
 * @param offset - Optional: Versatz vom oberen Rand in Pixeln
 */
export const smoothScrollTo = (
  elementId: string,
  duration = 800,
  offset = 0
): void => {
  // Verhindere die Ausführung während SSR
  if (typeof window === "undefined") return;

  // Finde das Zielelement
  const targetElement = document.getElementById(elementId);

  if (!targetElement) {
    console.warn(`Element mit ID "${elementId}" nicht gefunden`);
    return;
  }

  // Aktuelle Position
  const startPosition = window.pageYOffset;

  // Zielposition mit Offset
  const targetPosition =
    targetElement.getBoundingClientRect().top + window.pageYOffset - offset;

  // Distanz, die gescrollt werden muss
  const distance = targetPosition - startPosition;

  let startTime: number | null = null;

  // Easing-Funktion für natürlichere Bewegung (easeInOutQuad)
  const easeInOutQuad = (
    time: number,
    start: number,
    change: number,
    duration: number
  ): number => {
    time /= duration / 2;
    if (time < 1) return (change / 2) * time * time + start;
    time--;
    return (-change / 2) * (time * (time - 2) - 1) + start;
  };

  // Animationsfunktion
  const animateScroll = (currentTime: number) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;

    const nextPosition = easeInOutQuad(
      timeElapsed,
      startPosition,
      distance,
      duration
    );

    window.scrollTo(0, nextPosition);

    if (timeElapsed < duration) {
      requestAnimationFrame(animateScroll);
    }
  };

  requestAnimationFrame(animateScroll);
};

/**
 * Hook-Event-Handler für Links mit Anker-Tags
 * Verhindert das Standard-Scroll-Verhalten und verwendet stattdessen das sanfte Scrollen
 * @param e - Das Event-Objekt
 * @param offset - Optional: Versatz vom oberen Rand in Pixeln
 */
export const handleSmoothScroll = (
  e: React.MouseEvent<HTMLAnchorElement>,
  offset = 0
): void => {
  const href = e.currentTarget.getAttribute("href");

  // Verarbeite sowohl #section als auch /#section Formate
  if (href && (href.startsWith("#") || href.startsWith("/#"))) {
    e.preventDefault();
    // Extrahiere den Abschnitts-ID aus dem href
    const targetId = href.startsWith("/#")
      ? href.substring(2) // Entferne /# vom Anfang
      : href.substring(1); // Entferne # vom Anfang

    smoothScrollTo(targetId, 800, offset);
  }
};
