import React, { useState, useEffect } from "react";
import "../menu/ListProduct.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Search from './Search';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { jwtDecode } from "jwt-decode";

const ListProduct = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const [favoriteStatus, setFavoriteStatus] = useState({});
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

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

  useEffect(() => {
    const fetchFavoriteProducts = async () => {
      try {
        const { token } = JSON.parse(sessionStorage.getItem("account"));
        const response = await axios.get(`http://127.0.0.1:8000/api/user/wishlist`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setFavoriteProducts(response.data);

        // Tạo một đối tượng trạng thái yêu thích dựa trên danh sách yêu thích
        const favoriteStatuses = response.data.reduce((acc, product) => {
          acc[product.id] = true;
          return acc;
        }, {});
        setFavoriteStatus(favoriteStatuses);
      } catch (error) {
        console.error("Error fetching favorite products:", error);
      }
    };

    if (!error) {
      fetchFavoriteProducts();
    }
  }, [error]);

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

  const addToWishlist = async (productId) => {
    const accountData = JSON.parse(sessionStorage.getItem("account"));
    const token = accountData ? accountData.token : null;

    if (!token) {
      toast.error("Please log in first.");
      return;
    }

    try {
      const decodedToken = jwtDecode(token);
      const userId = decodedToken.id;
      await axios.post(
        "http://127.0.0.1:8000/api/user/wishlist",
        {
          product_id: productId,
          user_id: userId
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Product added to wishlist successfully");

      // Cập nhật trạng thái yêu thích của sản phẩm
      const updatedFavoriteStatus = { ...favoriteStatus, [productId]: true };
      setFavoriteStatus(updatedFavoriteStatus);
    } catch (error) {
      toast.error("Failed to add item to wishlist");
    }
  };

  const removeFromWishlist = async (productId) => {
    const accountData = JSON.parse(sessionStorage.getItem("account"));
    const token = accountData ? accountData.token : null;

    if (!token) {
      toast.error("Please log in first.");
      return;
    }

    try {
      await axios.delete(`http://127.0.0.1:8000/api/user/wishlist/${productId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Product removed from wishlist successfully");

      // Cập nhật trạng thái yêu thích của sản phẩm
      const updatedFavoriteStatus = { ...favoriteStatus };
      delete updatedFavoriteStatus[productId];
      setFavoriteStatus(updatedFavoriteStatus);
    } catch (error) {
      toast.error("Failed to remove item from wishlist");
    }
  };

  const toggleFavorite = async (productId) => {
    if (favoriteStatus[productId]) {
      await removeFromWishlist(productId);
    } else {
      await addToWishlist(productId);
    }
  };

  const handleProductClick = (product) => {
    navigate(`/menu/${encodeURIComponent(product.name)}`, { state: { product } });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  let displayProducts = searchResults.length > 0 ? searchResults : products;

  return (
    <div className="container" style={{ marginTop: "2em" }}>
      <div className="row" style={{ gap: "2em" }}>
        {displayProducts.map((product) => (
          <div
            key={product.id}
            className="card card-menu"
            style={{ width: "19rem" }}
            onClick={() => handleProductClick(product)}
          >
            {product.images.length > 0 && (
              <img
                src={product.images.find((image) => true).image}
                className="card-img-top img-menu"
                alt="images"
              />
            )}
            <div className="card-body text-center">
              <h5 className="card-title text-danger">${product.price}</h5>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFavorite(product.id);
                }}
                className="btn btn-link heart-button"
              >
                <i className={`fas fa-heart ${favoriteStatus[product.id] ? "text-danger" : ""}`}></i>
              </button>
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">{product.describe_product}</p>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  addToCart(product.id);
                }}
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
