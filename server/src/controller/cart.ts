import { Request, Response } from "express";
import { prisma } from "..";

export async function addToCart(req: Request, res: Response): Promise<void> {
  const { userId, productId, qty } = req.body;

  try {
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
    res
      .status(500)
      .json({ error: "Tidak dapat menambahkan produk ke keranjang." });
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
    res
      .status(500)
      .json({ error: "Tidak dapat memperbarui produk dalam keranjang." });
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
    res.json({ message: "Produk telah dihapus dari keranjang." });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Tidak dapat menghapus produk dari keranjang." });
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
    res.status(500).json({ error: "Tidak dapat membuat pesanan baru." });
  }
}