// Задание 1

// Для кода необходимо дать комментарии, почему мы
// получаем такой результат (в свободной форме).

// Подсказка. Чтобы лучше разобраться возьмите этот код и запустите в отладчике в
// браузере со включенными точками остановки.

let a = 1, b = 1, c, d; // 1 1 undefined undefined

  /*
++ - оператор увеличения на единицу, а будет равно 2, с = a = 2
   */
console.log(c);
  c = ++a;
  console.log(c); // 2

  /*
b увеличится на 1 и будет равно 2, переменная d будет равна переменной b до увеличения (оператор постинкримента)
   */
  d = b++;
  console.log(d); // 1

  /*
  a = 2 + 1 = 3 (унарный оператор увеличения на 1), c = 2 + 3 = 5
   */
  c = 2 + ++a;
  console.log(c); // 5

  /*
b = 2 + 1 = 3 (но оператор постинкремента), поэтому используем предыдущее значение b: d = 2 + 2 = 4
   */
  d = 2 + b++;
  console.log(d); // 4

  console.log(a); // 3
  console.log(b); // 3