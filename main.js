
// Set the initial opacity of the element with class 'hide' to 0
gsap.set( '.hide', { 
  opacity: 0, 
});

// Animate the element with class 'right' to move to the right of the screen 
gsap.to( '.right', { 
  x: '100px', 
  duration: 2 
});

// Animate the element with class 'right' to move FROM the right of the screen 
gsap.from( '.from-right', { 
  x: '100px', 
  duration: 2 
});


//////////// Hamburger Menu ///////////////

// First we define our js variables 
const burgerButton = document.querySelector('.burger-button')
const burgerMenu = document.querySelector('.burger-menu')
// then we start righting our new function
function toggleBurgerMenu() {
// log the click just to check its working. feel free to remove after you are done
  console.log('click')
  // here we check to see if the burger button has the class of active
  if (burgerButton.classList.contains("active")){
  // more consle.log for testing
    console.log('has active')
    // remove the class of active
    burgerButton.classList.remove("active")
    // gsap to close the email
    gsap.to(burgerMenu, {
    // width to shrink it
        height: 0,
     //padding to minimilistic so it wont overflow
        padding: '0px 0',
    })
} else {
	// console for more testing
    console.log('no has active')
    // re-adds the class for tracking
    burgerButton.classList.add("active")
    // opens up the burger menu and does the opsite of the closeks
    gsap.to(burgerMenu, {
        height: "auto",
        padding: '2px 1.5rem'
    })
  }
}

// finally link it to the click action of the burger button
burgerButton.addEventListener('click', toggleBurgerMenu)


//////////// Scrolling ///////////////

//  first we are finding all of the elements that have a class of scroll-in-from-bottom
const headings = document.querySelectorAll(".scroll-in-from-bottom-with-fade")


// for each of them we are going to attach a gsap animation ( like a jekyll for loop just in js :D )
headings.forEach(object => {

// we start with a gsap timeline
    let tl = gsap.timeline({
    // here's where we start attching the animation to the scroll
      scrollTrigger: {
      	// this is what is triggering the start of the animation
          trigger: object,
        	// this one takes in to bits of info. the first is the part of the trigger element thats causing the trigger to start and the second one is where on the screen. both of them can be either top, center, bottom or a percentage (% are from the top of the container( as in screen or trigger element) )   
          start: "top bottom",
			// same as start but the end point of the animation          
          end: "top center",
          // now this is the most important line of code its what turns the triggers from a start point in to locking it to the scroll
          scrub: true,
          // last but not least this helps us to visualize the script
          markers: false,
      }
    }).from(object,{
        y: 300,
        opacity:0
    })
})