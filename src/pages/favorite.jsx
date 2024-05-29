import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/css/clients/favorite.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchFavoriteProducts = async () => {
      try {
        const response = await axios.get( `http://127.0.0.1:8000/api/user/wishlist`,);
        setProducts(response.data.products);
      } catch (error) {
        console.error('Error fetching favorite products:', error);
      }
    };
    fetchFavoriteProducts();
  }, []);

  return (
    <div>
      <h2 className="text-center">Favorite product</h2>
      {products.map((product) => (
        <div className="cart-item" key={product.id}>
          <div className="item-image">
            <img src={product.image} alt="Product" />
          </div>
          <div className="item-details">
            <h3 className="item-name">{product.name}</h3>
            <p className="item-description">{product.description}</p>
            <div className="item-pricing">
              <div className="item-price">${product.price.toFixed(2)}</div>
              <div className="item-quantity">
                <input type="number" defaultValue={1} min={1} />
              </div>
            </div>
            <div className="item-favorite">
              <i className="fas fa-heart"></i>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;