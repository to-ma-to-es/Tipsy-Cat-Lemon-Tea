
// initialise Fullpage.js 
new fullpage('#fullpage', {
    //options here
    autoScrolling: false,
    scrollHorizontally: false,
    navigation: false,
    navigationTooltips: ['Section 1', 'Section 2', 'Section 3'],
    showActiveTooltip: false,

    // After Render fnc 
    afterRender: () => {
        sectionOne();
    },

    // On Leave fnc
    onLeave: function(origin, destination, direction){
        // Section 2
        if(destination.index == 1){
            sectionTwo(destination);
        } 
        
        else if(destination.index == 2){
            sectionThree(destination);
        }

        else if(destination.index == 3){
            sectionFour(destination);
        }

        else if(destination.index == 4){
            sectionFive(destination);
        }

        else if(destination.index == 6){
            sectionSix(destination);
        }

        else if(destination.index == 7){
            sectionSeven(destination);  
        }
        
    }
});


/* Typing Animation ========================================== */

// get elements
const type = document.querySelector('.first_text');
const typeAnimation = document.querySelector('.text.first_text');
const openingPage = document.querySelector('.opening_section');

// change text 3 times
const typeLoad = () => {
    setTimeout(() => {
        type.textContent = "Fresh";
    }, 0);
    setTimeout(() => {
        type.textContent = "Tangy";
    }, 4000);
    setTimeout(() => {
        type.textContent = "Tipsy.";
        type.style.color = "#FDB800";
    }, 8000);
};

// run fnc
typeLoad();

// type disappears 
typeAnimation.addEventListener('animationend', () => {
    typeAnimation.style.display = 'none';
});

/* Background lifts out of frame */ 
// define timeline pageTransition
var pageTransition = gsap.timeline({delay:12});

pageTransition.to('.bg', {bottom: '100%', top: '0%', duration: .9, ease: 'power1.out'});

setTimeout(() => {
    openingPage.style.display = 'none';
}, 15000);

/* END (Typing Animation) ====================================== */

/* Section 1 =================================================== */

// Bottle Hover animation 

// get elements 
let hoverArea = document.querySelector('.hover_area');
let heroOrderBtn = document.querySelector('.order_btn_hero');
let heroBottle = document.querySelector('.tipsy_bottle_img');

// add event listener - mouseover 
hoverArea.addEventListener('mouseover', function() {
    gsap.to(heroOrderBtn, { visibility: 'visible', duration: 0.3 });
    gsap.to(heroBottle, { scale: 1.05, opacity: 0.8, duration: 0.3 });
    gsap.to(heroBottle, {scale: 1.05});
  });

// add event listener - mouseout
hoverArea.addEventListener('mouseout', function() {
    gsap.to(heroOrderBtn, { visibility: 'hidden', duration: 0.3 });
    gsap.to(heroBottle, { opacity: 1, duration: 0.3 });
    gsap.to(heroBottle, {scale: 1});
});

// Create section one fnc
function sectionOne(){

    // create gsap timeline - delay after type animation 
    const tl = new TimelineMax({delay: 12.5});
        
    // animate elements
        
        // make mask visible
        tl.set('.mask', {autoAlpha: 1})
        // move mask in from right
        .from('.mask', {
            duration: 1.5, 
            xPercent: -100, 
            ease: Power2.out
        })
        // move img in from right and change scale
        .from('#hero_img', {duration: 1.5, 
            xPercent: 100, 
            scale: 1.3, 
            delay: -1.5,
            ease:Power2.out
        })
        .from('.tipsy_bottle_img', {duration: 1.5,
            scale: 1.3,
            ease: Power2.out,
            opacity: 0
        },'-=1');

        
}

/* END (Section 1) ============================================= */


/* Section 2 =================================================== */

// setting flag to stop animation playing when = true;
let sectionTwoVisited = false;

// create sectionTwo fnc 
function sectionTwo(destination){

    if(!sectionTwoVisited){
    // creating split type elements 
    const splitOne = new SplitType('#split_one');
    const splitTwo = new SplitType('#split_two');
    const splitThree = new SplitType('#split_three');
    const splitFour = new SplitType('#split_four');

    // create gsap timeline
    const tl = new TimelineMax();

    // animate elements
        tl.set('.quote', {autoAlpha: 1}) // To stop animation flicker on load

        .to('.char', {
            y: 0,
            stagger: 0.05,
            delay: 0.1,
            duration: 0.1,
        });

    // get sl animation
    let slAnimation = document.querySelector('.fade_one');
    
    // play sl animation
    slAnimation.play = true;

    sectionTwoVisited = true;  // flag that section two has been visited
    }

    // Nav style changes when active 
    jumptoS2a.classList.add("nav_active");
    jumptoS5a.classList.remove("nav_active");
    jumptoS6a.classList.remove("nav_active");
    jumptoS7a.classList.remove("nav_active");
    bgActive.classList.remove('bg_active');
}

/* END (Section 2) ============================================= */

/* Section 3 =================================================== */

// create section three fnc
function sectionThree(destination){
    console.log('section 3 entered.');
}

/* END (Section 3) ============================================= */

/* Section 4 =================================================== */

// setting flag to stop animation playing when = true;
let sectionFourVisited = false;

// create section four fnc
function sectionFour(destination){
    
    if(!sectionFourVisited){
        // new timeline
        const tl = new TimelineMax({delay: 1});

        // animate elements
        tl.set('.p_mask', {autoAlpha: 1}, "-=3.5")

        .from('.p_mask', {
            duration: 1.5,
            yPercent: 100,
            ease: Power2.out,
            stagger: 1.4
        }, "=-2.9")

        .from('.info', {
            duration: 1.5,
            yPercent: -100,
            ease: Power2.out,
            stagger: 1.4
        }, "=-2.9");
        
        sectionFourVisited = true;  // flag that section two has been visited
    }
    /* SVG Morph animation using Anime.js ============== */

    // get svg paths
    const squarePath = "M161.093 159.907L0.907652 159.907L0.907657 4.67626e-06L161.093 1.18677e-05L161.093 159.907Z";
    const rectanglePath = "M161.093 28.9071L0.907622 28.907L0.907447 0.499878L161.093 0.5L161.093 28.9071Z";

    // create timeline
    const svgTimeline = anime.timeline({
        duration: 1000,
        easing: "easeInOutCubic"
    });

    // change path
    svgTimeline
        .add({
        targets:".rectangle",
        d: [{value: squarePath}],
        delay: function(el, i, l){ return i * 1000}
        });


    /* END (SVG Morph animation using Anime.js) ============== */

    // change nav btn class
    jumptoS5a.classList.remove("nav_active");
    jumptoS2a.classList.add("nav_active");
    bgActive.classList.remove('bg_active');
}

/* END (Section 4) ============================================= */

/* Section 5 =================================================== */

// create section five fnc
function sectionFive(destination){
    // change nav btn class
    jumptoS2a.classList.remove("nav_active");
    jumptoS5a.classList.add("nav_active");
    jumptoS6a.classList.remove("nav_active");
    jumptoS7a.classList.remove("nav_active");
    bgActive.classList.remove('bg_active');
}

// create element
let activeDiv =null;

// handleClick fnc 
function handleClick(divId, newContent, imageUrl, headingText, paragraphText) {
    if (activeDiv) {
        activeDiv.innerHTML = activeDiv.dataset.originalContent;
    }

    activeDiv = document.getElementById(divId);
    activeDiv.dataset.originalContent = activeDiv.innerHTML;

    // Create a new element for the image
    const imageElement = document.createElement('img');
    imageElement.src = imageUrl;

    // Create a new element for the background shape
    const shapeElement = document.createElement('div');
    shapeElement.classList.add('shape');

    // create new text div 
    const textContent = document.createElement('div');
    textContent.classList.add('text_content');

    // add some p text 
    const paragraphElement = document.createElement('p');
    paragraphElement.textContent = paragraphText;

    // add some h text 
    const headingElement = document.createElement('h4');
    headingElement.textContent = headingText;

    // add to text content
    textContent.appendChild(headingElement);
    textContent.appendChild(paragraphElement);

    // Setting the new content and add the image
    activeDiv.innerHTML = newContent;
    activeDiv.appendChild(imageElement);
    activeDiv.appendChild(shapeElement);
    activeDiv.appendChild(textContent);

    // gsap animations
    var ingtl = gsap.timeline();
    ingtl.from('.shape', {width: 20, duration: 0.7});
    ingtl.from('.section_five p', {autoAlpha: 0, duration: 1, xPercent: -4}, 0.3);
    ingtl.from('.section_five h4', {autoAlpha: 0, duration: 1, xPercent:-2}, 0.3);
}

// Add event listener
document.getElementById('div1').addEventListener('click', function() {
    handleClick('div1', '', './media/lemons.jpg', 'Lemon', 'Lemons add a bright, tangy kick to our Tipsy Lemon Tea. Their fresh scent and tartness pair well with the coolness of the tea, making a delicious and refreshing combo.');
});

// Add event listener
document.getElementById('div2').addEventListener('click', function() {
    handleClick('div2', '', './media/oolong_tea.jpg', 'Oolong Tea', 'Masterfully semi-oxidized, our Oolong imparts depth to our Tipsy Lemon Tea. Its floral-earthy blend harmonizes with zesty lemon, creating an invigorating infusion.');
});

// Add event listener
document.getElementById('div3').addEventListener('click', function() {
    handleClick('div3', '', './media/grapefruits.jpg', 'Grapefruit', 'Grapefruit lends a tangy brightness to our Tipsy Lemon Tea. Its zesty undertones complement the refreshing notes of lemon, creating a harmonious blend of citrus flavors.');
});

// Add event listener
document.getElementById('div4').addEventListener('click', function() {
    handleClick('div4', '', './media/alcohol.jpg', 'Alcohol', 'The spirit in Tipsy Lemon Tea imparts a lively warmth, enhancing its flavor profile. It harmonizes effortlessly with the zesty lemon and nuanced oolong tea.');
});

/* END (Section 5) ============================================= */

/* Section 6 =================================================== */

// setting flag to stop animation playing when = true;
let sectionSixVisited = false;

// Create section six fnc 
function sectionSix(destination){
   
    if(!sectionSixVisited){
    // create gsap timeline
    const tl = new TimelineMax();

    // animate elements 
    tl.set('.content', {autoAlpha: 1}) // set text to visible to stop animation flicker
    .from('.about_heading', {
        opacity: 0,
        xPercent: -20,
        duration: 1,
        ease: Power2.out
    })
    
    .from('#about_container_one', {
        opacity: 0,
        xPercent: -20,
        duration: 1,
        ease: Power2.out
    })
    .from('#about_container_two', {
        opacity: 0,
        xPercent: -20,
        duration: 1,
        ease: Power2.out
    })

    .from('.box', {
        transformOrigin: "center center",
        rotate: -180,
        duration: 0.8,
        stagger: 1,
        delay: 2
    });
    sectionSixVisited = true;
    }

    // change nav class
    jumptoS2a.classList.remove("nav_active");
    jumptoS5a.classList.remove("nav_active");
    jumptoS6a.classList.add("nav_active");
    jumptoS7a.classList.remove("nav_active");
    bgActive.classList.add('bg_active');

}
/* END (Section 6) ============================================= */

/* Section 7 =================================================== */

// setting flag to stop animation playing when = true;
let sectionSevenVisited = false;

// Create section seven fnc 
function sectionSeven(destination){
    
    if(!sectionSevenVisited){
    // create timeline
    const ordertl = new TimelineMax();

        // animate elements 
        ordertl.set('.order_content_container', {autoAlpha: 1})

        .from('.order_tipsy_bottle', {
            autoAlpha: 0,
            duration: 1.5,
            scale: 1.1,
            ease: Power2.out,}, 0)
        
        .from(".order_written_content_container", {
            duration: 1.5,
            xPercent: -10,
            opacity: 0
        }, 0.4);

    // get sl animation
    let slAnimation = document.querySelector('.fade_two');

    // play sl animation
    slAnimation.play = true;
    
    sectionSevenVisited = true;
    }

    // Change nav class
    jumptoS2a.classList.remove("nav_active");
    jumptoS5a.classList.remove("nav_active");
    jumptoS6a.classList.remove("nav_active");
    jumptoS7a.classList.add("nav_active");
    bgActive.classList.add('bg_active');
}
/* END (Section 7) ============================================= */

/* Navigation Buttons  ========================================== */

// get elements
let jumptoS2a = document.querySelector('#what_is_tipsy_lemon_tea');
let jumptoS5a = document.querySelector('#ingredients');
let jumptoS6a = document.querySelector('#about_us');
let jumptoS7a = document.querySelector('#order_now');


// Add event listener
jumptoS2a.addEventListener('click', () => {
    // move to section
    fullpage_api.moveTo(2);
});

// Add event listener
jumptoS5a.addEventListener('click', () => {
    // move to section
    fullpage_api.moveTo(5);
});

// Add event listener
jumptoS6a.addEventListener('click', () => {
    // move to section
    fullpage_api.moveTo(7);
});

// Add event listener
jumptoS7a.addEventListener('click', () => {
    // move to section
    fullpage_api.moveTo(8);
});

// for bg change 
let bgActive = document.querySelector(".navigation");

// Media screens menu 

// get elements 
const hamburgerBtn = document.querySelector('.hamburger-btn');
const menu = document.querySelector('.menu');

// Show hamburger btn 
hamburgerBtn.addEventListener('click', () => {
  menu.classList.toggle('show');
});

/* END (Navigation Buttons)  ===================================== */



/* Scroll Trigger Animations ================================= */

// must come after initialising fullpage to work 
gsap.registerPlugin(ScrollTrigger);

// Keywords scrub animation 
gsap.to(".keywords_container", {
    scrollTrigger: {
        trigger: ".keywords_container",
        start: "top center",
        markers: false, // for checking
        scrub: 1,
        toggleActions: "restart pause reverse pause"
    },
    xPercent: -10,
});

//Made in HK scrub animation 
gsap.to(".keywords_container_2", {
    scrollTrigger: {
        trigger: ".keywords_container_2",
        start: "top bottom",
        markers: false, // for checking
        scrub: 1,
        toggleActions: "restart pause reverse pause"
    },
    xPercent: -10,
});

/* END (Scroll Trigger Animations) ================================= */

/* Swiper Img Gallery ==============  */
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }, 
    
    autoplay: {
        delay: 8000,
      },
    /* And if I need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    }, */
  });
/* END (Swiper Img Gallery) ==============  */