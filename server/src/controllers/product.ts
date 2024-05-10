import { Response, Request, NextFunction } from "express";
import { prisma } from "..";
import { Prisma } from "@prisma/client";
import { ReqUser } from "../middlewares/auth-middleware";

export const productController = {
  async getProducts(req: Request, res: Response, next: NextFunction) {
    try {
      const { product_name, category_name } = req.query;
      const products = await prisma.product.findMany({
        include: {
          user: {
            select: {
              id: true,
              email: true,
              first_name: true,
              last_name: true,
            },
          },
          categories: {
            select: {
              id: true,
              category_name: true,
            },
          },
        },
        where: {
          AND: [
            {
              categories: {
                category_name: {
                  contains: String(category_name).toLowerCase(),
                },
              },
            },
            {
              product_name: {
                contains: String(product_name).toLowerCase(),
              },
            },
          ],
        },
      });
      res.send({
        success: true,
        result: products,
        message: "Get Product is success",
      });
    } catch (error) {
      next(error);
    }
  },
  // export const productController = {
  //   async getProducts(req: Request, res: Response, next: NextFunction) {
  //     try {
  //       const { image_url, name } = req.query;

  //       let products;

  //       const cachedData = 0;

  //       if (client.status != "end")
  //         await client.get(String(name)).catch((err) => {
  //           return 0;
  //         });

  //       if (!cachedData) {
  //         products = await prisma.product.findMany({
  //           include: {
  //             user: {
  //               select: {
  //                 id: true,
  //                 email: true,
  //                 first_name: true,
  //                 last_name: true,
  //               },
  //             },
  //           },
  //           where: {
  //             name: {
  //               contains: String(name),
  //             },
  //           },
  //         });
  //         if (client.status != "end")
  //           await client.set(
  //             String(name),
  //             JSON.stringify(products),
  //             "EX",
  //             10
  //           );
  //       }

  //       res.send({
  //         success: true,
  //         result: JSON.parse(String(cachedData)) || products,
  //       });
  //     } catch (error) {
  //       next(error);
  //     }
  //   },

  async getProductById(req: Request, res: Response, next: NextFunction) {
    try {
      const products = await prisma.product.findUnique({
        include: {
          user: {
            select: {
              id: true,
              email: true,
              first_name: true,
              last_name: true,
            },
          },
        },
        where: {
          id: Number(req.params.id),
        },
      });

      res.send({
        success: true,
        result: products,
        message: "Get Product by Id is success",
      });
    } catch (error) {
      next(error);
    }
  },
  //   async getProductById(req: Request, res: Response, next: NextFunction) {
  //     try {
  //       const products = await prisma.product.findUnique({
  //         include: {
  //           user: {
  //             select: {
  //               id: true,
  //               email: true,
  //               first_name: true,
  //               last_name: true,
  //             },
  //           },
  //           stock: {
  //             select: {
  //               stock_qty: true,
  //             },
  //             where: {
  //               status: "Available",
  //             },
  //           },
  //         },
  //         where: {
  //           id: Number(req.params.id),
  //         },
  //       });

  //       res.send({
  //         success: true,
  //         result: products,
  //       });
  //     } catch (error) {
  //       next(error);
  //     }
  //   },

  async addProduct(req: ReqUser, res: Response, next: NextFunction) {
    try {
      const { product_name, price, categories, description } = req.body;

      const newProduct: Prisma.ProductCreateInput = {
        product_name,
        image_url: String(req.file?.fieldname),
        price,
        description,
        categories: {
          connect: {
            id: Number(categories),
          },
        },
        user: {
          connect: {
            id: 1,
          },
        },
      };

      await prisma.product.create({
        data: newProduct,
      });

      res.send({
        success: true,
        message: "Adding New Product",
      });
    } catch (error) {
      next(error);
    }
  },
  //   async addProduct(req: ReqUser, res: Response, next: NextFunction) {
  //     try {
  //       const { name, description, price } = req.body;
  //       const newProduct: Prisma.ProductCreateInput = {
  //         name,
  //         image_url: req.file?.filename,
  //         price,
  //         description,
  //         user: {
  //           connect: {
  //             id: req.user?.id,
  //           },
  //         },
  //       };

  //       await prisma.product.create({
  //         data: newProduct,
  //       });
  //       res.send({
  //         success: true,
  //         message: "data berhasil ditambahkan",
  //       });
  //     } catch (error) {
  //       next(error);
  //     }
  //   },
  // };
  async editProduct(req: Request, res: Response, next: NextFunction) {
    try {
      const { product_name, image_url, price, description } = req.body;

      const editProduct: Prisma.ProductUpdateInput = {
        product_name,
        image_url,
        price,
        description,
        user: {
          connect: {
            id: Number(req.params.id),
          },
        },
      };

      if (req.file?.filename)
        editProduct.image_url = String(req.file?.filename);

      await prisma.product.update({
        data: editProduct,
        where: {
          id: Number(req.params.id),
        },
      });

      res.send({
        success: true,
        message: "Edited",
      });
    } catch (error) {
      next(error);
    }
  },
  //   async editProduct(req: Request, res: Response, next: NextFunction) {
  //     try {
  //       const { name, image_url, price, description } = req.body;
  //       const editProduct: Prisma.ProductUpdateInput = {
  //         name,
  //         price,
  //         description,
  //       };
  //       console.log(req.file);

  //       await prisma.product.update({
  //         data: editProduct,
  //         where: {
  //           id: Number(req.params.id),
  //         },
  //       });
  //       res.send({
  //         success: true,
  //         message: "data berhasil diedit",
  //       });
  //     } catch (error) {
  //       next(error);
  //     }
  //   },

  async deleteProduct(req: Request, res: Response, next: NextFunction) {
    try {
      await prisma.product.delete({
        where: {
          id: Number(req.params.id),
        },
      });
      res.send({
        success: true,
        message: "DELETED",
      });
    } catch (error) {
      next(error);
    }
  },
};
//   async deleteProduct(req: Request, res: Response, next: NextFunction) {
//     try {
//       await prisma.product.delete({
//         where: {
//           id: Number(req.params.id),
//         },
//       });
//       res.send({
//         success: true,
//         message: "data berhasil dihapus",
//       });
//     } catch (error) {
//       next(error);
//     }
//   },
