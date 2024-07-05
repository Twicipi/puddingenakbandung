// src/directives/v-scroll-animation.js
export default {
    mounted(el) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.classList.add('animate');
            observer.unobserve(el);
          }
        },
        {
          threshold: 0.1
        }
      );
  
      observer.observe(el);
    }
  };
  