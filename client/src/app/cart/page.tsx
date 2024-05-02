"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import router, { useRouter } from "next/router";
import Image from "next/image";
import { FaTrash } from "react-icons/fa";
import { HiMiniShoppingCart } from "react-icons/hi2";

interface CartItem {
  product_id: number;
  image_url: string;
  name: string;
  price: number;
  qty: number;
}

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const userId = 1;
  // const router = useRouter()

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/cart-items")
      .then((response) => {
        const data = response.data;
        setCartItems(data);
        const total = data.reduce(
          (acc, item) => acc + item.qty * item.product.price,
          0
        );
        setTotalPrice(total);
      })
      .catch((error) => console.error("Error fetching cart items:", error));
  }, []);

  const deleteAllCartItems = () => {
    axios
      .delete(`http://localhost:8000/api/delete-all-cart-items`, {
        data: { userId },
      })
      .then(() => {
        setCartItems([]);
      })
      .catch((error) => console.error("Error removing all cart items:", error));
  };

  const deleteCartItem = (productId: number) => {
    axios
      .delete(`http://localhost:8000/api/cart/${userId}/${productId}`)
      .then(() => {
        setCartItems((currentItems) =>
          currentItems.filter((item) => item.product_id !== productId)
        );
      })
      .catch((error) => console.error("Failed to delete cart item", error));
  };

  const updateCartItemQuantity = (productId: number, newQuantity: number) => {
    axios
      .patch(`http://localhost:8000/api/update-cart-item`, {
        userId,
        productId,
        qty: newQuantity,
      })
      .then(() => {
        setCartItems((currentItems) =>
          currentItems.map((item) =>
            item.product_id === productId ? { ...item, qty: newQuantity } : item
          )
        );
      })
      .catch((error) => console.error("Error updating cart item:", error));
  };

  const toHome = () => {
    router.push("/");
  };

  return (
    <div className="bg-white p-4 shadow-md rounded-lg max-w-6xl mx-auto mt-5">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">
          <HiMiniShoppingCart size={24} className="w-6 h-6" /> Keranjang Belanja
        </h2>
        {cartItems.length > 0 && (
          <button
            onClick={deleteAllCartItems}
            className="text-sm text-blue-500 hover:text-red-500"
          >
            <FaTrash /> Hapus Semua Produk
          </button>
        )}
      </div>

      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div
            key={item.product_id}
            className="flex items-center justify-between mb-4"
          >
            <Image
              src={item.image_url}
              alt="Product"
              width={20}
              height={20}
              className="w-20 h-20 object-cover mr-4"
            />
            <span className="font-bold">{item.product_id.name}</span>
            <span className=" font-bold">{`Rp ${item.product_id.price}`}</span>
            <div className="flex items-center">
              <button
                onClick={() =>
                  updateCartItemQuantity(item.product_id, item.qty - 1)
                }
                disabled={item.qty <= 1} // Disable jika kuantitas adalah 1 atau kurang
                className="text-lg px-3 border-r"
              >
                -
              </button>
              <span className="px-3">{item.qty}</span>
              <button
                onClick={() =>
                  updateCartItemQuantity(item.product_id, item.qty + 1)
                }
                className="text-lg px-3 border-l"
              >
                +
              </button>
              <button
                onClick={() => deleteCartItem(item.product_id)}
                className=" text-lg px-3"
              >
                <FaTrash />
              </button>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center">
          <Image
            src="/empty-cart-7359557-6024626.webp"
            width={100}
            height={100}
            alt="Empty Cart"
            className="mx-auto w-36 h-36"
          />
          <h3 className="text-lg font-semibold my-4">
            Keranjang Belanja Anda Kosong
          </h3>
          <p>
            Yuk kunjungi produk-produk terbaru dari kami yang unik dan pasti
            termurah se-Indonesia.
          </p>
          <button
            onClick={toHome}
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Mulai Belanja
          </button>
        </div>
      )}
      <div className="mt-4">
        <h3 className="text-lg font-bold">Ringkasan Belanja</h3>
        <p>{`Total Harga: Rp ${totalPrice}`}</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Metode Belanja
        </button>
      </div>
    </div>
  );
};

export default ShoppingCart;
