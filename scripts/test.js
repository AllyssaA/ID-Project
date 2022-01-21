console.log("hallo ijsberg")

gsap.registerPlugin(ScrollTrigger)
let container = document.getElementById("cont")

gsap.to(container, {
  x: () => -(container.scrollWidth - document.documentElement.clientWidth) + "px",
  ease: "none",
  scrollTrigger: {
    trigger: container,
    invalidateOnRefresh: true,
    pin: true,
    scrub: 1,
    markers: {startColor: 'green'},
    end: () => "+=" + container.offsetWidth
  }
})

ScrollLottie({
  target: ".beforebefore",
  path: "https://assets4.lottiefiles.com/packages/lf20_lj5jiuey.json",
  duration: 10,
  speed: "medium"
})

ScrollLottie({
  target: ".currentcurrent",
  path: "https://assets7.lottiefiles.com/packages/lf20_hojnmvog.json",
  duration: 10,
  speed: "medium"
})

ScrollLottie({
  target: ".afterafter",
  path: "https://assets4.lottiefiles.com/packages/lf20_98vq8oa0.json",
  duration: 10,
  speed: "medium"
})