
gsap.to(".bien", {y: -50, opacity:0.7, duration: 1.5 ,ease: "expo"});

gsap.to(".sur", {y: -50, opacity:1, duration: 1.5 ,ease: "expo", delay:1});

gsap.to(".but-acc", { opacity:0.5, duration: 1.5 ,ease: "expo", delay:3});



gsap.registerPlugin(ScrollTrigger);

gsap.from(".box0", {
    scrollTrigger: {
        trigger: ".box0",
        start :"bottom 80%" },// start the animation when ".box" enters the viewport (once)
    y: 100,
    ease:"circ",
    opacity:0
  });

  gsap.from(".box1", {
    scrollTrigger: {
        trigger: ".box1",
        start :"bottom 80%" },  // start the animation when ".box" enters the viewport (once)
    y: 100,
    ease:"circ",
    opacity:0
  });

  gsap.from(".box2", {
    scrollTrigger: {
        trigger: ".box2",
        start :"bottom 80%" }, // start the animation when ".box" enters the viewport (once)
    y: 100,
    ease:"circ",
    opacity:0
  });

  gsap.from(".box3", {
    scrollTrigger: {
        trigger: ".box3",
        start :"bottom 80%" }, // start the animation when ".box" enters the viewport (once)
    y: 100,
    ease:"circ",
    opacity:0
  });

  gsap.from(".box4", {
    scrollTrigger: {
        trigger: ".box4",
        start :"bottom 80%" }, // start the animation when ".box" enters the viewport (once)
    y: 100,
    ease:"circ",
    opacity:0
  });