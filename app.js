

gsap.to(".bien", {y: -50, opacity:0.7, duration: 1.5 ,ease: "expo"});

gsap.to(".sur", {y: -50, opacity:1, duration: 1.5 ,ease: "expo", delay:1});

gsap.to(".but-acc", { opacity:0.5, duration: 1.5 ,ease: "expo", delay:3});


gsap.to(".ddown", {y: 20, opacity:0.7, duration: 0.7 ,ease: "expo", delay:3, repeat:-1});


/*___________________________*/

gsap.registerPlugin(ScrollTrigger);

gsap.from(".box0", {
    scrollTrigger: {
        trigger: ".box0",
        start :"bottom 90%" },// start the animation when ".box" enters the viewport (once)
    y: 100,
    ease:"circ",
    opacity:0
  });

  gsap.from(".box1", {
    scrollTrigger: {
        trigger: ".box1",
        start :"bottom 90%" },  // start the animation when ".box" enters the viewport (once)
    y: 100,
    ease:"circ",
    opacity:0
  });

  gsap.from(".box2", {
    scrollTrigger: {
        trigger: ".box2",
        start :"bottom 90%" }, // start the animation when ".box" enters the viewport (once)
    y: 100,
    ease:"circ",
    opacity:0
  });

  gsap.from(".box3", {
    scrollTrigger: {
        trigger: ".box3",
        start :"bottom 90%" }, // start the animation when ".box" enters the viewport (once)
    y: 100,
    ease:"circ",
    opacity:0
  });

  gsap.from(".box4", {
    scrollTrigger: {
        trigger: ".box4",
        start :"bottom 90%" }, // start the animation when ".box" enters the viewport (once)
    y: 100,
    ease:"circ",
    opacity:0
  });
  
  gsap.from(".resume", {
    scrollTrigger: {
        trigger: ".resume",
        start :"bottom 90%" }, // start the animation when ".box" enters the viewport (once)
    y: 100,
    ease:"circ",
    opacity:0
  });

  
  gsap.from(".aboutme", {
    scrollTrigger: {
        trigger: ".aboutme",
        start :"bottom 90%" }, // start the animation when ".box" enters the viewport (once)
    y: 100,
    ease:"circ",
    opacity:0
  });

/*________________________*/

  //Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}