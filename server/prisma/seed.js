/** @format */

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient({
  datasources: { db: { url: process.env.DATABASE_URL } },
});

const data = [
  {
    email: "admin@mail.com",
    password: "$2b$10$pdGEAn.G2ocUQNpaPKK6HOsnuLgytgyO0GEY1sLcxHyPrpxVAMlf2",
    first_name: "admin",
    last_name: "",
    id: 1,
    role: "admin",
    avatar_url: "",
  },
  {
    email: "superadmin@mail.com",
    password: "$2b$10$pdGEAn.G2ocUQNpaPKK6HOsnuLgytgyO0GEY1sLcxHyPrpxVAMlf2",
    first_name: "superAdmin",
    last_name: "",
    id: 2,
    role: "superAdmin",
    avatar_url: "",
  },
];

async function main() {
  try {
    data.map(async (user) => {
      const newUser = await prisma.user.create({
        data: user,
      });
      console.log(`Created user with id: ${newUser.id}`);
    });
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
