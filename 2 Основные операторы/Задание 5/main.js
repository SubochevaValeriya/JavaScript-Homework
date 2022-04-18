// Необходимо реализовать функцию, которая будет принимать первым аргументом
// целое положительное число, в следующих трех аргументах функция принимает слова
// в разных склонениях.
// Функция должна возвращать одно из трех переданных в параметры слов подходящее
// под число, которое передано первым аргументом.

// Пример:
// console.log(declinationOfNumber(1, "яблоко", "яблока", "яблок")); // "яблоко"
// console.log(declinationOfNumber(2, "мяч", "мяча", "мячей")); // "мяча"
// console.log(declinationOfNumber(5, "стул", "стула", "стульев")); // "стульев"

// Функция должна работать с любым словом и любым целым положительным числом.
// Все аргументы, которые будут передаваться функции будут верны.

const number = Number(prompt("Введите число"));
const firstWord = prompt("Введите слово в именительном падеже");
const secondWord = prompt("Введите слово в родительном падеже");
const thirdWord = prompt("Введите слово в родительном падеже (множественное число)");

function wordSelection (number, firstWord, secondWord, thirdWord) {
  if (number < 100) {
   if (number % 10 === 1) {
    return firstWord;
  }
  else if (number % 10 > 1 && number % 10 < 5) {
    return secondWord;
  }
  else {
    return thirdWord;
  }
}
else {  
if (number % 100 === 1) {
    return firstWord;
  }
  else if (number % 100 > 1 && number % 100 < 5) {
    return secondWord;
  }
  else {
    return thirdWord;
  }
}
}

console.log(wordSelection (number, firstWord, secondWord, thirdWord));