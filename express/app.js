// Scroll tracking
window.addEventListener('scroll',e =>{
  document.body.style.cssText = `--scrollTop: ${this.scrollY}px`
})

//Slider binding to accordion topics in "Art Videos" section
function toolSliderSearch(button) {
  var myCarousel = $('#toolCarousel');
  console.log(myCarousel);
  // Check the innerText of the passed button and move to the appropriate slide
  if (button.innerText === "Photoshop") {
    myCarousel.carousel(0); // Move to the second slide
  } else if (button.innerText === "Premiere Pro") {
    myCarousel.carousel(1); // Move to the second slide
  } else {
    myCarousel.carousel(2); // Move to the third slide
  }
}

//Mouse move tracking for "Tools" section
document.addEventListener('mousemove', e =>{
  Object.assign(document.documentElement,{
    style:`
    --move-x: ${(e.clientX - window.innerWidth / 2) * -0.04}deg;
    --move-y: ${(e.clientY - window.innerWidth / 2) * -0.04}deg;
    `
  })
})
