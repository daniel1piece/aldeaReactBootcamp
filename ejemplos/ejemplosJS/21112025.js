// const bateria = 61;

// if (bateria > 60 && bateria <= 100) {
//     console.log("La bateria esta cargada mas del 60%");
    
// }else if (bateria  >= 20 && bateria <= 60) {
//     console.log("La esta entre 20% y 60%");
// } else if (bateria >= 0 && bateria < 20) {
//     console.log("La esta entre 0% y 20%");
// } else {
//     console.log("Ha ocurrido un error");
// }

// let diasSemama = [];
// diasSemama.push("Lunes");
// diasSemama.push("Martes");
// diasSemama.push("Miercoles");
// diasSemama.push("Jueves");
// diasSemama.push("Viernes");
// diasSemama.push("Sabado");
// diasSemama.push("Domingo");

// console.log(diasSemama);

// let tercerNumero = diasSemama[2];

// console.log(tercerNumero);

//-------------------------------------------
// for (let i = 1;  i <= 10; i++) {
//     console.log(i);
    
// } 

let numero = 0;

// do {
//     numero = parseInt(prompt("Ingrese un numero mayor a 100."));
// } while (numero <= 100);

// console.log("Usted ingreso un numero mayor a 100");


// let suma = 0;
// let counter = 0;
// while(counter < 50) {
//     suma += counter;
//     counter++;
// }

// console.log("Suma primeros 50 numeros naturales:", suma);


// let sumaPares = 0;
// for (let i = 1; i < 21; i++) {
//     if (i % 2 == 0) {
//         sumaPares += i;
//     }
// }

// console.log("Sumar numeros pares del 2 al 20", sumaPares);

// let nums = [3, 15, 8, 22, 11];
// let contador = 0;
// let index = 0;
// while(index < nums.length) {
//     if (nums[index] > 10)
//         contador++;  
//     index++;  
// }

// console.log("Hay", contador, "mayores a 10.");

// let stock = [3, 0, 8, 0, 1, 4];
// let agotados = 0;

// for (let i = 0; i < stock.length; i++) {
//     if (stock[i] === 0) {
//         agotados++;
//     }
// }

// console.log("Productos agotados:", agotados);

// const calculdoraBasica = () => {
//     while (true) {      
//         const seleccion = prompt("Calculadora Basica\nSelecciona una opcion del menu. (Ingrese un numero del 1 - 5)\n1.Suma\n2.Resta\n3.Multiplicacion\n4.Division\n5.Salir\n");
//         try {
          
//             if (seleccion == 5) {
//                 return;
//             }
//             if (seleccion > 0 && seleccion < 6) {
//                 const numero1 = parseFloat(prompt("Ingrese el primer numero: "));
//                 const numero2 = parseFloat(prompt("Ingrese el segundo numero: "));

//                 if (seleccion == 1) {
//                     alert(numero1 + numero2);
//                 } else if (seleccion == 2) {
//                     alert(numero1 - numero2);
//                 } else if (seleccion == 3) {
//                     alert(numero1 * numero2);
//                 } else if (seleccion == 4) {
//                     alert(numero1 / numero2)
//                 } else {
//                     alert("Selecciona una opcion del menu.")
//                 }
//             } else {
//                 alert("Ingrese un valor del menu.");
//             }
//         } catch (error) {

//             console.log("Ingrese un valor del tipo necesario");      

//         }
//     }
// };

// calculdoraBasica();

// Numero primo

// const esPrimo = ( numero ) => {
//     let primo = true;
//     for (let i = parseInt(numero / 2); i > 1; i--) {
//         console.log(i);
        
//         if (numero % i == 0) {
//             primo = false;
//         }
//     }
//     return primo;
// };

// console.log(esPrimo(11));
// console.log(esPrimo(10));

// Contador de bocales

const contadorVocales = (palabra) => {
    const vocales = 'a,e,i,o,u';
    const arregloLetras = palabra.toLowerCase().split('');
    let numeroVocales = 0;
    for (let i = 0; i < arregloLetras.length; i++) {
        if ( vocales.includes(arregloLetras[i])) {
            numeroVocales++;
        }
    }
    console.log(numeroVocales);    
}

contadorVocales("Marlon Daniel");