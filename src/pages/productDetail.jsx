import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import '../assets/css/clients/productDetail.css';
import ListComment from '../components/home/ListComment';
const ProductDetail = () => {
  const { name } = useParams();
  const { state } = useLocation();
  const [product, setProduct] = useState(state?.product || null);
  useEffect(() => {
  }, [name]);

  const toggleStarColor = (star) => {
    star.style.color = star.style.color === 'orange' ? 'black' : 'orange';
  };
  return (
    <div className="container">
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