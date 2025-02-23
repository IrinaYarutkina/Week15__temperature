
const cities = ['Санкт-Петербург', 'Чебоксары', 'Казань'];
const temperatures = [];

for (let i = 0; i < cities.length; i++) {
    let temperature = prompt(`Введите температуру для города ${cities[i]}:`);
    temperatures.push(Number(temperature));
}
let maxTemperature = -Infinity;
let minTemperature = Infinity;
let weatherListHTML = "<ul>";
for (let i = 0; i < cities.length; i++) {
    weatherListHTML += `<li>${cities[i]}: ${temperatures[i]}°C</li>`;
    if (temperatures[i] > maxTemperature) {
        maxTemperature = temperatures[i];
    }
    if (temperatures[i] < minTemperature) {
        minTemperature = temperatures[i];
    }
}
weatherListHTML += "</ul>";

document.getElementById("weatherInfo").innerHTML = weatherListHTML;


document.getElementById("weatherInfo").innerHTML += `
    <p>Максимальная температура: ${maxTemperature}°C</p>
    <p>Минимальная температура: ${minTemperature}°C</p>
`;