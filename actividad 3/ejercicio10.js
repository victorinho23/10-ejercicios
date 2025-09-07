// <!DOCTYPE html>
// <html lang="es">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Nómina Tecnovivir Casas C.A.</title>
// </head>
// <body>
//     <h2>Nómina de Obreros - Tecnovivir Casas C.A.</h2>
//     <button onclick="calcularNomina()">Calcular Nómina</button>
//     <pre id="resultado"></pre>

//     <script>
//         function calcularNomina() {
//             const preciodehoras = 10000;
//             const Totaldeobrero = 50;
//             let totalNomina = 0;
//             let resultadoTexto = "";

//             for (let i = 1; i <= Totaldeobrero; i++) {
//                 let entrada = prompt(`Obrero ${i}: Ingrese las horas trabajadas:`);

//                 if (entrada === null) {
//                     alert("Operación cancelada.");
//                     return; // sale de la función si el usuario cancela
//                 }

//                 let horas = parseFloat(entrada);

//                 if (isNaN(horas) || horas < 0) {
//                     alert(`Entrada inválida para el obrero ${i}. Se asumirá 0 horas.`);
//                     horas = 0;
//                 }

//                 let pago = horas * preciodehoras;
//                 totalNomina += pago;

//                 resultadoTexto += `Obrero ${i}: ${horas} horas → Pago: $${pago.toFixed(2)}\n`;
//             }

//             resultadoTexto += `\nTOTAL A PAGAR: $${totalNomina.toFixed(2)}`;
//             document.getElementById("resultado").textContent = resultadoTexto;
//         }
//     </script>
// </body>
// </html>

