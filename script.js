// Тут будет js код

let title,
  screens,
  screenPrice,
  rollback = 90,
  fullPrice,
  adaptive

title = prompt("Как называется ваш проект?")

screens = prompt("Какие типы экранов нужно разработать? (пример: \"Простые, Сложные, Интерактивные\")")

screenPrice = prompt("Сколько будет стоить данная работа?")

adaptive = prompt("Нужен ли адаптив на сайте? (true/false)")

let service1 = prompt("Какой дополнительный тип услуги нужен")

let servicePrice1 = prompt("Сколько это будет стоить")

let service2 = prompt("Какой дополнительный тип услуги нужен")

let servicePrice2 = prompt("Сколько это будет стоить")

fullPrice = screenPrice + servicePrice1 + servicePrice2;

let servicePercentPrice = Math.ceil(fullPrice - fullPrice * (rollback / 100));

if (fullPrice >= 30000) {
  alert("Даем скидку в 10%")
} else if (fullPrice >= 15000) {
  alert("Даем скидку в 5%")
} else {
  alert("Скидка не предусмотрена")
}

console.log(typeof title)
console.log(typeof fullPrice)
console.log(typeof adaptive)
console.log(screens.length)
console.log("Стоимость верстки экранов " + screenPrice + " рублей/ долларов/гривен/юани")
console.log("Стоимость разработки сайта " + fullPrice + " рублей/ долларов/гривен/юани")
console.log(screens.toLowerCase().split(", "))
console.log(fullPrice * (rollback / 100))