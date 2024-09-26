document.addEventListener("DOMContentLoaded", function() {
    const profileImage = document.querySelector('#profileImage');
    const savedProfilePic = localStorage.getItem('profilePic');

    if (savedProfilePic) {
        profileImage.src = savedProfilePic;
    }
});