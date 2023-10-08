function convertirDolarOficialAPesos(montoDolarOficial) {
    let tipoDeCambioDolarOficial = 347;
    return montoDolarOficial * tipoDeCambioDolarOficial;
}

function convertirDolarBlueAPesos(montoDolarBlue) {
    let tipoDeCambioDolarBlue = 790;
    return montoDolarBlue * tipoDeCambioDolarBlue;
}

function convertirPesosADolarOficial(montoPesos) {
    let tipoDeCambioDolarOficial = 100;
    return montoPesos / tipoDeCambioDolarOficial;
}

function conversorDeMonedas() {
    let continuar = true;

    while (continuar) {
        let opcionesConvertir = prompt("Hola! Bienvenido, ¿Qué operación deseas realizar?\n\n1. Convertir Dólar Oficial a Pesos\n2. Convertir Dólar Blue a Pesos\n3. Convertir Pesos a Dólares");

        if (opcionesConvertir == "1") {
            let montoDolarOficial = parseFloat(prompt("Ingrese el monto en Dólar Oficial:"));
            if (!isNaN(montoDolarOficial)) {
                let montoPesos = convertirDolarOficialAPesos(montoDolarOficial);
                alert(`${montoDolarOficial} Dólares Oficiales son aproximadamente ${montoPesos.toFixed(2)} Pesos.`);
            } else {
                alert("Por favor, ingrese un monto válido en Dólar Oficial.");
            }
        }

        if (opcionesConvertir == "2") {
            let montoDolarBlue = parseFloat(prompt("Ingrese el monto en Dólar Blue:"));
            if (!isNaN(montoDolarBlue)) {
                let montoPesos = convertirDolarBlueAPesos(montoDolarBlue);
                alert(`${montoDolarBlue} Dólares Blue son aproximadamente ${montoPesos.toFixed(2)} Pesos.`);
            } else {
                alert("Por favor, ingrese un monto válido en Dólar Blue.");
            }
        }

        if (opcionesConvertir == "3") {
            let montoPesos = parseFloat(prompt("Ingrese el monto en Pesos:"));
            if (!isNaN(montoPesos)) {
                let montoDolarOficial = convertirPesosADolarOficial(montoPesos);
                alert(`${montoPesos} Pesos son aproximadamente ${montoDolarOficial.toFixed(2)} Dólares Oficiales.`);
            } else {
                alert("Por favor, ingrese un monto válido en Pesos.");
            }
        }

        respuesta = prompt("¿Desea realizar otra conversión? (si/no)");

        if (respuesta.toLowerCase() !== "si") {
            continuar = false;
        }
    }

    alert("¡Gracias por usar el conversor!");
}

conversorDeMonedas();

