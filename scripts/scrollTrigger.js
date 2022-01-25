// Javascript doc
/* Intersection observer
https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
Dit jaar: https://www.youtube.com/watch?v=2IbRtjez6ag&t=1s
css guy: https://www.youtube.com/watch?v=T8EYosX4NOo
*/
const observerOptions = {
  root: null,
  threshold: 0,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(entries => {
  // console.log(entries);
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // console.log(entry.target.classList, 'is Intersecting')
      entry.target.classList.add('in-view')
      // observer.unobserve(entry.target)
    // } else if (!entry.isIntersecting) {
    } else if (entry.intersectionRatio < 0.5) {
      // console.log(entry.target.classList, 'Exit screen')
      entry.target.classList.remove('in-view')
    }
  })
}, observerOptions)

window.addEventListener('DOMContentLoaded', (event) => {
  const sections = Array.from(document.getElementsByClassName('animation'));
  for (let section of sections) {
    observer.observe(section)
  }
})

gsap.registerPlugin(ScrollTrigger);
const container = document.querySelectorAll('.container')

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

// Poolvos
ScrollLottie({
  target: ".pv-past",
  path: "https://assets6.lottiefiles.com/packages/lf20_jczbeg3x.json",
  duration: 5,
  speed: "slow",
});

ScrollLottie({
  target: ".pv-present",
  path: "https://assets1.lottiefiles.com/packages/lf20_ftt8jvgt.json",
  duration: 5,
  speed: "slow",
});

ScrollLottie({
  target: ".pv-future",
  path: "https://assets5.lottiefiles.com/packages/lf20_kkvjx6j0.json",
  duration: 5,
  speed: "slow",
});

window.addEventListener('scroll', () => {
  // enable this to see the scroll Y value
// console.log(window.scrollY)
  let cta = document.querySelector('.popup')
  if(window.scrollY >=7200) {
    cta.style.opacity = 1;
  } else {
    cta.style.opacity = 0;
  }
})

 