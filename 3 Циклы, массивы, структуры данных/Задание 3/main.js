// Создайте массив, состоящий из 5 произвольных значений, которые генерируются программой (диапазон значений от 0 до 10).

// Возведите каждый элемент этого массива в квадрат.

const arr = [];

for (let i = 0; i < 5; i++) {
  const number = Math.round(Math.random() * 10);
  arr.push(number);
}

console.log(arr);

arr2 = arr.map(i => i * i);

console.log(arr2);
