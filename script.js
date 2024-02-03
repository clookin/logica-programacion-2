const grados = window.prompt("Ingresa el la temperatura actual en grados celsius: ");

let gradosCelsius = parseInt(grados)
let gradosFahrenheit = (gradosCelsius * 9/5)+32;
let gradosKelvin = (gradosCelsius + 273.15);


alert(`Los grados Fahrenheit de la temperatura que ingresaste son: ${gradosFahrenheit}F y los grados en Kelvin son: ${gradosKelvin}K`);