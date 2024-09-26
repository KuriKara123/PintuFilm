document.addEventListener("DOMContentLoaded", function() {
    const menu = document.querySelector('#menu');
    const navigate = document.querySelector('#navigate');
    const profilePicInput = document.querySelector('#profilePic');
    const profileImage = document.querySelector('#profileImage');
    const profilePreview = document.querySelector('#profilePreview');
    const changePictureLink = document.querySelector('#changePictureLink');
    const changeBackgroundLink = document.querySelector('#changeBackgroundLink');
    const backgroundInput = document.querySelector('#backgroundInput');
    const profileBox = document.querySelector('#profileBox');

    // Load saved profile picture and background from local storage
    const savedProfilePic = localStorage.getItem('profilePic');
    const savedBackground = localStorage.getItem('profileBackground');
    
    if (savedProfilePic) {
        profileImage.src = savedProfilePic;
        profilePreview.src = savedProfilePic;
    }

    if (savedBackground) {
        profileBox.style.backgroundImage = `url(${savedBackground})`;
    }

    if (menu) {
        menu.addEventListener('click', function() {
            if (navigate.style.display === "block") {
                navigate.style.display = "none";
            } else {
                navigate.style.display = "block";
            }
        });
    }

    if (profilePicInput) {
        profilePicInput.addEventListener('change', function(event) {
            const profilePicFile = event.target.files[0];
            console.log("New file selected:", profilePicFile);

            if (profilePicFile) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    console.log("FileReader result:", e.target.result);
                    profileImage.src = e.target.result;
                    profilePreview.src = e.target.result;
                    localStorage.setItem('profilePic', e.target.result);
                };
                reader.readAsDataURL(profilePicFile);
            }
        });
    }

    if (changePictureLink && profilePicInput) {
        changePictureLink.addEventListener('click', function(event) {
            event.preventDefault();
            profilePicInput.click();
        });
    }

    if (changeBackgroundLink && backgroundInput) {
        changeBackgroundLink.addEventListener('click', function(event) {
            event.preventDefault();
            backgroundInput.click();
        });

        backgroundInput.addEventListener('change', function(event) {
            const backgroundFile = event.target.files[0];
            console.log("New background file selected:", backgroundFile);

            if (backgroundFile) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    console.log("Background FileReader result:", e.target.result);
                    profileBox.style.backgroundImage = `url(${e.target.result})`;
                    localStorage.setItem('profileBackground', e.target.result);
                };
                reader.readAsDataURL(backgroundFile);
            }
        });
    }

    resize(); // Call resize function on initial load
});

function resize() {
    const navigate = document.querySelector('#navigate');
    if (window.innerWidth > 768) {
        navigate.style.display = "flex";
    } else {
        navigate.style.display = "none";
    }
}