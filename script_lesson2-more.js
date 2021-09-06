let num = 266219,
  endNum = 1;

// Я знаю, что существуют Math.floor))
// Но я ж блин паскальщик))

function div(val, by) {
  return (val - val % by) / by;
}

let numLen = num.toString().length

for (let i = 0; i < numLen; i++) {
  endNum *= num % 10
  num = div(num, 10)
}

console.log(endNum)

let numGod = endNum ** 3
console.log(numGod.toString().slice(0, 2))