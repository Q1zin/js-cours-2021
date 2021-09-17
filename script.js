// Тут будет js код

alert("Как называется ваш проект?")
let title = prompt()

alert("Какие типы экранов нужно разработать? (пример: \"Простые, Сложные, Интерактивные\")")
let screens = prompt()

alert("Сколько будет стоить данная работа?")
let screenPrice = prompt()

alert("Нужен ли адаптив на сайте? (true/false)")
let adaptive = prompt()

alert("Какой дополнительный тип услуги нужен")
let service1 = prompt()

alert("Сколько это будет стоить")
let servicePrice1 = prompt()

alert("Какой дополнительный тип услуги нужен")
let service2 = prompt()

alert("Сколько это будет стоить")
let servicePrice2 = prompt()

let fullPrice = screenPrice + servicePrice1 + servicePrice2;

// let servicePercentPrice = Math.round(fullPrice - Процент отката за работу); ???

if (fullPrice >= 30000) {
  alert("Даем скидку в 10%")
} else if (fullPrice >= 15000) {
  alert("Даем скидку в 5%")
} else {
  alert("Скидка не предусмотрена")
}