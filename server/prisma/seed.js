const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient({
  datasources: { db: { url: process.env.DATABASE_URL } },
});

const data = [
  {
    email: "udin@mail.com",
    password: "udin",
    first_name: "udin",
    last_name: "dong",
    gender: "male",
    avatar_url:
      "https://www.bmw.co.id/content/dam/bmw/common/all-models/m-series/m3-sedan/2023/highlights/bmw-3-series-cs-m-automobiles-sp-desktop.jpg",
    id: 1,
    role: "user",
  },
  {
    email: "admin@mail.com",
    password: "password",
    first_name: "admin",
    last_name: "biasa",
    id: 2,
    gender: "male",
    role: "admin",
    avatar_url: "",
    // product: {
    //   create: [
    //     {
    //       id: 1,
    //       name: "GOKVÄLLÅ",
    //       image_url:
    //         "https://www.ikea.co.id/dairyfarm/id/images/244/1224454_PE914963_S4.jpg",
    //       price: 69900,
    //       description: "",
    //       // categories: {
    //       //   create: {
    //       //     id: 1,
    //       //     category_name: "boneka",
    //       //   },
    //       // },
    //     },

    //     // {
    //     //   id: 2,
    //     //   product_name: "GLASIG",
    //     //   image_url:
    //     //     "https://www.ikea.co.id/dairyfarm/id/images/374/0637479_PE698309_S4.jpg",
    //     //   price: 19900,
    //     //   description: "",
    //     // },
    //     // {
    //     //   id: 3,
    //     //   product_name: "ADLAD",
    //     //   image_url:
    //     //     "https://www.ikea.co.id/dairyfarm/id/images/602/1060247_PE849857_S4.jpg",
    //     //   price: 14900,
    //     //   description: "",
    //     // },
    //     // {
    //     //   id: 4,
    //     //   product_name: "SLIPSKIVA",
    //     //   image_url:
    //     //     "https://www.ikea.co.id/dairyfarm/id/images/285/1128531_PE876613_S4.jpg",
    //     //   price: 99900,
    //     //   description: "",
    //     // },
    //     // {
    //     //   id: 5,
    //     //   product_name: "BINTJE",
    //     //   image_url:
    //     //     "https://www.ikea.co.id/dairyfarm/id/images/388/0638860_PE699222_S4.jpg",
    //     //   price: 10000,
    //     //   description: "",
    //     // },
    //   ],
    // },
  },
];

const category = [
  {
    id: 1,
    category_name: "boneka",
  },
];

const products = [
  {
    id: 1,
    name: "GOKVÄLLÅ",
    image_url:
      "https://www.ikea.co.id/dairyfarm/id/images/244/1224454_PE914963_S4.jpg",
    price: 69900,
    description: "",
    category_id: 1,
  },

  {
    id: 2,
    product_name: "GLASIG",
    image_url:
      "https://www.ikea.co.id/dairyfarm/id/images/374/0637479_PE698309_S4.jpg",
    price: 19900,
    description: "",
    category_id: 1,
  },
  {
    id: 3,
    product_name: "ADLAD",
    image_url:
      "https://www.ikea.co.id/dairyfarm/id/images/602/1060247_PE849857_S4.jpg",
    price: 14900,
    description: "",
    category_id: 1,
  },
  {
    id: 4,
    product_name: "SLIPSKIVA",
    image_url:
      "https://www.ikea.co.id/dairyfarm/id/images/285/1128531_PE876613_S4.jpg",
    price: 99900,
    description: "",
    category_id: 1,
  },
  {
    id: 5,
    product_name: "BINTJE",
    image_url:
      "https://www.ikea.co.id/dairyfarm/id/images/388/0638860_PE699222_S4.jpg",
    price: 10000,
    description: "",
    category_id: 1,
  },
];
async function main() {
  try {
    // data.map(async (user) => {
    //   const newUser = await prisma.user.create({
    //     data: user,
    //   });
    //   console.log(`Created user with id: ${newUser.id}`);
    // });
    category.map(async (c) => {
      await prisma.category.create({
        data: c,
      });
      // console.log(`Created user with id: ${newUser.id}`);
    });
    // products.map(async (products) => {
    //   await prisma.product.create({
    //     data: products,
    //   });
    // });
    console.log(`Seeding finished.`);
  } catch (error) {
    console.log(error);
  }
}

main()
  .then(() => {
    prisma.$disconnect;
  })
  .catch((err) => {
    console.log(err);
    prisma.$disconnect;
    process.exit(1);
  });
