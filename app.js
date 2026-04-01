(function () {
  "use strict";

  var cards = document.querySelectorAll("[data-quote]");
  if (!cards.length || !("IntersectionObserver" in window)) {
    cards.forEach(function (el) {
      el.classList.add("is-visible");
    });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      root: null,
      rootMargin: "0px 0px -10% 0px",
      threshold: 0.08,
    }
  );

  cards.forEach(function (card) {
    observer.observe(card);
  });
})();
