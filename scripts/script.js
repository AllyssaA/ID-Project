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
//     end: "+=200",
//   }
// });
const observerOptions = {
  root: null,
  threshold: 0,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(entries => {
  console.log(entries);
  // console.group('intersection')
  // entries.forEach(entry => {
  //   if (entry.intersectionRatio ===1 ) {
  //     console.log(entry.target.classList, 'entered')
  //   } else if (!entry.isIntersecting){
  //     console.log(entry.target.classList, 'left the chat')
  //   } else if (entry.intersectionRatio > 0.5) {
  //     console.log(entry.target.classList, 'is leaving')
  //   } else if (entry.intersectionRatio < 0.5) {
  //     console.log(entry.target.classList, 'is entering')
  //   }
  // })
  // console.groupEnd('intersection')
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log(entry.target.classList, 'is Intersecting')
      entry.target.classList.add('in-view')
      // observer.unobserve(entry.target)
    // } else if (!entry.isIntersecting) {
    } else if (entry.intersectionRatio < 0.5) {
      console.log(entry.target.classList, 'Exit screen')
      entry.target.classList.remove('in-view')
    }
  })
}, observerOptions)
// const animations = document.querySelectorAll('.animation')

// animations.forEach(ani => observer.observe(ani))

window.addEventListener('DOMContentLoaded', (event) => {
  const sections = Array.from(document.getElementsByClassName('animation'));
  for (let section of sections) {
    observer.observe(section)
  }
})
// observer.observe(document.querySelector('.animation'))

// let an = document.querySelectorAll('.animation')
// console.log(an)
// let observer = new IntersectionObserver(
//   (entries, observer) => {
//     entries.forEach(entry => {
//       if (entry.intersectionRatio !=1) {
        
//       } else {
        
//       }
//     });
//   },
//   {rootMargin: "0px 0px -200px 0px"}
// )

gsap.registerPlugin(ScrollTrigger);
const container = document.querySelectorAll('.container')
console.log(container)

ScrollLottie({
  target: ".past",
  path: "https://assets4.lottiefiles.com/packages/lf20_lj5jiuey.json",
  duration: 5,
  speed: "slow",
});


ScrollLottie({
  target: ".present",
  path: "https://assets7.lottiefiles.com/packages/lf20_hojnmvog.json",
  duration: 5,
  speed: "slow",
});

ScrollLottie({
  target: ".future",
  path: "https://assets10.lottiefiles.com/packages/lf20_98vq8oa0.json",
  duration: 5,
  speed: "slow",
});

// Sneeuwluipaard
ScrollLottie({
  target: ".sl-past",
  path: "https://assets6.lottiefiles.com/packages/lf20_56or1nwc.json",
  duration: 5,
  speed: "slow",
});

ScrollLottie({
  target: ".sl-present",
  path: "https://assets6.lottiefiles.com/packages/lf20_ors8dt3j.json",
  duration: 5,
  speed: "slow",
});

ScrollLottie({
  target: ".sl-future",
  path: "https://assets9.lottiefiles.com/packages/lf20_f9qscbvz.json",
  duration: 5,
  speed: "slow",
});
