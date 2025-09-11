// nav bg
document.addEventListener('DOMContentLoaded', function () {
  const nav = document.querySelector('.navbar');
  if (!nav) return;

  // Force fixed (in case some other CSS tries to change it)
  nav.style.position = 'fixed';
  nav.style.top = '0';
  nav.style.left = '0';
  nav.style.right = '0';
  nav.style.zIndex = '9999';

  // Apply correct body padding so content starts below the fixed navbar
  function setBodyPadding() {
    document.body.style.setProperty('--nav-height', nav.offsetHeight + 'px');
  }
  setBodyPadding();
  window.addEventListener('resize', setBodyPadding);

  // Try to observe the ".hero" (video hero) — this is robust and fires on the very first tiny scroll
  const hero = document.querySelector('.video-background .hero') || document.querySelector('.hero');

  if (hero) {
    const obs = new IntersectionObserver((entries) => {
      const e = entries[0];
      // If hero is NOT fully visible (i.e. we've scrolled even a bit), add class
      if (e.intersectionRatio < 0.99) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    }, { threshold: [0.99] });

    obs.observe(hero);
  } else {
    // Fallback: listen to window scroll (works normally)
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) nav.classList.add('scrolled');
      else nav.classList.remove('scrolled');
    });
  }
});

  


// stat
document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".counter");
    const speed = 200; // lower is faster

    const animateCounters = () => {
      counters.forEach(counter => {
        const updateCount = () => {
          const target = +counter.getAttribute("data-target");
          const count = parseInt(counter.innerText.replace(/[^0-9]/g, "")) || 0;
          const increment = Math.ceil(target / speed);

          if (count < target) {
            counter.innerText = (count + increment).toLocaleString();
            setTimeout(updateCount, 20);
          } else {
            // Format according to original style
            if (counter.innerText.includes("k")) {
              counter.innerText = target + "k";
            } else if (counter.innerText.includes("$")) {
              counter.innerText = "$" + target.toLocaleString();
            } else if (counter.innerText.includes("%")) {
              counter.innerText = target + "%";
            } else {
              counter.innerText = target.toLocaleString();
            }
          }
        };

        updateCount();
      });
    };

    // Trigger animation when stats come into view
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounters();
          observer.disconnect(); // run only once
        }
      });
    });

    observer.observe(document.querySelector(".row.mt-5"));
  });