import React, { useEffect, useState } from "react";
import "../assets/css/order.css";
import { jwtDecode } from "jwt-decode";

function Order() {
  
  const [formOrder, setFormOrder] = useState({
    userName: "",
    email: "",
    phoneNumber: "",
    address: "",
    paymentMethod: "Cash On Delivery",
  });
  useEffect(()=>{
    const accountData = JSON.parse(sessionStorage.getItem("account"));
    const token = accountData ? accountData.token : null;
    if (token) {
      const decodedToken = jwtDecode(token);
      setFormOrder({
        ...formOrder,
        userName:decodedToken.name,
        email:decodedToken.email,
        phoneNumber:decodedToken.phone_number,
      });
    }
  },[formOrder])

  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("selectedProducts"));
    if (storedProducts) {
      setProducts(storedProducts);
      console.log("Số lượng sản phẩm trong localStorage:", storedProducts.length);
      console.log("sản phẩm trong localStorage:", storedProducts);
    }
  }, []);
  
  const [products, setProducts] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormOrder({
      ...formOrder,
      [name]: value,
    });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Order submitted", formOrder);
  // };

  const calculateTotal = () => {
    return products.reduce((total, product) => {
      return total + parseFloat(product.price) * product.product_quantity;
    }, 0).toFixed(2);
  };
  

  const handleViewMore = () => {
    setShowMore(!showMore);
  };

  const displayedProducts = showMore ? products : products.slice(0, 3);

  return (
    <div className="order-page-container">
      <div className="order-user-information">
        <h4 className="order-title-shipping">Shipping Information</h4>
        <form className="order-form-info"
        //  onSubmit={handleSubmit}
         >
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
        <hr className="mt-4"></hr>
        <div className="d-flex justify-content-around">
            <span className="order-product-name ms-3">Product Image</span>
            <span className="order-product-name ms-5">Quantity</span>
            <span className="order-product-price">Unit Price</span>
        </div>
        <hr></hr>
        {displayedProducts.map((product) => (
          <div key={product.id} className="order-product">
            <img src={product.images[0]} alt={product.name} className="order-product-image rounded-3" />
            <span className="order-product-name">{product.name}</span>
            <span className="order-product-name me-5">{product.product_quantity}</span>
            <span className="order-product-price">${product.price}</span>
          </div>
        ))}
        {products.length > 3 && (
          <button onClick={handleViewMore} className="order-button-view-more">
            {showMore ? "View Less" : "View More"}
          </button>
        )}
      <hr></hr>
      </div>
    </div>
  );
}

export default Order;
