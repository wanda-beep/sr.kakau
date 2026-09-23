gsap.registerPlugin(ScrollTrigger);

// HERO reveal
gsap.from(".reveal", {
  y: 40,
  opacity: 0,
  duration: 1.2,
  ease: "power4.out",
  stagger: 0.2
});

// Fade up sections
gsap.utils.toArray(".fade-up").forEach((el, i) => {
  gsap.from(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 85%"
    },
    y: 40,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    delay: el.classList.contains("delay") ? 0.2 : 0
  });
});

// Gallery horizontal scroll feel
gsap.to(".gallery-track", {
  x: "-30%",
  scrollTrigger: {
    trigger: ".gallery",
    start: "top bottom",
    end: "bottom top",
    scrub: true
  }
});

<script src="main.js"></script>
