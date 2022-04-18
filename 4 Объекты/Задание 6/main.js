// Рассчитайте сумму всех значений данного объекта.

const numbers = {
key1: {
keyin1: 1,
keyin2: 2,
keyin3: 3,
},
key2: {
keyin1: 4,
keyin2: 5,
keyin3: 6,
},
}

let sum = 0;

for (let item in numbers) {
    sum += Object.values(numbers[item]).reduce((a, b) => a + b);
}

console.log(sum);



// let sum = 0
// console.log(Object.keys(numbers).length)

// for (let i = 0; i < Object.keys(numbers).length; i++) {
//     if (typeof numbers[i] === Number) {
//     sum += numbers[i];
//     } else {
//     for (let j = 0; j < Object.keys(numbers[i]).length; j++) {
//         sum += (numbers[i])[j];
//         console.log(sum)
// }
//     }
// }

// values1 = Object.values(numbers);
// values2 = Object.values(values1);
// values3 = Object.values(values2);
// values4 = Object.values(values3);


// console.log(values4);

// console.log(sum);