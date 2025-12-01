const estudiantes = [];
// this function creates a estudinate object and returns it.
const crearEstudiante = ( id, nombre, edad, notas ) => {
        const estudiante = {
            id,
            nombre,
            edad,
            notas
        };

        return estudiante;
};
// this function creates a nota object and returns it.
const nota = (materia, nota) => {
    return {
        materia,
        nota
    };
}
// this function helps us register the student including the mandatory subjects 
// they can be actually optionals if the student decides not to study a particular
// subject.
const registrarEstudiante = () => {
    const nombre = prompt("Ingrese nombre: ");
    const edad = parseInt(prompt("Ingrese edad: "));
    const id = estudiantes.length + 1;
    const notas = [nota("Marketing Digital", 0),  nota("Programacion", 0), nota("Habilidades Para La Vida", 0), nota("Ofimatica Productiva con IA", 0)];

    const estudiante = crearEstudiante(id, nombre, edad, notas);

    estudiantes.push(estudiante);
};

// this functions is an auxiliary one since it helps us show only the student's notas.
const mostrarNotas = (notas) => {
    notas.forEach(nota => {
        console.log('\nMateria:', nota.materia);
        console.log('\nNota: ', nota.nota);                
    });
}


const mostrarEstudiantes = () => {
    console.log('\n');
    estudiantes.forEach(estudiante => {
        console.log("Datos de estudiante:");        
        console.log(`Id:` + estudiante.id);
        console.log(`Nombre: ` + estudiante.nombre);
        console.log(`Edad: ` + estudiante.edad);

        mostrarNotas(estudiante.notas);
        
        console.log('\n');
    });
};
// We use the id of each student to locate their info on the system. 
const buscarEstudiante = () => {
    const id = parseInt(prompt("Ingrese el id del estudiante: "));
    const estudiante = estudiantes.filter(estudiante => estudiante.id === id);
   
    return estudiante;
}


const modificarNotas= ()=> {
    const estudiante = buscarEstudiante();

    if (estudiante.length == 0) {
        alert("El estudiante o id no estan registrado")
        return -1;
    }

    const menuDeNotas = '\nIngrese una opcion del menu (numero del 1 -4)\n1.Marketing Digital\nProgramacion\n3.Habilidades Para La VidaHabilidades Para La Vida\n4.Ofimatica Productiva con IA';    
    const seleccion = parseInt(prompt(menuDeNotas));
    
    if (seleccion > estudiante[0].notas.length || seleccion < 1) {
        alert("Ingrese una opcion del menu (un numero entre 1 y 4");
        return -1;
    }
    
    const nuevaNota  = parseInt(prompt("\nIngrese la nueva nota: "));
    if (nuevaNota > 10 || nuevaNota < 1) {
        alert("Solo se pueden asignar notas entre 1 y 10");
        return -1;
    }

    estudiante[0].notas[seleccion - 1].nota = nuevaNota;
    alert("\nId: " + estudiante[0].id + 
        "\nNombre: " + estudiante[0].nombre + 
        "\nMateria: " + estudiante[0].notas[seleccion - 1].materia + 
        "\nNueva nota registrada: " + estudiante[0].notas[seleccion - 1].nota);    
}

const modificarEstudiante  = ( ) => {
    const estudiante = buscarEstudiante();
  
    if (estudiante.length == 0) {
        alert("El estudiante o id no estan registrado")
        return -1;
    }


    if (estudiante) {
        const menuDeModificaciones = '\nMenu de moficacciones de estudiante:\nIngrese un numero: \n1.Nombre \n2.Edad\n3.Notas';
        const seleccion = parseInt(prompt(menuDeModificaciones));    
       

        if (seleccion == 1) {
            const nombre = prompt("Ingrese el nombre: ");   
            if (nombre) {
                estudiante[0].nombre = nombre;
            } else {
                console.log("El nombr es obligatorio");
                
            }
        } else if (seleccion == 2) {
            const edad = parseInt(prompt("Ingrese la edad: "));
            if (edad > 0) {
                estudiante[0].edad = edad;
            } else {
                console.log("La edad debe ser mayor a 0.");
                
            }
        } else if (seleccion == 3) {
            modificarNotas();
        } else {
            console.log("La opcion seleccionada no se encuentra en el menu.");        
        }
    } else {
        console.log("No se econtro el estudiante en el registro");        
    }
};


const eliminarEstudiante = ( id ) => {
    const elementosDeLista = estudiantes.length;
    for (let i = 0; i < estudiantes.length; i++){
        if (estudiantes[i].id == id) {
            // Here we get the start index for the splice method
            const start = estudiantes.findIndex(estudiante => estudiante.id == id);
            // console.log(start);            
            estudiantes.splice(start, 1);
        } 
    }   

    if (elementosDeLista > estudiantes.length) {
        alert("Se elimino el estudiante del regitro");        
    } else {
        alert("No se encontro el id o estudiante en el registro");        
    }
}
// Here we create the option menu for the user.
const menu = () => {
    const opciones = '\n1.Registrar un estudiante\n2.Mostrars estudiantes registrados\n3.Mofidificr Info de estudiante\n4.Eliminar info de estudiante \n5.Salir\n';
    while (true) {
        const seleccion = parseInt(prompt(opciones));

        if (seleccion == 1) {
            registrarEstudiante();
        } else if (seleccion == 2) {
            mostrarEstudiantes();
        } else if (seleccion == 3) {
            modificarEstudiante();
        } else if (seleccion == 4) {
            const id = parseInt(prompt("Ingrese el id del estudiante."));
            eliminarEstudiante(id);
        } else if (seleccion == 5) {
            alert("Saliendo del programa...")
            return;
        } else {
            alert("Opcion no valida, ingrese un numero (opcion 1 a 4)");            
        }
    }
}

const iniciarPrograma  = () => {

    menu();

}

