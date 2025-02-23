let cities = ["Санкт-Петербург", "Чебоксары", "Казань"];
let temperatures = [];

for (let city of cities) {
    let temp = prompt(`Напишите температуру города: ${city}:`);
    temperatures[city] = temp;
}

console.log("Температуры по городам:", temperatures);
const list = document.createElement("ul");

tfor (const city in temperatures) {
    const listItem = document.createElement("li");
    listItem.textContent = `${city}: ${temperatures[city]}°C`;
    list.appendChild(listItem);
}

document.body.appendChild(list);

console.log("Температуры по городам:", temperatures);

