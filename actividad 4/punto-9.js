const tmoto = "moto"
const tauto = "auto"
const moto = 1000
const automovil = 2000

let tipode = prompt ("que vehiculo tiene en el parqueadero? ")
let horas = prompt ("ingrese el numero de horas")


let ope = horas*moto
let ope2 =  horas*automovil

if (tipode === tmoto) {
    alert ("estas pagando parquedero de moto y el precio es: " + ope)
} else {
    alert ("estas pagando parquedero de carro y el precio es: " + ope2)
}

// en html

//  <h1>Parqueadero</h1>
      
//    <script>
// const tmoto = "moto"
// const tauto = "auto"
// const moto = 1000
// const automovil = 2000

// let tipode = prompt ("que vehiculo tiene en el parqueadero? ")
// let horas = prompt ("ingrese el numero de horas")


// let ope = horas*moto
// let ope2 =  horas*automovil

// if (tipode === tmoto) {
//     alert ("estas pagando parquedero de moto y el precio es: " + ope)
// } else {
//     alert ("estas pagando parquedero de carro y el precio es: " + ope2)
// }

// document.write ("tipo vehiculo: " + tipode +  "<br>")
// document.write (" horas en parqueadero: " + horas + "<br>")

// if (tipode === tmoto){
//     document.write ("el total a pagar es: " + ope + "<br>") 
// } else {
//     document.write ("el total a pagar es: " + ope2 + "<br>") 
// }

// </script>
