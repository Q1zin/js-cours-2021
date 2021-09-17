// Тут будет js код

let title,
  screens,
  screenPrice,
  rollback = 90,
  fullPrice,
  adaptive

alert("Как называется ваш проект?")
title = prompt()

alert("Какие типы экранов нужно разработать? (пример: \"Простые, Сложные, Интерактивные\")")
screens = prompt()

alert("Сколько будет стоить данная работа?")
screenPrice = prompt()

alert("Нужен ли адаптив на сайте? (true/false)")
adaptive = prompt()

alert("Какой дополнительный тип услуги нужен")
let service1 = prompt()

alert("Сколько это будет стоить")
let servicePrice1 = prompt()

alert("Какой дополнительный тип услуги нужен")
let service2 = prompt()

alert("Сколько это будет стоить")
let servicePrice2 = prompt()

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