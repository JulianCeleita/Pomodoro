
const tasks = []

let time = 0
let timer = null 
let timerBreak = null
let current = null

const bAdd: any = document.querySelector(`#bAdd`)
const itTask: any = document.querySelector(`#itTask`)
const form: any = document.querySelector(`#form`)

form.addEventListener(`submit`, (e) => {
    e.preventDefault()
    if(itTask.value !== ``) {
        createTask(itTask.value)
        itTask.value = ``
        renderTasks()
    }
} )


function createTask(value) {
    const newTask = {
        id: (Math.random() * 100).toString(36).slice(3),
        title: value,
        completed: false,
    }

    tasks.unshift(newTask)

}

function renderTasks() {
    const html = tasks.map(task => {
        return `
        <div class="task">
            <div class= "completed"> ${task.completed ? `<span class="done">Done</span>` : `<button class="start-button" data-id="${task.id}">Start</button>` } </div>
            <div class= "title"> ${task.title} </div>
        </div>
        `
    })

    const tasksContainer = document.querySelector(`#tasks`)
    tasksContainer.innerHTML = html.join(``)
}

