import React, { useState, useEffect } from "react";
import axios from "axios";
import ButtonWhite from "../components/buttonWhite/ButtonWhite";
import "../assets/css/shoppingCart.css";
import {jwtDecode} from 'jwt-decode';

function ShoppingCart() {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const accountData = JSON.parse(sessionStorage.getItem("account"));
        const token = accountData ? accountData.token : null;

        if (token) {
          const decodedToken = jwtDecode(token);
          const userId = decodedToken.id;
          const response = await axios.post("http://127.0.0.1:8000/api/user/cart", {
            id: userId
          });
          setCart(response.data.success);
        } else {
          setError("No token found. Please login first.");
        }
      } catch (err) {
        console.error("Error fetching cart data:", err);
        setError("Failed to fetch cart data.");
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, []);

  const increaseQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.product_id === productId ? { ...item, product_quantity: item.product_quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.product_id === productId && item.product_quantity > 1
          ? { ...item, product_quantity: item.product_quantity - 1 }
          : item
      )
    );
  };

  const totalShoppingCart = () => {
    return cart
      .reduce(
        (total, shoppingCart) =>
          total + shoppingCart.price * shoppingCart.product_quantity,
        0
      )
      .toFixed(2);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="shoppingCart-page-container">
      <div className="total-checkout">
        <div className="total-cart">
          <h4 className="total-price-cart">
            Total Prices: ${totalShoppingCart()}
          </h4>
        </div>
        <div className="button-cart">
          <ButtonWhite children="Checkout" />
        </div>
      </div>
      <div className="shoppingCart-detail">
        {cart.map((product) => (
          <div className="cart-item" key={product.product_id}>
            <input type="checkbox" name="selectedProduct" />
            {product.images.length > 0 && (
              <img src={product.images[0]} alt={product.product_name} />
            )}
            <div className="product-details">
              <h3>{product.product_name}</h3>
              <p>Price: ${product.price}</p>
              <div className="quantity-control">
                <button
                  className="circle"
                  onClick={() => decreaseQuantity(product.product_id)}
                >
                  -
                </button>
                <div className="quantity">{product.product_quantity}</div>
                <button
                  className="circle"
                  onClick={() => increaseQuantity(product.product_id)}
                >
                  +
                </button>
              </div>
              <div className="button-cart-remove">
                <ButtonWhite children="Remove" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShoppingCart;
