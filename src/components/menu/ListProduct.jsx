import React, { useState, useEffect } from "react";
import "../menu/ListProduct.css";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const ListProduct = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/admin/product");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const addToCart = async (productId) => {
    const accountData = JSON.parse(sessionStorage.getItem("account"));
    const token = accountData ? accountData.token : null;

    if (token) {
      const decodedToken = jwtDecode(token);
      const userId = decodedToken.id;
      await axios.post(
        "http://127.0.0.1:8000/api/user/cart/add",
        {
          product_id: productId,
          user_id: userId,
          product_quantity: 1,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Product add successfully");
    } else {
      setError("No token found. Please login first.");
      toast.error("Failed to add item");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  // nhấn thay đổi trạng thái tym
  const toggleFavorite = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, isFavorite: !product.isFavorite }
          : product
      )
    );
  };
  
  return (
    <div className="container" style={{ marginTop: "2em" }}>
      <ToastContainer />
      <div className="row" style={{ gap: "2em" }}>
        {products.map((product) => (
          <div
            key={product.id}
            className="card card-menu"
            style={{ width: "19rem" }}
          >
            {product.images.length > 0 && (
              <img
                src={product.images.find((image) => true).image}
                className="card-img-top img-menu"
                alt="images"
              />
            )}
            <div className="card-body text-center">
              <h5 className="card-title text-danger"> ${product.price} </h5>{" "}
              <button
                onClick={() => toggleFavorite(product.id)}
                className="btn btn-link heart-button"
              >
                <i
                  className={`fas fa-heart ${product.isFavorite ? "text-danger" : ""}`}
                ></i>
              </button>
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">{product.describe_product}</p>
              <button
                onClick={() => addToCart(product.id)}
                className="btn btn-primary add-to-cart-btn"
              >
                ADD TO CART
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ListProduct;
