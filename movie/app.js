const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  const itemNumber = movieLists[i].querySelectorAll("img").length;
  let clickCounter = 0;
  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 270);
    const maxClicks = itemNumber - 4;
    clickCounter++;

    if (clickCounter < maxClicks) {
      const currentTransform = getComputedStyle(movieLists[i]).transform;
      let currentTranslateX = 0;
      if (currentTransform !== 'none') {
        currentTranslateX = parseFloat(currentTransform.split(',')[4]);
      }
      movieLists[i].style.transform = `translateX(${currentTranslateX - 300}px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });

  console.log(Math.floor(window.innerWidth / 270));
});

document.addEventListener("DOMContentLoaded", function() {
  const profileImage = document.querySelector('#profileImage');
  const savedProfilePic = localStorage.getItem('profilePic');

  if (savedProfilePic) {
      profileImage.src = savedProfilePic;
  }
});

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle"
);

ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
});
