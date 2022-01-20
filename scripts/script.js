// Javascript doc
// const buttons = document.querySelectorAll("[data-carousel-button]");

// buttons.forEach((button) => {
//   button.addEventListener("click", () => {
//     const offset = button.dataset.carouselButton === "next" ? 1 : -1;
//     const slides = button
//       .closest("[data-carousel]")
//       .querySelector("[data-slides]");

//     const activeSlide = slides.querySelector("[data-active]")
//     let newIndex = [...slides.children].indexOf(activeSlide) + offset;
//     if(newIndex < 0) newIndex = slides.children.length - 1;
//     if(newIndex >= slides.children.length) newIndex = 0;

//     slides.children[newIndex].dataset.active = true
//     delete activeSlide.dataset.active
//   });
// });

// gsap.registerPlugin(ScrollTrigger);

// let divs = gsap.utils.toArray(".animation");

// gsap.to(divs, {
//   xPercent: -100 * (divs.length - 1),
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".container",
//     pin: true,
//     scrub: 1,
//     snap: 1 / (divs.length - 1),
//     // base vertical scrolling on how wide the container is so it feels more natural.
//     start: "50% 50%",
//     end: "+=3500",
//   }
// });

ScrollLottie({
  target: "#animationWindow",
  path: "https://assets4.lottiefiles.com/packages/lf20_lj5jiuey.json",
  duration: 5,
  speed: "slow",
});


ScrollLottie({
  target: "#animationWindow2",
  path: "https://assets7.lottiefiles.com/packages/lf20_hojnmvog.json",
  duration: 5,
  speed: "slow",
});

ScrollLottie({
  target: "#animationWindow3",
  path: "https://assets10.lottiefiles.com/packages/lf20_98vq8oa0.json",
  duration: 5,
  speed: "slow",
});
