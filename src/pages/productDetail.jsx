import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import '../assets/css/clients/productDetail.css';
import ListComment from '../components/home/ListComment';
const ProductDetail = () => {
  const { name } = useParams();
  const { state } = useLocation();
  const [error, setError] = useState(null);
  const [favoriteStatus, setFavoriteStatus] = useState({});
  const [product, setProduct] = useState(state?.product || null);
  useEffect(() => {
  }, [name]);

  const toggleStarColor = (star) => {
    star.style.color = star.style.color === 'orange' ? 'black' : 'orange';
  };
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
  return (
    <div className="container">
    <ToastContainer />
      {product && (
        <div className="main1">
          <div className="image_dish_detail">
            <div className="col-lg-6 col-md-12 col-sm-12">
              {product.images.length > 0 && (
                <img
                  src={product.images.find(image => image.image_position === 1).image}
                  id="product-img"
                  alt={product.name}
                />
              )}
              <div className="small-images" style={{ display: 'flex', justifyContent: 'space-between' }}>
                {product.images.slice(1).map(image => (
                  <img
                    key={image.id}
                    src={image.image}
                    alt={product.name}
                  />
                ))}
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="especialy">
                <h2 className="dish_name_detail">{product.name}</h2>
                <div className="star">
                  {[...Array(5)].map((_, index) => (
                    <span
                      key={index}
                      className="star"
                      onClick={(e) => toggleStarColor(e.target)}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <p className="review">100 reviews</p>
                <h2 className="price_detail">{product.price}</h2>
                <p className="details">{product.describe_product}</p>
                <button id="add-to-cart" onClick={(e) => {
                  addToCart(product.id);
                }}>Add to cart</button>
              </div>
            </div>
          </div>
        </div>
      )}
      <ListComment />
    </div>
  );
  
};

export default ProductDetail;