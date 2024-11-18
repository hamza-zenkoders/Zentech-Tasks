const fs = require("fs");
const readlineSync = require("readline-sync");

const filePath = './tasks.json'
const tasks = loadTasks();

function menu() {
  console.log("\nTo-Do App");
  console.log("1. Add Task");
  console.log("2. View Tasks");
  console.log("3. Mark as Completed");
  console.log("4. Delete Task");
  console.log("5. Exit");
  const choice = readlineSync.question("Enter your choice : ");

  switch (choice) {
    case "1":
      addTask();
      break;
    case "2":
      viewTasks();
      break;
    case "3":
      markCompleted();
      break;
    case "4":
      deleteTask();
      break;
    case "5":
        saveTasks();
      console.log("\nGoodbye!");
      process.exit(0);
    default:
      console.log("Invalid Input!");
  }
}

function saveTasks() {
    try {
        fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
    } catch (error) {
        console.log(error)
    }
}

function loadTasks() {
    try {
        if (fs.existsSync(filePath)) {
            const data = fs.readFileSync(filePath, 'utf8');
            return JSON.parse(data);
        }
        return [];
    } catch (error) {
        console.log(error);
    }
}

function addTask() {
  const task = readlineSync.question("Enter your task : ");
  const obj = {
    task,
    status: "Pending",
  };
  tasks.push(obj);
  console.log("Task added successfully!");
  menu();
}

function viewTasks() {
  if (!tasks.length) {
    console.log("No tasks added yet!");
    return;
  }
  console.log("\nAll Tasks");
  for (let i = 0; i < tasks.length; i++) {
    console.log(`${i + 1}. ${tasks[i].task} (${tasks[i].status})`);
  }
  menu();
}

function markCompleted() {
  let flag = false;
  while (true) {
    const taskNumber = readlineSync.question("Enter task number : ");
    for (let i = 0; i < tasks.length; i++) {
      if (i + 1 === Number(taskNumber)) {
        tasks[i].status = "Completed";
        flag = true;
        console.log("\nOperation successfull!");
        break;
      }
    }
    if (flag) {
      menu();
      return;
    }
    console.log("\nInvalid Input!");
  }
}

function deleteTask() {
  let flag = false;
  while (true) {
    const taskNumber = readlineSync.question("Enter task number : ");
    for (let i = 0; i < tasks.length; i++) {
      if (i + 1 === Number(taskNumber)) {
        tasks.splice(i, 1);
        flag = true;
        console.log("\nOperation successfull!");
        break;
      }
    }
    if (flag) {
      menu();
      return;
    }
    console.log("\nInvalid Input!");
  }
}

menu();
