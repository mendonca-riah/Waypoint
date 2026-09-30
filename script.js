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

    localStorage.setItem("banana", username);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);

    alert("Your account has been created!");

    window.location.href = "index.html";
});
}

const username = localStorage.getItem("banana");

const usernameElement = document.getElementById("user-name");

if (usernameElement) {
    usernameElement.textContent = username;
}




const signInButton = document.getElementById("sign-in");

if (signInButton) {
    signInButton.addEventListener("click", function () {

        const email = document.getElementById("signin-email").value;
        const password = document.getElementById("signin-password").value;

        const savedEmail = localStorage.getItem("userEmail");
        const savedPassword = localStorage.getItem("userPassword");

        if (email === savedEmail && password === savedPassword) {
            alert("Welcome back!");

            window.location.href = "index.html";
        } else {
            alert("Incorrect email or password.");
        }
    });



    const addTaskButton = document.getElementById("add-task");

    if (addTaskButton) {
    console.log(addTaskButton);
    
    addTaskButton.addEventListener("click", function () {
        alert("button clicked");

        const taskInput = document.getElementById("task");
        const taskText = taskInput.value;

        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        const task = document.createElement("p");

        task.textContent = taskText;

        document.getElementById("task-list").appendChild(task);

        taskInput.value = "";
    });
}
}