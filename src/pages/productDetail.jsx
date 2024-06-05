import React, { useState, useEffect } from 'react';
import '../assets/css/clients/productDetail.css';
import ListComment from '../components/home/ListComment';
import { fetchProduct } from '../api/productDetail.js';

const ProductDetail = ({ productId }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productData = await fetchProduct(productId);
        setProduct(productData);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };
    fetchData();
  }, [productId]);

  const toggleStarColor = (star) => {
    star.style.color = star.style.color === 'orange' ? 'black' : 'orange';
  };

  return (
    <div className="container-fluid">
      {product && (
        <div className="main1">
          <div className="image_dish">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <img
                src={product.images.find(image => image.image_position === 1).image}
                width="100%"
                id="product-img"
                alt={product.name}
              />
              <div className="small-images" style={{ display: 'flex', justifyContent: 'space-between' }}>
                {product.images.slice(1).map(image => (
                  <img
                    key={image.id}
                    src={image.image}
                    width="32.33%"
                    height="100px"
                    alt={product.name}
                  />
                ))}
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="especialy">
                <h2 className="dish_name">{product.name}</h2>
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
                <h2 className="price">{product.price}</h2>
                <p className="details">{product.describe_product}</p>
                <button id="add-to-cart">Add to cart</button>
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