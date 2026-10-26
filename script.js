
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




    // GOALS

let goals = JSON.parse(localStorage.getItem("goals")) || [];

function displayGoal(goalData) {
    const goalText = goalData.text;
    const goal = document.createElement("p");

    goal.textContent = goalText;

    // Display saved completion status
    if (goalData.completed === true) {
        goal.style.textDecoration = "line-through";
    }

    // Complete or uncomplete a goal
    goal.addEventListener("click", function() {
        goalData.completed = !goalData.completed;

        if (goalData.completed) {
            goal.style.textDecoration = "line-through";
        } else {
            goal.style.textDecoration = "none";
        }

        localStorage.setItem("goals", JSON.stringify(goals));
    });

    // Create the Delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", function(event) {
        event.stopPropagation();

        const goalIndex = goals.indexOf(goalData);
        goals.splice(goalIndex, 1);

        localStorage.setItem("goals", JSON.stringify(goals));

        goal.remove();
    });

    goal.appendChild(deleteButton);

    document.getElementById("goal-list").appendChild(goal);
}

// Display previously saved goals
goals.forEach(function(goalData) {
    displayGoal(goalData);
});

// Add a new goal
const addGoalButton = document.getElementById("add-goal");

if (addGoalButton) {
    addGoalButton.addEventListener("click", function() {
        const goalInput = document.getElementById("Goal");
        const goalText = goalInput.value.trim();

        if (goalText === "") {
            alert("Please enter a goal.");
            return;
        }

        const newGoal = {
            text: goalText,
            completed: false
        };

        goals.push(newGoal);

        localStorage.setItem("goals", JSON.stringify(goals));

        displayGoal(newGoal);

        goalInput.value = "";
    });
}





// MILESTONES
let milestones = JSON.parse(localStorage.getItem("milestones")) || [];
function displayMilestone(milestoneData) {
    const milestoneText = milestoneData.text;
    const milestone = document.createElement("p");
    milestone.textContent = milestoneText;
    // Display saved completion status
    if (milestoneData.completed === true) {
        milestone.style.textDecoration = "line-through";
    }
    // Complete or uncomplete a milestone
    milestone.addEventListener("click", function() {
        milestoneData.completed = !milestoneData.completed;
        if (milestoneData.completed) {
            milestone.style.textDecoration = "line-through";
        } else {
            milestone.style.textDecoration = "none";
        }
        localStorage.setItem("milestones", JSON.stringify(milestones));
    });
    // Create the Delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function(event) {
        event.stopPropagation();
        const milestoneIndex = milestones.indexOf(milestoneData);
        milestones.splice(milestoneIndex, 1);
        localStorage.setItem("milestones", JSON.stringify(milestones));
        milestone.remove();
    });
    milestone.appendChild(deleteButton);
    document.getElementById("milestone-list").appendChild(milestone);
}
// Display previously saved milestones
milestones.forEach(function(milestoneData) {
    displayMilestone(milestoneData);
});
// Add a new milestone
const addMilestoneButton = document.getElementById("add-milestone");
if (addMilestoneButton) {
    addMilestoneButton.addEventListener("click", function() {
        const milestoneInput = document.getElementById("Milestones");
        const milestoneText = milestoneInput.value.trim();
        if (milestoneText === "") {
            alert("Please enter a milestone.");
            return;
        }
        const newMilestone = {
            text: milestoneText,
            completed: false
        };
        milestones.push(newMilestone);
        localStorage.setItem("milestones", JSON.stringify(milestones));
        displayMilestone(newMilestone);
        milestoneInput.value = "";
    });
}

