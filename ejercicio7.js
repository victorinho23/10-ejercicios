let inversion = (prompt ("ingrese la cantidad a invertir: "))
let interesanual = parseFloat(prompt ("ingrese el interes anual: ")) 
let años = (prompt ("ingrese la cantidad de años: "))
let obtenido = inversion * (interesanual/2) * años;

// document.write ("el valor a invertir es: " + inversion + "<br>")
// document.write ("el interes anual es de: " + interesanual + "%" + "<br>")
// document.write ("la cantidad de años es de: " + años + "<br>")
// document.write ("capital obtenido: "  + obtenido + "<br>")

alert ("el total obtenido en " + años + " años es de : " + obtenido + "pesos")



