const createAccountButton = document.getElementById("create-account");

if (createAccountButton) {
createAccountButton.addEventListener("click", function () {

    const username = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (username === "" || email === "" || password === "") {
        alert("Please fill in all the fields.");
        return;
    }

    localStorage.setItem("userName", username);

    alert("Your account has been created!");

    window.location.href = "index.html";
});
}

const userName = localStorage.getItem("userName");

const userNameElement = document.getElementById("user-name");

if (userNameElement) {
    userNameElement.textContent = userName;
}