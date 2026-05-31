

//temporary filler code
async function getTasks() {
    const response = await fetch("http://localhost:8080/tasks");
    const tasks = await response.json();

    console.log(tasks);
}