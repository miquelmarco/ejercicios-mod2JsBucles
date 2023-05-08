
// // // Esta página está preparada para ir 
// // // descomentando uno a uno los ejercicios.
// // // Puede que algunas variables se repitan si no se usa así
// // // Además de los 40 prompts al iniciar el live server



// // // ejercicio 1

// let num = parseInt(prompt(`Ingresa un número`))

// for ( let i = 1; i <= 10; i++){
//     console.log(`${num} x ${i} = ${num * i}`);
// }

// // // ejercicio 2

// let numIngres = Number(prompt('Ingrese un número'))
// const numeros = []
// while (numIngres != 0){
//     numeros.push( numIngres )
//     numIngres = Number(prompt('Ingrese un número'))
// } 
// console.log(numeros);

// // // ejercicios 3

// let ultNum = numeros[numeros.length-1]
// console.log(ultNum)
// let numIngre;
// do { 
//     numIngre = Number(prompt(`Adivina el número: Ingresa del 1 al 100`))
//     if (numIngre == ultNum) {
//         alert(`Felicidades haz acertado!`)
//     }else if (numIngre < ultNum) {
//         alert(`El número secreto es mayor!`)
//     }else if (numIngre > ultNum) {
//         alert(`El número secreto es menor!`)
//     }
// } while (ultNum != numIngre)

// // // ejercicio 4

// function numPrimos(numero) {
//     let primo = Number(prompt("Ingrese un número para saber si es primo:"))
//     while (primo > 0) {
//         if (primo == 0 || primo == 1 || primo != 2 || primo == 4) {
//             alert(`${primo} no es numero primo`)
//         }
//         for (let i = 2; i < primo / 2; i++) {
//             if (primo % i === 0) {
//                 alert(`${primo} no es numero primo`)
//                 primo = Number(prompt("ingrese un numero para saber si es primo:"))
//             }
//         }
//         alert(`${primo} es numero primo`)
//         primo = Number(prompt("Ingrese un numero para saber si es primo:"))
//     }
// }
// numPrimos();

// // // ejercicio 5

// let number = Number(prompt(`Ingrese un número para saber sus divisores`))
// let divisores = []
// for(let i = 1; i <= number; i++){
//     if (number % i === 0){
//         divisores.push(i)
//     }
// }
// console.log(divisores);

// // // ejercicio 6

// const array = [1, 2, 3, 4, 5, 6, `javier`, `carlos`, [`octavio`, `esteban`], {name: `juan`, lastname: `herrera`}]

// for (let i = 0; i < array.length; i++){
//     console.log(array[i])
// }

// // // ejercicio 7

// const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// for (let i = 0; i < array2.length; i++){
//     console.log(array2[i] * 2)
// }

// // // ejercicio 8

// const familia = [{
//     name: `Sandra`,
//     edad: 55,
//     ocupacion: `enfermera`,
//     colorPelo: `negro`
// }, {
//     name: `Juan`,
//     edad: 33,
//     ocupacion: `profesor`,
//     colorPelo: `castaño`
// }, {
//     name: `Octavio`,
//     edad: 67,
//     ocupacion: `jubilado`,
//     colorPelo: `rubio`
// }, {
//     name: `Jorge`,
//     edad: 12,
//     ocupacion: `estudiante`,
//     colorPelo: `castaño`
// }, {
//     name: `Rocío`,
//     edad: 3,
//     ocupacion: `infante`,
//     colorPelo: `negro`
// }];

// for (let i = 0; i < familia.length; i++) {
//     console.log(`Su nombre es ${familia[i].name} tiene ${familia[i].edad} años, 
//     el pelo de color ${familia[i].colorPelo} y actualmente es ${familia[i].ocupacion}.`)
// }

// // // ejercicio 9

// const arrayNumber = [1, 4, 6, 7, 8, 35, 657, 43, 22, 66, 554, 2255, 44855];
// let soyImpar = []
// for (let i = 0; i < arrayNumber.length; i++) {
//     if (i % 2 !== 0) {
//         soyImpar.push(arrayNumber[i]);
//     }
// }
// console.log(soyImpar)

// // // ejercicio 10

// let numIngres = Number(prompt('Ingrese un número'))
// const numeros = []
// const impar = []
// const par = []
// let resultadoImpar = 0
// let resultadoPar = 0
// while (numIngres != 0) {
//     numeros.push(numIngres)
//     numIngres = Number(prompt('Ingrese un número'))
// } for (let i = 0; i < numeros.length; i++) {
//     if (i % 2 == 0) {
//         impar.push(numeros[i]);
//     } else if (i % 2 !== 0) {
//         par.push(numeros[i]);
//     }
// }
// for (let i = 0; i < impar.length; i++) {
//     resultadoImpar += impar[i];
// }
// for (let i = 0; i < par.length; i++) {
//     resultadoPar += par[i];
// }
// console.log(numeros)
// console.log(impar)
// console.log(resultadoImpar)
// console.log(par)
// console.log(resultadoPar)

// // // ejercicios 11

// // // v.1 Estuve investigando el ... y se puede así junto con Math.max, 
// // //pero como es con bucles lo hice de nuevo abajo en v.2

// let listaMayor = [18, 31, 64, 5, 8 ,12 ,77 ,54, 125, 32];
// let mayorNumber = Math.max(...listaMayor);
// console.log(mayorNumber)

// // // v.2
// let listaMayor = [18, 31, 64, 5, 812 ,12 ,77 ,543, 125, 32];
// let resultadoMayor = 0
// for (let i = 0; i < listaMayor.length; i++){
//     if (resultadoMayor < listaMayor[i]){
//         resultadoMayor = listaMayor[i];
//     }
// }
// console.log(resultadoMayor);

// // ejercicio 12

// let listaMenor = [18, 31, 64, 5, 8 ,12 ,77 ,54, 125, 32];
// let menorNumber = Math.min(...listaMenor);
// console.log(menorNumber)

// // // ejercicio 13

// let concursoPPT = alert(`Compite en piedra, papel o tijera!`)
// let primerJug = prompt(`Jugador 1 ingresa tu Nombre:`)
// let segundoJug = prompt(`Jugador 2 ingresa tu Nombre:`)
// let jugadaPrimerJug
// let jugadaSegundoJug
// do {
//     jugadaPrimerJug = prompt(`${primerJug} ingresa PIEDRA, PAPEL o TIJERA:`)
//     jugadaSegundoJug = prompt(`${segundoJug} ingresa PIEDRA, PAPEL o TIJERA:`)
// if (jugadaPrimerJug.toLowerCase() == `piedra` && jugadaSegundoJug.toLowerCase() == `piedra`) {
//     alert(`Dos PIEDRAS: Empate!`)
// }else if (jugadaPrimerJug.toLowerCase() == `piedra` && jugadaSegundoJug.toLowerCase() == `papel`) {
//     alert(`${segundoJug} ha ganado!`)
// }else if (jugadaPrimerJug.toLowerCase() == `piedra` && jugadaSegundoJug.toLowerCase() == `tijera`) {
//     alert(`${primerJug} ha ganado!`)
// }else if (jugadaPrimerJug.toLowerCase() == `papel` && jugadaSegundoJug.toLowerCase() == `papel`) {
//     alert(`Doble PAPEL: Empate!`)
// }else if (jugadaPrimerJug.toLowerCase() == `papel` && jugadaSegundoJug.toLowerCase() == `piedra`) {
//     alert(`${primerJug} ha ganado!`)
// }else if (jugadaPrimerJug.toLowerCase() == `papel` && jugadaSegundoJug.toLowerCase() == `tijera`) {
//     alert(`${segundoJug} ha ganado!`)
// }else if (jugadaPrimerJug.toLowerCase() == `tijera` && jugadaSegundoJug.toLowerCase() == `tijera`) {
//     alert(`Doble Tijera: Empate!`)
// }else if (jugadaPrimerJug.toLowerCase() == `tijera` && jugadaSegundoJug.toLowerCase() == `piedra`) {
//     alert(`${segundoJug} ha ganado!`)
// }else if (jugadaPrimerJug.toLowerCase() == `tijera` && jugadaSegundoJug.toLowerCase() == `papel`) {
//     alert(`${primerJug} ha ganado!`)
// }else {
//     alert(`Un jugador ha hecho trampa! Fin del Juego!`)
// }
// } while (jugadaPrimerJug.toLowerCase() == jugadaSegundoJug.toLowerCase())

// // // ejercicios 14

// function pyramid1(numPisos) {
//     for (let i = 0; i < numPisos; i++) {
//         let piso = '';
//         // console.log(`vuelta n ${i}`)
//     for (let x = 0; x < i + 1; x++) {
//         piso = piso + '*';
//         // console.log(x)
//     }
//     console.log(piso)
//     }
// }
// pyramid1(5);

// // // ejercicio 15

// function pyramid2(numPisos2) {
//     for (let i = 0; i < numPisos2; i++) {
//         let piso = '';
//         for (let x = 1; x < numPisos2 - i; x++) {
//             piso = piso + ' ';
//         }
//         for (let x = 0; x < i + 1; x++) {
//             piso = piso + '*';
//         }
//         console.log(piso);
//     }
// }
// pyramid2(5);

// // // ejercicio 16

// // NO DE MI AUTORIA Este ejercicio no lo pude hacer
// // Este es el resultado pero aún me cuesta entenderlo
// // Bucles me ha costado más que las task misma

// let arrayAOrdenar = [8, 32, 55, 61, 23, 18, 12, 4, 21, 9, 25];
// console.log(arrayAOrdenar)
// console.log(`-----------`)

// function arrayOrdenado(array) {
//     let n = array.length;
//     console.log(n)
//     console.log(`-----------`)
    
//     for (let i = 0; i < n - 1; i++) {
//         for (let x = 0; x < n - i - 1; x++) {
//             if (array[x] > array[x + 1]) {

//                 console.log(x)
//                 // Intercambiar x y x+1
//                 let dato = array[x];
//                 array[x] = array[x + 1];
//                 array[x + 1] = dato;
//             }
//         }
//     }
//     return array;
// }

// console.log(arrayOrdenado(arrayAOrdenar));