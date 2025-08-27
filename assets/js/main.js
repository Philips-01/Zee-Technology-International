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