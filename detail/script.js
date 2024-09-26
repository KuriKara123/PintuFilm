const resVar = document.getElementById("res");

const change = () => {
    if(resVar.id == "res") resVar.id += "ponsive";
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

// Add these functions to your existing script.js

const openTrailer = () => {
    document.getElementById('trailerPopup').style.display = 'block';
}

const closeTrailerPopup = () => {
    document.getElementById('trailerPopup').style.display = 'none';
}


document.addEventListener("DOMContentLoaded", function() {
    const profileImage = document.querySelector('#profileImage');
    const savedProfilePic = localStorage.getItem('profilePic');

    if (savedProfilePic) {
        profileImage.src = savedProfilePic;
    }
});