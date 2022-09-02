/* How to extract unique values from an Array of objects */
const cart = [
  {
    id: 200455732,
    image:
      "https://images.asos-media.com/products/converse-ch…sion-jacquard-sneakers-in-black/200455732-1-black",
    price: 85,
    title: "Converse Chuck 70 Ox Surface Fusion jacquard sneakers in black",
  },
  {
    id: 200455732,
    image:
      "https://images.asos-media.com/products/converse-ch…sion-jacquard-sneakers-in-black/200455732-1-black",
    price: 85,
    title: "Converse Chuck 70 Ox Surface Fusion jacquard sneakers in black",
  },
  {
    id: 200520282,
    image:
      "https://images.asos-media.com/products/converse-ch…-knit-sneakers-in-bright-poppy/200520282-1-orange",
    price: 95,
    title: "Converse Chuck 70 Hi Renew knit sneakers in bright poppy",
  },
  {
    id: 200524007,
    image:
      "https://images.asos-media.com/products/vans-classi…neakers-in-black-and-gray/200524007-1-blackpewter",
    price: 55,
    title: "Vans Classic Checkerboard slip-on sneakers in black and gray",
  },
  {
    id: 200524007,
    image:
      "https://images.asos-media.com/products/vans-classi…neakers-in-black-and-gray/200524007-1-blackpewter",
    price: 55,
    title: "Vans Classic Checkerboard slip-on sneakers in black and gray",
  },
];

const newCart = [];

cart.forEach((elem, idx) => {
  if (!newCart.some((item) => item.id == elem.id)) {
    let repetition = cart.filter((data) => elem.id === data.id);
    elem.cantity = repetition.length;
    newCart.push(elem);
  }
});

console.log(newCart);

const CONTRACTOR = "provider-management.contractor";
const PARTNER_MANAGER = "provider-management.partner-manager";

const roles = ["provider-management.contractor"];

const consultantTypes = [
  { id: 1, name: "CONTRACT" },
  { id: 2, name: "PARTNER" },
];

const result =
  consultantTypes.find((x) =>
    roles.some((y) => y.includes(x.name.toLowerCase()))
  )?.id ?? "no hay";

console.log(result);

/************** */
const a = [1, 2];
const b = [
  { id: 1, name: "asd" },
  { id: 2, name: "dkdkd" },
  { id: 3, name: "vvv" },
];

let c = b.filter((data) => !a.includes(data.id));

console.log(c);

// Exercises converting values to booleans
Boolean(undefined); // => false
Boolean(null); // => false
Boolean(0); // => false
Boolean(''); // => false
Boolean([]); // => true
Boolean({}); // => true

var a_2 = 25;
a_2 ||= 23;
console.log(a_2);

var a_3 = null;
a_3 ??= 200;
console.log(a_3);

var a_4 = 2;
a_4 &&= 1;
console.log(a_4);

/***
 * ARRAY METHODS
 * - splice - remove elements from an array
 * - slice - copy elements from an array
 * - map - transform elements in an array
 * - filter - filter elements in an array
 * - reduce - reduce elements in an array
 * - find
 * - findIndex
 * - fill
 * - some
 * - every
 * - forEach
 * - sort
 * - reverse
 * - join
 * - push
 * - pop
 * - unshift
 * - shift
 * - indexOf
 * - lastIndexOf
 * - includes
 * - concat
 */
var booksColor = [{ name: "Red", price: 10 }, { name: "Blue", price: 20 }];
var boooksPlusAuthor = booksColor.map((book) => {
  return {
    ...book,
    author: "John Doe",
  };
});
var CheapBooks = booksColor.filter((book) => book.price < 15);
console.log(CheapBooks);

/***
 * SPECIALS ITERATORS AND GENERATORS
 * - for...of
 * - Array.from
 * - Array.of
 * - Array.prototype.entries
 * - Array.prototype.keys
 * - Array.prototype.values
 * - 
 */
