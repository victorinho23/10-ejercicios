const precioHora = 10000;
    const totalObreros = 50;
    const nominaDiv = document.getElementById("nomina");

    for (let i = 1; i <= totalObreros; i++) {
      let horas = prompt(`Obrero ${i}: Ingrese horas trabajadas`);
      
   
      if (horas === null || isNaN(horas) || horas.trim() === "") {
        alert("Entrada inválida. Se asignarán 0 horas.");
        horas = 0;
      }

      let pago = parseInt(horas) * precioHora;
      nominaDiv.innerHTML += `<p>Obrero ${i} - Pago: ${pago.toLocaleString()} pesos</p>`;
    }

    