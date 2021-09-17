// Тут будет js код

let title = "Тут крч будет название проекта",
  screens = "Простые, Сложные, Интерактивные",
  screenPrice = 18000,
  rollback = 90,
  fullPrice = 100000,
  adaptive = true

console.log(typeof title)
console.log(typeof fullPrice)
console.log(typeof adaptive)
console.log(screens.length)
console.log("Стоимость верстки экранов " + screenPrice + " рублей/ долларов/гривен/юани")
console.log("Стоимость разработки сайта " + fullPrice + " рублей/ долларов/гривен/юани")
console.log(screens.toLowerCase().split(", "))
console.log(fullPrice * (rollback / 100))