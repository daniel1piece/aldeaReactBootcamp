let perro = {
    raza: "Pitbull",
    altura: "70cm",
    color: "Gris",
    edad: 1,
    esVacunado: false,
    person:"23kg",
    nombre:"Sasha"
};

console.log("Mi perro se llama", perro.nombre);
console.log("La altura de mi perro es", perro.altura);
console.log("El color de mi perro es", perro.raza);



// Ej1
let total = 0;
let precio = 40;
let cantidad = 10;

total = precio * cantidad;

console.log(total);
if (total > 390) {
    console.log("El valor es mayor a 390");    
} else {
    console.log("El valor es menor a 390");    
}

let esParteClubTecnologia = true;
let tieneProyectoInscrit = false;
let tieneGafete = true;

console.log(esParteClubTecnologia && tieneProyectoInscrit && tieneGafete);


let comproBoleto = true;
let esMiercoles = false;
let esEstudiante = true;

console.log((esMiercoles || esEstudiante) && comproBoleto);
