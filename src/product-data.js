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
      code: 23904,
    },
    {
      id: 2,
      name: 'Strandmon',
      imageUrl: 'https://i.ibb.co/ZhLNSkC/Product-image-1.png',
      price: 399,
      code: 23904,
    },
    {
      id: 3,
      name: 'Odger',
      imageUrl: 'https://i.ibb.co/YfgvyTV/Product-image-2.png',
      price: 799,
      code: 23904,
    },
    {
      id: 4,
      name: 'Soderhamn',
      imageUrl: 'https://i.ibb.co/8bGxyh5/Product-image-3.png',
      price: 660,
      code: 23904,
    },
    {
      id: 5,
      name: 'Landskrona',
      imageUrl: 'https://i.ibb.co/9cbqcdC/Product-image.png',
      price: 499,
      code: 23904,
    },
    {
      id: 6,
      name: 'Strandmon',
      imageUrl: 'https://i.ibb.co/ZhLNSkC/Product-image-1.png',
      price: 399,
      code: 23904,
    },
    {
      id: 7,
      name: 'Odger',
      imageUrl: 'https://i.ibb.co/YfgvyTV/Product-image-2.png',
      price: 799,
      code: 23904,
    },
    {
      id: 8,
      name: 'Soderhamn',
      imageUrl: 'https://i.ibb.co/8bGxyh5/Product-image-3.png',
      price: 660,
      code: 23904,
    },
  ],

  sofas: [
    {
      id: 9,
      name: 'Stylish Corner Sofa',
      imageUrl:
        'https://static-01.daraz.com.bd/p/2a2d9e7ac21b996af798f2d40a65a1e0.jpg',
      price: 499,
      code: 23904,
    },
    {
      id: 10,
      name: 'L Shape',
      imageUrl: 'https://m.media-amazon.com/images/I/716j4-UMkKL._SL1100_.jpg',
      price: 399,
      code: 23904,
    },
    {
      id: 11,
      name: 'KLIPPAN',
      imageUrl:
        'https://www.ikea.com/in/en/images/products/klippan-2-seat-sofa-vissle-grey__0820948_pe709146_s5.jpg?f=s',
      price: 799,
      code: 23904,
    },
    {
      id: 12,
      name: 'FARLOV Sofa',
      imageUrl:
        'https://www.ikea.com/us/en/images/products/faerloev-sofa-flodafors-gray__0915314_pe784705_s5.jpg?f=s',
      price: 660,
      code: 23904,
    },
    {
      id: 13,
      name: 'Landskrona',
      imageUrl: 'https://i.ibb.co/9cbqcdC/Product-image.png',
      price: 499,
      code: 23904,
    },
    {
      id: 14,
      name: 'GRONLID',
      imageUrl:
        'https://www.ikea.com/nl/en/images/products/gronlid-3-seat-sofa-bed-ljungen-medium-grey__0621993_pe690220_s5.jpg?f=s',
      price: 399,
      code: 23904,
    },
    {
      id: 15,
      name: 'Corner sleeper',
      imageUrl:
        'https://www.ikea.com/us/en/images/products/haerlanda-corner-sleeper-sofa-5-seat-with-chaise-inseros-white__0622201_pe690386_s5.jpg',
      price: 799,
      code: 23904,
    },
    {
      id: 16,
      name: 'Curved',
      imageUrl: 'https://i.insider.com/6259986433c02a0018ca1fef?width=700',
      price: 660,
      code: 23904,
    },
  ],

  desks: [
    {
      id: 17,
      name: 'Home Office Desks',
      imageUrl:
        'https://www.ubuy.com.bd/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzFOTXBUTW9Ib0wuX0FDX1NMMTIwMF8uanBn.jpg',
      price: 499,
      code: 23904,
    },
    {
      id: 18,
      name: 'Contemporary Desk',
      imageUrl:
        'https://www.ubuy.com.bd/productimg/?image=aHR0cHM6Ly9pNS53YWxtYXJ0aW1hZ2VzLmNvbS9hc3IvMWMzOWE0OGMtODFiZC00MmRhLWI0MjUtODdmNmZlZmU1YTk2XzEuZmVmNTZmZGRlOGJmYjBlZGZlNjJmMGE4NTI1NGUxYzUuanBlZw.jpg',
      price: 399,
      code: 23904,
    },
    {
      id: 19,
      name: 'Computer Desk',
      imageUrl:
        'https://www.rollingstone.com/wp-content/uploads/2021/08/best-computer-desks-1.png?resize=1800,1200&w=1800',
      price: 799,
    },
    {
      id: 20,
      name: 'Minimal Desk',
      imageUrl:
        'https://pyxis.nymag.com/v1/imgs/a53/4b7/bc57fe115794ac92df71914a1c75e08d82-desk-09.2x.rsquare.w600.jpg',
      price: 660,
      code: 23904,
    },
    {
      id: 21,
      name: 'Standing Desk',
      imageUrl:
        'https://www.furniturebox.co.uk/media/catalog/product/cache/e6f73c9c56e48c253d4a516a242fbc14/c/a/cambridge_desk.jpg',
      price: 499,
      code: 23904,
    },
    {
      id: 22,
      name: 'Office Desk',
      imageUrl:
        'https://www.calibre-furniture.co.uk/images/content/13_1_1024x750.jpg?01:35:52&_e=.jpg',
      price: 399,
      code: 23904,
    },
    {
      id: 23,
      name: 'Gaming Desk',
      imageUrl:
        'https://cdn.shopify.com/s/files/1/0571/9087/5336/products/LR_03_22_2021_RPP_RestRelaxGaming_Desk1_0068_1050x700.jpg?v=1630352737',
      price: 799,
      code: 23904,
    },
    {
      id: 24,
      name: 'Home Desk',
      imageUrl:
        'https://www.ikea.com/us/en/images/products/lagkapten-alex-desk-white__1028366_pe835304_s5.jpg?f=s',
      price: 660,
      code: 23904,
    },
  ],
};

export default PRODUCT_DATA;
