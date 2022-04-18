// Необходимо вывести в консоль массив продуктов в котором есть хоть одна фотография используя метод filter. Исходные данные - массив products.
// Необходимо отсортировать массив products используя метод sort по цене, начиная с самой маленькой, заканчивая самой большой ценой, после чего вывести отсортированный массив в консоль.

const products = [
    {
      id: 3,
      price: 127,
      photos: [
        "1.jpg",
        "2.jpg",
      ],
    },
    {
      id: 5,
      price: 499,
      photos: [],
    },
    {
      id: 10,
      price: 26,
      photos: [
        "3.jpg",
      ],
    },
    {
      id: 8,
      price: 78,
    },
  ];

  // console.log(products.filter(
  //   product => "photos" in product && product.photos.length !== 0
  // )); 
 const productsFilter = products.filter(
   item => "photos" in item && item.photos.length !== 0
   );
 console.log(productsFilter);

console.log(products.sort((p1, p2) => {
  if (p1.price > p2.price) {
    return 1;
  } else if (p1.price < p2.price) {
    return -1;
  }
  return 0;
}));