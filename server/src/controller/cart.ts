import { Request, Response } from "express";
import { prisma } from "..";

export async function addToCart(req: Request, res: Response): Promise<void> {
  const { userId, productId, qty } = req.body;
  console.log('test', req.body);
  

  try {
    const userExists = await prisma.user.findUnique({
      where: { id: userId },
    });
    if (!userExists) {
      res.status(404).json({ error: "User not found" });
      return;
    }
    const cartItem = await prisma.cart.upsert({
      where: {
        user_id_product_id: {
          user_id: userId,
          product_id: productId,
        },
      },
      update: {
        qty: {
          increment: qty,
        },
      },
      create: {
        user_id: userId,
        product_id: productId,
        qty,
      },
    });
    res.json(cartItem);
  } catch (error) {
    console.error("Error adding to cart:", error);
    res.status(500).json({ error: "Unable to add products to cart" });
  }
}

export async function updateCartItem(
  req: Request,
  res: Response
): Promise<void> {
  const { userId, productId, qty } = req.body;

  try {
    const updatedCartItem = await prisma.cart.update({
      where: {
        user_id_product_id: {
          user_id: userId,
          product_id: productId,
        },
      },
      data: { qty },
    });
    res.json(updatedCartItem);
  } catch (error) {
    res.status(500).json({ error: "Unable to update products in cart" });
  }
}

export async function deleteFromCart(
  req: Request,
  res: Response
): Promise<void> {
  const { userId, productId } = req.body;

  try {
    await prisma.cart.delete({
      where: {
        user_id_product_id: {
          user_id: userId,
          product_id: productId,
        },
      },
    });
    res.json({ message: "Product has been removed from cart" });
  } catch (error) {
    res.status(500).json({ error: "Cannot remove products from cart" });
  }
}

export async function createOrder(req: Request, res: Response): Promise<void> {
  const { userId, items, shippingCost } = req.body;

  try {
    const numericUserId = parseInt(userId);
    const numericShippingCost = parseFloat(shippingCost);
    const orderDetails = await Promise.all(
      items.map(async (item: { productId: number; quantity: number }) => {
        const product = await prisma.product.findUnique({
          where: { id: item.productId },
          select: { price: true },
        });
        return {
          product_id: item.productId,
          quantity: item.quantity,
          price: product?.price || 0,
        };
      })
    );

    const order = await prisma.orderProduct.create({
      data: {
        user_id: numericUserId,
        status_order: "waiting_for_payment",
        shipping_cost: numericShippingCost,
        orderdetail: {
          create: orderDetails,
        },
        payment_img: "",
      },
      include: {
        orderdetail: true,
      },
    });

    res.json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unable to create new orders" });
  }
}
