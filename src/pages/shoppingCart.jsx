import React, { useState, useEffect } from "react";
import axios from "axios";
import ButtonWhite from "../components/buttonWhite/ButtonWhite";
import "../assets/css/shoppingCart.css";
import { jwtDecode } from "jwt-decode";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function ShoppingCart() {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const accountData = JSON.parse(sessionStorage.getItem("account"));
        const token = accountData ? accountData.token : null;

        if (token) {
          const decodedToken = jwtDecode(token);
          const userId = decodedToken.id;
          const response = await axios.post(
            "http://127.0.0.1:8000/api/user/cart",
            {
              id: userId,
            }
          );
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

  const updateCartQuantity = async (cartId, newQuantity) => {
    try {
      await axios.put(`http://127.0.0.1:8000/api/user/cart/${cartId}`, {
        product_quantity: newQuantity,
      });
    } catch (error) {
      console.error("Error updating cart data:", error);
    }
  };

  const deleteCartItem = async (cartId) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/user/cart/${cartId}`);
      setCart((prevCart) => prevCart.filter((item) => item.id !== cartId));
      toast.success("Product removed successfully");
    } catch (error) {
      console.error("Error deleting cart item:", error);
      toast.error("Failed to remove item");
    }
  };

  const increaseQuantity = (productId) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) =>
        item.product_id === productId
          ? { ...item, product_quantity: item.product_quantity + 1 }
          : item
      );

      const updatedItem = updatedCart.find(
        (item) => item.product_id === productId
      );
      updateCartQuantity(updatedItem.id, updatedItem.product_quantity);

      return updatedCart;
    });
  };

  const decreaseQuantity = (productId) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) =>
        item.product_id === productId && item.product_quantity > 1
          ? { ...item, product_quantity: item.product_quantity - 1 }
          : item
      );

      const updatedItem = updatedCart.find(
        (item) => item.product_id === productId
      );
      if (updatedItem.product_quantity > 0) {
        updateCartQuantity(updatedItem.id, updatedItem.product_quantity);
      }
      return updatedCart;
    });
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

  const handleProductSelect = async (cartId, isSelected) => {
    try {
      await axios.put(`http://127.0.0.1:8000/api/user/cart/status/${cartId}`, {
        status: isSelected ? 1 : 0,
      });
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === cartId
            ? { ...item, status: isSelected ? 1 : 0, selected: isSelected }
            : item
        )
      );
      toast.success(
        `Product ${isSelected ? "selected" : "unselected"} successfully`
      );
    } catch (error) {
      console.error("Error updating product status:", error);
      toast.error("Failed to update product status");
    }
  };

  const handleCheckout = () => {
    alert("checkout");
    navigate("../order");
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  console.log("giá trị cart", cart);
  return (
    <div className="shoppingCart-page-container">
      <div className="total-checkout">
        <div className="total-cart">
          <h4 className="total-price-cart">
            Total Prices: ${totalShoppingCart()}
          </h4>
        </div>
        <div onClick={handleCheckout} className="button-cart">
          <ButtonWhite>Checkout</ButtonWhite>
        </div>
      </div>
      <div className="shoppingCart-detail">
        <ToastContainer />
        {cart.map((product) => (
          <div className="cart-item" key={product.product_id}>
            <input
              type="checkbox"
              checked={product.status === 0}
              onChange={() =>
                handleProductSelect(product.id, product.status !== 1)
              }
              name="selectedProduct"
            />
            {product.images.length > 0 && (
              <img src={product.images[0]} alt={product.product_name} />
            )}
            <div className="product-details">
              <h3>{product.product_name}</h3>
              <p>{product.description}</p> {/* Display description */}
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
                <button
                  onClick={() => deleteCartItem(product.id)}
                  className="btn btn-danger"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShoppingCart;
