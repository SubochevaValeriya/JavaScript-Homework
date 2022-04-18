const number = prompt('Введите число');
const units = number%10
const dozens = ((number % 100) - units)/10
const hundreds = ((number % 1000) - dozens*10 - units)/100
console.log(`В числе ${number} количество сотен: ${hundreds}, десятков: ${dozens}, единиц: ${units}`);