const submitForm = (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const month = document.getElementById("month").value;
    const day = document.getElementById("day").value;
    const year = document.getElementById("year").value;
    const gender = document.getElementById("gender").value;
    const agree = document.getElementById("agree").checked;

    if (name.length < 2) {
        alert("Name must be at least 2 characters");
    } else if (password !== confirmPassword || password.length < 8) {
        alert("Password must be at least 8 characters and need to be the same as confirm password");
    } else if (month === "month" || day === "" || year === "") {
        alert("Please fill out your date of birth");
    } else if (gender === "gender") {
        alert("Please select a gender");
    } else if (!agree) {
        alert("Please agree with our terms and condition by checking the box");
    } else {
        // Store user data in local storage
        const user = {
            name: name,
            password: password,
            dob: { month: month, day: day, year: year },
            gender: gender
        };
        localStorage.setItem("user", JSON.stringify(user));
        alert("Account created successfully!");
        window.location.href = "../login/index.html";
    }
};
