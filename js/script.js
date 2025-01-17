// funçao que adciona tarefa
function addTask(){
    //titulo da tarefa
    const taskTitle = document.querySelector("#task-title").value;
 
    if(taskTitle){
 //clona template
 const template = document.querySelector(".template");

 const newTask = template.cloneNode(true);

//add ttitulo

newTask.querySelector(".task-title").textContent = taskTitle;
//remove classe desnecessaria


newTask.classList.remove("template");
newTask.classList.remove("hide");
    
// add tarefa na lista
const list = document.querySelector("#task-list");
 
list.appendChild(newTask);

 const removeBtn = newTask.querySelector(".remove-btn").addEventListener("click", function(){
    removeTask(this);
});
// adicionar evento de completar tarefa
const doneBtn = newTask.querySelector(".done-btn").addEventListener("click", function(){

completeTask(this);

});

//limpar textp
document.querySelector("#task-title").value =  "";
    }
}

//funcap de remove tarefa

function removeTask(task){
    task.parentNode.remove(true);

}
//funcao de completar tarefa 
function completeTask(task){

    const taskToComplete = task.parentNode;

    taskToComplete.classList.toggle("done");
}

 //evento de add tarefa
const addBtn = document.querySelector("#add-btn");

addBtn.addEventListener("click", function(e){

    e.preventDefault();
    
    addTask();
});