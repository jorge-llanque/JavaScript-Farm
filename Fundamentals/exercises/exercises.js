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
