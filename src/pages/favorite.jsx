import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/css/clients/favorite.css';
import useAuthService from "../api/auth.js";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const { error } = useAuthService();

  useEffect(() => {
    const fetchFavoriteProducts = async () => {
      try {
        const { token } = JSON.parse(sessionStorage.getItem('account')); // Lấy token từ sessionStorage
        const response = await axios.get(`http://127.0.0.1:8000/api/user/wishlist`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching favorite products:', error);
      }
    };

    if (!error) {
      fetchFavoriteProducts();
    }
  }, [error]);

  const handleDelete = async (productId) => {
    try {
      const { token } = JSON.parse(sessionStorage.getItem('account')); // Lấy token từ sessionStorage
      await axios.delete(`http://127.0.0.1:8000/api/user/wishlist/${productId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProducts(products.filter(product => product.id !== productId));
    } catch (error) {
      console.error('Error deleting product from wishlist:', error);
    }
  };

  return (
    <div>
      <h2 className="textProduct text-center">Favorite product</h2>
      {!Array.isArray(products) || products.length === 0 ? (
        <p className="text-center">There are no favorite products.</p>
      ) : (
        products.map((product) => (
          <div className="cart-product" key={product.id}>
            <div className="item-image">
            <img src={product.images[0]} alt={product.name} />
            </div>
            <div className="item-details">
              <h3 className="item-name">{product.name}</h3>
              <p className="item-description">{product.describe_product}</p>
              <div className="item-pricing">
                <div className="item-price">{product.price}</div>
                <button onClick={() => handleDelete(product.id)}> 
                  <i className="fas fa-trash"></i> 
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
  
};

export default ProductList;
