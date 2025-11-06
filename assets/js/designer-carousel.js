// we get the carousel element which we want to manipulate
const carousel = document.querySelector(".designer-carousel");

// clone the content once for infinite scroll illusion
// we do it just so we dont have to duplicate html elements, this makes it look "more smooth"
carousel.innerHTML += carousel.innerHTML;

// we initiate variable that checks the animation/scrolling how much it scrolled horizontally, pixels
let scrollPosition = 0;
// it works by "ticking", this sets the "tick of pixel movement"
const speed = 1; // pixels per step

// now we use js setInterval functions which creates the animation

setInterval(() => {
  // now we set simply increase the position pixel by our speed pixed using +=
  scrollPosition += speed;
  // then we use scrollLeft to "move the window"
  carousel.scrollLeft = scrollPosition;

  // reset smoothly when reaching halfway
  if (scrollPosition >= carousel.scrollWidth / 2) {
    carousel.scrollLeft = 0; // we move the visible window back to start
    scrollPosition = 0; // and we reset our counter
  }
}, 30); // speed of interval in ms
