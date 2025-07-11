import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { getCorrectScrollY } from './getScrollPosition.js';

gsap.registerPlugin(ScrollToPlugin);

function smoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const href = this.getAttribute('href');
      const targetElement = document.querySelector(href);

      if (!targetElement) return;

      // Special case for scrolling to the very top of the page
      if (href === '#page-top') {
        gsap.to(window, { 
          duration: 1.5, 
          scrollTo: { y: 0, autoKill: false }, 
          ease: 'power3.inOut' 
        });
        return; // Stop further execution
      }

      // Special case for the mockup container to center it
      if (href === '#mockup-container') {
        const elementRect = targetElement.getBoundingClientRect();
        const absoluteElementTop = elementRect.top + window.pageYOffset;
        // Adjusted the divisor from 2 to 2.5 to position the video higher on the screen
        const middle = absoluteElementTop - (window.innerHeight / 2.5) + (elementRect.height / 2);
        
        gsap.to(window, {
          duration: 1.5,
          scrollTo: { y: middle, autoKill: false },
          ease: 'power3.inOut'
        });
        return;
      }
      
      const correctY = getCorrectScrollY(href);

      if (correctY !== null) {
        gsap.to(window, { 
          duration: 1.5, 
          scrollTo: { y: correctY, autoKill: false, delay: 0.1 }, // Added a small delay
          ease: 'power3.inOut' 
        });
      }
    });
  });
}

smoothScroll(); 