
// // ejercicio 1

// let num = parseInt(prompt(`Ingresa un número`))

// for ( let i = 1; i <= 10; i++){
//     console.log(`${num} x ${i} = ${num * i}`);
// }

// // ejercicio 2

// let numIngres = Number(prompt('Ingrese un número'))
// const numeros = []
// while (numIngres != 0){
//     numeros.push( numIngres )
//     numIngres = Number(prompt('Ingrese un número'))
// } 
// console.log(numeros);

// // ejercicios 3

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

// // ejercicio 4

function numPrimos() {
    let primo = Number(prompt("Ingrese un número para saber si es primo:"))
    while (primo > 0) {
        if (primo == 0 || primo == 1 || primo == 4) {
            alert(`${primo} no es numero primo`)
        }
        for (let i = 2; i < primo / 2; i++) {
            if (primo % i === 0) {
                alert(`${primo} no es numero primo`)
                primo = Number(prompt("ingrese un numero para saber si es primo:"))
            }
        }
        alert(`${primo} es numero primo`)
        primo = Number(prompt("Ingrese un numero para saber si es primo:"))
    }
}
numPrimos();

// // ejercicio 5

// // ejercicio 6