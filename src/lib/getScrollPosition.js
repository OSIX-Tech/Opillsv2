/**
 * Calculates the change in height from the hero section's animation.
 * NOTE: This is tightly coupled to the animation values in Hero.astro.
 * If the animation heights (504px, 350px) or view heights (40vh, 30vh)
 * in Hero.astro are changed, these values must be updated here as well.
 * @returns {number} The calculated change in height in pixels.
 */
function getHeroHeightDelta() {
  const mockupContainer = document.getElementById('mockup-container');
  // Only calculate if we are near the top where the animation is not yet complete.
  if (!mockupContainer || window.scrollY > 200) {
    return 0;
  }

  const isDesktop = window.matchMedia("(min-width: 768px)").matches;
  const vh = window.innerHeight / 100;

  const finalHeight = isDesktop ? 504 : 350; // Final height in pixels
  const initialHeight = isDesktop ? 40 * vh : 30 * vh; // Initial height in vh units

  const delta = finalHeight - initialHeight;
  return delta > 0 ? delta : 0;
}

/**
 * Gets the correct final scroll position for a target element.
 * @param {string} selector - The CSS selector of the target element (e.g., '#features').
 * @returns {number | null} The calculated Y scroll position, or null if the element is not found.
 */
export function getCorrectScrollY(selector) {
  const targetElement = document.querySelector(selector);
  if (!targetElement) {
    return null;
  }
  
  const documentHeight = document.documentElement.scrollHeight;
  const viewportHeight = window.innerHeight;
  const maxScroll = documentHeight - viewportHeight;
  
  const heightDelta = getHeroHeightDelta();
  const rect = targetElement.getBoundingClientRect();
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  const elementTop = rect.top + scrollTop;
  const finalElementTop = elementTop + heightDelta;

  const elementHeight = targetElement.clientHeight;

  // Calculate the position to center the element in the viewport
  const centeredPosition = finalElementTop - (viewportHeight / 2) + (elementHeight / 2);
  
  return Math.max(0, Math.min(centeredPosition, maxScroll));
} 