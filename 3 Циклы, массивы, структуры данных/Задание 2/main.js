// Дан массив [1, 2, 3, 4, 5, 6, 7]

// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

const arr = [1, 2, 3, 4, 5, 6, 7];
arr2 = [].concat(arr.slice(0, 3), arr.slice(5, 7));
console.log(arr2);