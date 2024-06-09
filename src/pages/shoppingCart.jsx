import React, { useState } from "react";
import ButtonWhite from "../components/buttonWhite/ButtonWhite";
import "../assets/css/shoppingCart.css";

const Cart = [
  {
    id: 1,
    name: "Product 1",
    description: "This is the first product",
    price: 10,
    image:
      "https://images.squarespace-cdn.com/content/v1/53883795e4b016c956b8d243/1551438228969-H0FPV1FO3W5B0QL328AS/chup-anh-thuc-an-1.jpg",
    quantity: 1,
  },
  {
    id: 2,
    name: "Product 2",
    description: "This is the second product",
    price: 20,
    image:
      "https://assets.tronhouse.vn/59185068-4c44-404a-a5b6-493d1d50d13d/origin/chup-anh-mon-an-4.jpeg",
    quantity: 1,
  },
  {
    id: 3,
    name: "Product 3",
    description: "This is the third product",
    price: 30,
    image:
      "https://lavenderstudio.com.vn/wp-content/uploads/2017/03/chup-san-pham.jpg",
    quantity: 1,
  },
];

function ShoppingCart() {
  const [cart, setCart] = useState(Cart);

  const increaseQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const totalShoppingCart = () => {
    return cart
      .reduce(
        (total, shoppingCart) =>
          total + shoppingCart.price * shoppingCart.quantity,
        0
      )
      .toFixed(2);
  };

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
          <div className="cart-item" key={product.id}>
            <input type="checkbox" name="selectedProduct" />
            <img src={product.image} alt={product.name} />
            <div className="product-details">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
              <div className="quantity-control">
                <button
                  className="circle"
                  onClick={() => decreaseQuantity(product.id)}
                >
                  -
                </button>
                <div className="quantity">{product.quantity}</div>
                <button
                  className="circle"
                  onClick={() => increaseQuantity(product.id)}
                >
                  +
                </button>
              </div>
              <div className="button-cart-remove ">
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
