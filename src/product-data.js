/*
const PRODUCT_DATA = [
  {
    title: 'Chairs',
    titleImage:
      'https://images.pexels.com/photos/8453807/pexels-photo-8453807.jpeg?cs=srgb&dl=pexels-cottonbro-8453807.jpg&fm=jpg',
    items: [
      {
        id: 1,
        name: 'Landskrona',
        imageUrl: 'https://ibb.co/FBHfwZq',
        price: 499,
      },
      {
        id: 2,
        name: 'Strandmon',
        imageUrl: 'https://ibb.co/QpYmGTC',
        price: 399,
      },
      {
        id: 3,
        name: 'Odger',
        imageUrl: 'https://ibb.co/Vw8z9Nh',
        price: 799,
      },
      {
        id: 4,
        name: 'Soderhamn',
        imageUrl: 'https://ibb.co/YXCq5Y7',
        price: 660,
      },
      {
        id: 5,
        name: 'Landskrona',
        imageUrl: 'https://ibb.co/FBHfwZq',
        price: 499,
      },
      {
        id: 6,
        name: 'Strandmon',
        imageUrl: 'https://ibb.co/QpYmGTC',
        price: 399,
      },
      {
        id: 7,
        name: 'Odger',
        imageUrl: 'https://ibb.co/Vw8z9Nh',
        price: 799,
      },
      {
        id: 8,
        name: 'Soderhamn',
        imageUrl: 'https://ibb.co/YXCq5Y7',
        price: 660,
      },
    ],
  },
  {
    title: 'Sofas',
    items: [
      {
        id: 9,
        name: 'Adidas NMD',
        imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
        price: 220,
      },
      {
        id: 10,
        name: 'Adidas Yeezy',
        imageUrl: 'https://i.ibb.co/dJbG1cT/yeezy.png',
        price: 280,
      },
      {
        id: 11,
        name: 'Black Converse',
        imageUrl: 'https://i.ibb.co/bPmVXyP/black-converse.png',
        price: 110,
      },
      {
        id: 12,
        name: 'Nike White AirForce',
        imageUrl: 'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png',
        price: 160,
      },
      {
        id: 13,
        name: 'Nike Red High Tops',
        imageUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
        price: 160,
      },
      {
        id: 14,
        name: 'Nike Brown High Tops',
        imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
        price: 160,
      },
      {
        id: 15,
        name: 'Air Jordan Limited',
        imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
        price: 190,
      },
      {
        id: 16,
        name: 'Timberlands',
        imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
        price: 200,
      },
    ],
  },
  {
    title: 'Desks',
    items: [
      {
        id: 17,
        name: 'Black Jean Shearling',
        imageUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
        price: 125,
      },
      {
        id: 18,
        name: 'Blue Jean Jacket',
        imageUrl: 'https://i.ibb.co/mJS6vz0/blue-jean-jacket.png',
        price: 90,
      },
      {
        id: 19,
        name: 'Grey Jean Jacket',
        imageUrl: 'https://i.ibb.co/N71k1ML/grey-jean-jacket.png',
        price: 90,
      },
      {
        id: 20,
        name: 'Brown Shearling',
        imageUrl: 'https://i.ibb.co/s96FpdP/brown-shearling.png',
        price: 165,
      },
      {
        id: 21,
        name: 'Tan Trench',
        imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
        price: 185,
      },
      {
        id: 22,
        name: 'Tan Trench',
        imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
        price: 185,
      },
      {
        id: 23,
        name: 'Tan Trench',
        imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
        price: 185,
      },
      {
        id: 24,
        name: 'Tan Trench',
        imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
        price: 185,
      },
    ],
  },
];

export default PRODUCT_DATA;
*/

const PRODUCT_DATA = {
  chairsTitleImg:
    'https://images.pexels.com/photos/8453807/pexels-photo-8453807.jpeg?cs=srgb&dl=pexels-cottonbro-8453807.jpg&fm=jpg',

  sofasTitleImg:
    'https://www.ikea.com/in/en/images/products/friheten-corner-sofa-bed-with-storage-skiftebo-dark-grey__0779005_ph163058_s5.jpg?f=s',

  desksTitleImg:
    'https://i.pinimg.com/736x/dc/d3/38/dcd338d735a1597c74fbbf5e95667986.jpg',

  chairs: [
    {
      id: 1,
      name: 'Landskrona',
      imageUrl: 'https://i.ibb.co/9cbqcdC/Product-image.png',
      price: 499,
    },
    {
      id: 2,
      name: 'Strandmon',
      imageUrl: 'https://i.ibb.co/ZhLNSkC/Product-image-1.png',
      price: 399,
    },
    {
      id: 3,
      name: 'Odger',
      imageUrl: 'https://i.ibb.co/YfgvyTV/Product-image-2.png',
      price: 799,
    },
    {
      id: 4,
      name: 'Soderhamn',
      imageUrl: 'https://i.ibb.co/8bGxyh5/Product-image-3.png',
      price: 660,
    },
    {
      id: 5,
      name: 'Landskrona',
      imageUrl: 'https://i.ibb.co/9cbqcdC/Product-image.png',
      price: 499,
    },
    {
      id: 6,
      name: 'Strandmon',
      imageUrl: 'https://i.ibb.co/ZhLNSkC/Product-image-1.png',
      price: 399,
    },
    {
      id: 7,
      name: 'Odger',
      imageUrl: 'https://i.ibb.co/YfgvyTV/Product-image-2.png',
      price: 799,
    },
    {
      id: 8,
      name: 'Soderhamn',
      imageUrl: 'https://i.ibb.co/8bGxyh5/Product-image-3.png',
      price: 660,
    },
  ],
};

export default PRODUCT_DATA;
