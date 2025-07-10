import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { getCorrectScrollY } from './getScrollPosition.js';

gsap.registerPlugin(ScrollToPlugin);

function smoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const href = this.getAttribute('href');
      const correctY = getCorrectScrollY(href);

      if (correctY !== null) {
        gsap.to(window, { 
          duration: 1.5, 
          scrollTo: { y: correctY, autoKill: false }, 
          ease: 'power3.inOut' 
        });
      }
    });
  });
}

smoothScroll(); 