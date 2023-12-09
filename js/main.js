
// import { closePage, openPage } from './lightbox.js';


(() => {


  //hamburger menu
  
  const hamButton = document.querySelector('#button');
  const burgerCon = document.querySelector('#burger-con');
  
  function hamburgerMenu() {
    burgerCon.classList.toggle('slide-toggle');
    hamButton.classList.toggle('expanded');
  };


  hamButton.addEventListener('click', hamburgerMenu, false);

  //gallery dynamic animation

  const galleryImages = document.querySelectorAll('.gallery-image');
  galleryImages.forEach(image => {
    image.addEventListener('mouseover', () => {
      image.classList.toggle('scale-image');
    })
    image.addEventListener('mouseout', () => {
    image.classList.remove('scale-image');
  });
  });


  //about me page - greensock animation
  
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollToPlugin);

    const navLinks = document.querySelectorAll("#main-header nav ul li a");

    function scrollLink(e) {    
            e.preventDefault(); 
            console.log(e.currentTarget.hash);
            let selectedLink = e.currentTarget.hash;
            gsap.to(window, {duration: 1, scrollTo:{y:`${selectedLink}`, offsetY:100 }});
    }

    navLinks.forEach((link) => {
        link.addEventListener("click", scrollLink);
    });

    gsap.to(".self-image",3,
      {scale: 0.5,
      scrollTrigger: {
			trigger: ".self-image",
            toggleActions: "restart pause reverse none",
            markers: true,
            start: "top center",
            end: "bottom center",
            scrub: true
		}, 
      x: "20%", ease: Bounce.easeOut
		});
 

  //thanks page lightbox 
  const thanksBtn = document.querySelector('#close-btn');
  const openBtn = document.querySelector('#message-btn');
  const lightbox = document.querySelector('#thanks-light-box');


  function closePage() {
    lightbox.style.display = 'none';
  }

  function openPage() {
      lightbox.style.display = 'block';
    }
  openBtn.addEventListener('click', openPage);
  thanksBtn.addEventListener('click', closePage);
    
  
})();