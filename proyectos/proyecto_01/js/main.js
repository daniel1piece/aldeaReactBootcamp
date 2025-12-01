
 let tareas = [];

 function mostrarTareas (listaTareas) {
    for (let i = 0; i < listaTareas.length; i++) {
        console.log(`Listado de tareas:\nNro.${listaTareas[i].id}\nDescripcion:${listaTareas[i].descripcion}\nEstado:${listaTareas[i].completada}`);
        
    }
 }

 function creartarea (id_tarea,descripcion_tarea,completada_tarea){
        let tarea = {
            id:id_tarea,
            descripcion:descripcion_tarea,
            completada: completada_tarea,
        }
        return tarea;
}

function creartareas() {

   
    let cuantastareas = prompt("cuntas tareas desea agreagar");
    let contadortarea=0

    do{

   
        contadortarea++;
    let descripcion = prompt("describa la tarea");
    let completada = prompt("ya completo la tarea?(Si/No)").toLowerCase();

   
    let id = parseInt(contadortarea);

    let tarea = creartarea(id,descripcion,completada);
    tareas.push(tarea);
         

    } while(contadortarea < cuantastareas );

    console.log(tareas);
    
    console.log(JSON.stringify(tareas));
}


function cambiarestadotarea(){

    let id = parseInt(prompt("que numero de tarea desea cambiar"));
    
    
    for(let i =0;i<tareas.length;i++){    
        if (tareas[i].id == id){
            // console.log(tareas[i].id);
            if(tareas[i].completada.toLowerCase()==="completada"){
                tareas[i].completada = "pendiente";
            } else if  (tareas[i].completada.toLowerCase()==="pendiente") {
                tareas[i].completada="completada"
            }else{
                console.log("ocurrio un error al actualizar la tarea");
            }
        } else {
            console.log("la tarea no se encuentra en la lista de tareas")
        }
    }

    console.log(tareas);

    console.log(JSON.stringify(tareas));    
    
}
// Mostrar tareas

//console.log(tareas);
creartareas();
// console.log(tareas);
mostrarTareas(tareas);
cambiarestadotarea();
// console.log(tareas);
