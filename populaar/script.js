var TrandingSlider = new Swiper('.tranding-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  document.addEventListener("DOMContentLoaded", function() {
    const profileImage = document.querySelector('#profileImage');
    const savedProfilePic = localStorage.getItem('profilePic');
  
    if (savedProfilePic) {
        profileImage.src = savedProfilePic;
    }
  });

  const resVar = document.getElementById("res");

const change = () => {
    if(resVar.id === "res") resVar.id += "ponsive";
    else resVar.id = "res";
}

const resize = () => {
    if(window.innerWidth > 768) resVar.id = "res";
}

const clickMovie = (event) => {
    document.getElementById("oneDiv").style.display = "none";
    document.getElementById("twoDiv").style.display = "none";
    document.getElementById("threeDiv").style.display = "none";

    document.getElementById(event.id + "Div").style.display = "block";
}

const closePopUp = (event) => {
    document.getElementById(event.id + "Div").style.display = "none";
}

var naLink = document.getElementById("n-a");
var saLink = document.getElementById("s-a");
var eurLink = document.getElementById("eur");
var afrLink = document.getElementById("afr");
var asiLink = document.getElementById("asi");
var ausLink = document.getElementById("aus");
var naAbout = document.getElementById("north-america");
var saAbout = document.getElementById("south-america");
var eurAbout = document.getElementById("europe");
var afrAbout = document.getElementById("africa");
var asiAbout = document.getElementById("asia");
var ausAbout = document.getElementById("australia");

var link = [naLink, saLink, eurLink, afrLink, asiLink, ausLink];

var about = [naAbout, saAbout, eurAbout, afrAbout, asiAbout, ausAbout];

document.addEventListener("DOMContentLoaded", function() {
    const profileImage = document.querySelector('#profileImage');
    const savedProfilePic = localStorage.getItem('profilePic');

    if (savedProfilePic) {
        profileImage.src = savedProfilePic;
    }
});


link[0].addEventListener("mouseover", (e) => {
    about[0].style.display = "block";
});
link[0].addEventListener("mouseleave", (e) => {
    about[0].style.display = "none";
});
link[1].addEventListener("mouseover", (e) => {
    about[1].style.display = "block";
});
link[1].addEventListener("mouseleave", (e) => {
    about[1].style.display = "none";
});
link[2].addEventListener("mouseover", (e) => {
    about[2].style.display = "block";
});
link[2].addEventListener("mouseleave", (e) => {
    about[2].style.display = "none";
});
link[3].addEventListener("mouseover", (e) => {
    about[3].style.display = "block";
});
link[3].addEventListener("mouseleave", (e) => {
    about[3].style.display = "none";
});
link[4].addEventListener("mouseover", (e) => {
    about[4].style.display = "block";
});
link[4].addEventListener("mouseleave", (e) => {
    about[4].style.display = "none";
});
link[5].addEventListener("mouseover", (e) => {
    about[5].style.display = "block";
});
link[5].addEventListener("mouseleave", (e) => {
    about[5].style.display = "none";
});

let isGlobeMoving = true;

const toggleGlobeMovement = () => {
    const globe = document.querySelector('.earth');
    if (isGlobeMoving) {
        globe.style.animationPlayState = 'paused';
    } else {
        globe.style.animationPlayState = 'running';
    }
    isGlobeMoving = !isGlobeMoving;
}

document.querySelector('.earth').addEventListener('click', toggleGlobeMovement);