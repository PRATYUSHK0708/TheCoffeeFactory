import espresso from '../../src/assets/espresso.jpg'
import affogato from '../../src/assets/affogato.jpg'
import americano from '../../src/assets/americano.jpg'
import cappuccino from '../../src/assets/cappuccino.jpg'
import caramelmacchiato from '../../src/assets/caramelmacchiato.jpg'
import chocolatecoldbrew from '../../src/assets/chocolatecoldbrew.jpg'
import cinnamonlatte from '../../src/assets/cinnamonlatte.jpg'
import coldbrew from '../../src/assets/coldbrew.jpg'
import doubleEspresso from '../../src/assets/doubleEspresso.jpg'
import flatwhite from '../../src/assets/flatwhite.jpg'
import frappuccino from '../../src/assets/frappuccino.jpg'
import hazelnutlatte from '../../src/assets/hazelnutlatte.jpg'
import icedlatte from '../../src/assets/icedlatte.jpg'
import vanellalatte from '../../src/assets/vanellalatte.jpg'
import latte from '../../src/assets/latte.jpg'
import icedmocha from '../../src/assets/icedmocha.jpg'
import mocha from '../../src/assets/mocha.jpg'
import pumpkinspicelatte from '../../src/assets/pumpkinspicelatte.jpg'
import whitechocolatemocha from '../../src/assets/whitechocolatemocha.jpg'
import irishcoffe from '../../src/assets/irishcoffe.jpg'

const coffeeProducts = [
  {
    id: 1,
    name: 'Espresso',
    category: 'Hot Coffee',
    image: espresso,
    price: 180,
    offerPrice: 150,
  },
  {
    id: 2,
    name: 'Double Espresso',
    category: 'Hot Coffee',
    image: doubleEspresso,
    price: 210,
    offerPrice: null,
  },
  {
    id: 3,
    name: 'Cappuccino',
    category: 'Hot Coffee',
    image: cappuccino,
    price: 220,
    offerPrice: 199,
  },
  {
    id: 4,
    name: 'Latte',
    category: 'Hot Coffee',
    image: latte,
    price: 240,
    offerPrice: null,
  },
  {
    id: 5,
    name: 'Americano',
    category: 'Hot Coffee',
    image: americano,
    price: 160,
    offerPrice: 140,
  },
  {
    id: 6,
    name: 'Flat White',
    category: 'Hot Coffee',
    image: flatwhite,
    price: 230,
    offerPrice: null,
  },
  {
    id: 7,
    name: 'Mocha',
    category: mocha,
    image: mocha,
    price: 280,
    offerPrice: 249,
  },
  {
    id: 8,
    name: ' Chocolate Mocha',
    category: 'Special Coffee',
    image: whitechocolatemocha,
    price: 310,
    offerPrice: 279,
  },
  {
    id: 9,
    name: 'Caramel Macchiato',
    category: 'Flavoured Coffee',
    image: caramelmacchiato,
    price: 300,
    offerPrice: 269,
  },
  {
    id: 10,
    name: 'Hazelnut Latte',
    category: 'Flavoured Coffee',
    image: hazelnutlatte,
    price: 290,
    offerPrice: 259,
  },
  {
    id: 11,
    name: 'Vanilla Latte',
    category: 'Flavoured Coffee',
    image: vanellalatte,
    price: 270,
    offerPrice: null,
  },
  {
    id: 12,
    name: 'Cold Brew',
    category: 'Cold Coffee',
    image: coldbrew,
    price: 250,
    offerPrice: 220,
  },
  {
    id: 13,
    name: 'Iced Latte',
    category: 'Cold Coffee',
    image: icedlatte,
    price: 260,
    offerPrice: null,
  },
  {
    id: 14,
    name: 'Iced Mocha',
    category: 'Cold Coffee',
    image: icedmocha,
    price: 290,
    offerPrice: 260,
  },
  {
    id: 15,
    name: 'Frappuccino',
    category: 'Cold Coffee',
    image: frappuccino,
    price: 320,
    offerPrice: 289,
  },
  {
    id: 16,
    name: 'Irish Coffee',
    category: 'Premium Coffee',
    image: irishcoffe ,
    price: 350,
    offerPrice: null,
  },
  {
    id: 17,
    name: 'Affogato',
    category: 'Premium Coffee',
    image: affogato,
    price: 340,
    offerPrice: 310,
  },
  {
    id: 18,
    name: 'Pumpkin Spice Latte',
    category: 'Seasonal Coffee',
    image: pumpkinspicelatte,
    price: 330,
    offerPrice: 299,
  },
  {
    id: 19,
    name: 'Cinnamon Latte',
    category: 'Seasonal Coffee',
    image: cinnamonlatte,
    price: 275,
    offerPrice: null,
  },
  {
    id: 20,
    name: 'Chocolate Cold Brew',
    category: 'Cold Coffee',
    image: chocolatecoldbrew,
    price: 310,
    offerPrice: 280,
  }
];

export default coffeeProducts;
