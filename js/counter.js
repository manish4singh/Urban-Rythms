const counters = document.querySelectorAll(".count");
let counted = false;

function animateCount() {
  counters.forEach((counter) => {
    const target = +counter.getAttribute("data-target");
    const speed = 200;

    const update = () => {
      let current = +counter.innerText.replace(/\D/g, "");
      const increment = Math.ceil(target / speed);

      if (current < target) {
        counter.innerText = current + increment + "+";
        setTimeout(update, 15);
      } else {
        if (target >= 1000) {
          counter.innerText = target / 1000 + "K+";
        } else {
          counter.innerText = target + "+";
        }
      }
    };

    update();
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !counted) {
        animateCount();
        counted = true;
        observer.disconnect();
      }
    });
  },
  { threshold: 0.5 }
);

observer.observe(document.getElementById("stats"));
