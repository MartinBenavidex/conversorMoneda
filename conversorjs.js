let choice = prompt("Ingrese 1 = Peso Arg -> Dólar \nIngrese 2 = Peso Arg -> Euro");

while (choice !== "1" && choice !== "2") {
    choice = prompt("Por favor seleccione una de las 2 opciones:\n1 = Peso Arg -> Dólar \n2 = Peso Arg -> Euro");
}

const pesosArgentinos = prompt("Ingrese la cantidad de pesos argentinos a convertir:");

// Función para convertir pesos argentinos a dólares
function convertirADolar(pesos) {
    const precioDolar = 0.0038;
    const dolares = pesos * precioDolar;
    return dolares;
}

// Función para convertir pesos argentinos a euros
function convertirAEuro(pesos) {
    const tasaEuro = 0.0035;
    const euros = pesos * tasaEuro;
    return euros;
}

if (choice === "1") {
    const dolares = convertirADolar(pesosArgentinos).toFixed(2);
    console.log(`${pesosArgentinos} pesos argentinos equivalen a ${dolares} dólares estadounidenses.`);
} else if (choice === "2") {
    const euros = convertirAEuro(pesosArgentinos).toFixed(2);
    console.log(`${pesosArgentinos} pesos argentinos equivalen a ${euros} euros.`);
}