const createAccountButton = document.getElementById("create-account");

createAccountButton.addEventListener("click", function () {

    const username = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    console.log(username);
    console.log(email);
    console.log(password);

});