import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { getCorrectScrollY } from './getScrollPosition.js';

gsap.registerPlugin(ScrollToPlugin);

function smoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const href = this.getAttribute('href');

      // Special case for scrolling to the very top of the page
      if (href === '#page-top') {
        gsap.to(window, { 
          duration: 1.5, 
          scrollTo: { y: 0, autoKill: false }, 
          ease: 'power3.inOut' 
        });
        return; // Stop further execution
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