
const form=document.querySelector("form");
form.addEventListener("submit", saveTask)

function saveTask(e){
    e.preventDefault();    
    task=document.getElementById("task");
    //validación de que el formulario no se encuentre vacío
    if(task.value==""){
        return;
    }
    //Renderizado de cada una de las tereas
    const ul=document.querySelector("#list");
    const li=document.createElement("li")
    const del = document.createElement("i");
    del.className="btn btn-primary fa fa-trash-o";
    //evento click del boton eliminar
    del.addEventListener("click",deleteTask);
    const finish = document.createElement("i");
    finish.className="btn btn-warning fa fa-check"
    //evento click del boton terminado
    finish.addEventListener("click",finishedTask)
    li.innerHTML=task.value;
    task.value="";
    li.appendChild(del)
    li.appendChild(finish)
    ul.appendChild(li)
    li.className="list-group-item list-group-item-warning p-5"; 
}

function deleteTask(e){
    let aux=e.target.parentNode;
    aux.parentNode.removeChild(aux);
}

function finishedTask(e){
    const aux=e.target.parentNode;
    console.log(aux);
    aux.className="list-group-item list-group-item-success";
}