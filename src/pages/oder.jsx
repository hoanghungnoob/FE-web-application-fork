import React, { useState } from "react";
import "../assets/css/order.css";

function Order() {
  const [formOrder, setFormOrder] = useState({
    userName: "",
    email: "",
    phoneNumber: "",
    address: "",
    paymentMethod: "Cash On Delivery",
  });

  const [showMore, setShowMore] = useState(false);

  const products = [
    {
      id: 1,
      name: "Black coffee",
      price: 5.00,
      imageUrl: "https://top10tphcm.com/wp-content/uploads/2023/06/tho-ve-cafe-nhung-cau-tho-ve-ca-phe-hay-nhat-e1686815769857.jpg",
    },
    {
      id: 2,
      name: "White coffee",
      price: 3.00,
      imageUrl: "https://vinaly.vn/wp-content/uploads/2023/10/hinh-anh-ly-cafe-den-da-dep-9.jpg",
    },
    {
      id: 3,
      name: "White coffee",
      price: 3.00,
      imageUrl: "https://gcs.tripi.vn/public-tripi/tripi-feed/img/474066EHG/anh-dep-ben-ly-cafe-den_110730392.jpg",
    },
    {
      id: 4,
      name: "Espresso",
      price: 4.00,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormOrder({
      ...formOrder,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order submitted", formOrder);
  };

  const calculateTotal = () => {
    return products.reduce((total, product) => total + product.price, 0).toFixed(2);
  };

  const handleViewMore = () => {
    setShowMore(!showMore);
  };

  const displayedProducts = showMore ? products : products.slice(0, 3);

  return (
    <div className="order-page-container">
      <div className="order-user-information">
        <h4 className="order-title-shipping">Shipping Information</h4>
        <form className="order-form-info" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="userName" className="order-input-label">User Name</label>
            <input
              type="text"
              name="userName"
              value={formOrder.userName}
              onChange={handleChange}
              required
              className="order-input"
            />
          </div>
          <div>
            <label htmlFor="email" className="order-input-label">Email</label>
            <input
              type="email"
              name="email"
              value={formOrder.email}
              onChange={handleChange}
              required
              className="order-input"
            />
          </div>
          <div>
            <label htmlFor="phoneNumber" className="order-input-label">Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              value={formOrder.phoneNumber}
              onChange={handleChange}
              required
              className="order-input"
            />
          </div>
          <div>
            <label htmlFor="address" className="order-input-label">Address</label>
            <input
              type="text"
              name="address"
              value={formOrder.address}
              onChange={handleChange}
              required
              className="order-input"
            />
          </div>
          <h4 className="order-title-payment">Payment Method</h4>
          <div>
            <label className="order-radio-payment">
              <input
                type="radio"
                name="paymentMethod"
                value="Cash On Delivery"
                checked={formOrder.paymentMethod === "Cash On Delivery"}
                onChange={handleChange}
              />
              COD
            </label>
          </div>
          <div>
            <label className="order-radio-payment">
              <input
                type="radio"
                name="paymentMethod"
                value="MOMO"
                checked={formOrder.paymentMethod === "MOMO"}
                onChange={handleChange}
              />
              MOMO
            </label>
          </div>
          <button type="submit" className="order-button-submit">Order</button>
        </form>
      </div>
      <div className="order-summary">
        <h4 className="order-title-total">
          Total Amount: <span className="money">${calculateTotal()}</span>
        </h4>
        {displayedProducts.map((product) => (
          <div key={product.id} className="order-product">
            <img src={product.imageUrl} alt={product.name} className="order-product-image" />
            <span className="order-product-name">{product.name}</span>
            <span className="order-product-price">${product.price.toFixed(2)}</span>
          </div>
        ))}
        {products.length > 3 && (
          <button onClick={handleViewMore} className="order-button-view-more">
            {showMore ? "View Less" : "View More"}
          </button>
        )}
      </div>
    </div>
  );
}

export default Order;
