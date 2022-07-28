var tasks = [];
var time = 0;
var timer = null;
var timerBreak = null;
var current = null;
var bAdd = document.querySelector("#bAdd");
var itTask = document.querySelector("#itTask");
var form = document.querySelector("#form");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (itTask.value !== "") {
        createTask(itTask.value);
        itTask.value = "";
        renderTasks();
    }
});
function createTask(value) {
    var newTask = {
        id: (Math.random() * 100).toString(36).slice(3),
        title: value,
        completed: false
    };
    tasks.unshift(newTask);
}
function renderTasks() {
    var html = tasks.map(function (task) {
        return "\n        <div class=\"task\">\n            <div class= \"completed\"> ".concat(task.completed ? "<span class=\"done\">Done</span>" : "<button class=\"start-button\" data-id=\"".concat(task.id, "\">Start</button>"), " </div>\n            <div class= \"title\"> ").concat(task.title, " </div>\n        </div>\n        ");
    });
    var tasksContainer = document.querySelector("#tasks");
    tasksContainer.innerHTML = html.join("");
}
