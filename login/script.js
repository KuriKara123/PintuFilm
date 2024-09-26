

const submitLoginForm = (event) => {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
        alert("No account found. Please sign up.");
    } else if (username !== storedUser.name || password !== storedUser.password) {
        alert("Incorrect username or password");
    } else {
        alert("Login successful!");
        window.location.href = "../movie/index.html"; // Redirect to movie page
    }
};
