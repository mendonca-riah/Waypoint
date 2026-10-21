
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
}




    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    function displayTask(taskData) {
        const taskText = taskData.text;
        const task = document.createElement("p");

        task.textContent = taskText;

        // Display the saved completion status
        if (taskData.completed === true) {
        task.style.textDecoration = "line-through";
        }

        // Complete or uncomplete a task
        task.addEventListener("click", function() {
            taskData.completed = !taskData.completed;

            if (taskData.completed) {
                task.style.textDecoration = "line-through";
            } else {
                task.style.textDecoration = "none";
            }

            localStorage.setItem("tasks", JSON.stringify(tasks));
        });

        // Create the Delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";

        deleteButton.addEventListener("click", function(event) {
            event.stopPropagation();

            const taskIndex = tasks.indexOf(taskData);
            tasks.splice(taskIndex, 1);

            localStorage.setItem("tasks", JSON.stringify(tasks));

            task.remove();
        });

        task.appendChild(deleteButton);

        document.getElementById("task-list").appendChild(task);
    }

    // Display previously saved tasks
    tasks.forEach(function(taskData) {
        displayTask(taskData);
    });

    // Add a new task
    const addTaskButton = document.getElementById("add-task");

    if (addTaskButton) {
        addTaskButton.addEventListener("click", function() {
            const taskInput = document.getElementById("task");
            const taskText = taskInput.value.trim();

            if (taskText === "") {
                alert("Please enter a task.");
                return;
            }

            const newTask = {
                text: taskText,
                completed: false
            };

            tasks.push(newTask);
            localStorage.setItem("tasks", JSON.stringify(tasks));
            displayTask(newTask);
            taskInput.value = "";
        });
    }


