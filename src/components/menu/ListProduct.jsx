import React, { useState, useEffect } from "react";
import "../menu/ListProduct.css";
import { useNavigate } from "react-router-dom";

const ListProduct = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Nhấn để thay đổi trạng thái tim
  const toggleFavorite = (productId) => {
    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.id === productId ? { ...product, isFavorite: !product.isFavorite } : product
      )
    );
  };

  const handleProductClick = (productId) => {
    navigate(`/detail/${productId}`);
  };

  return (
    <div className="container" style={{ marginTop: "2em" }}>
      <div className="row" style={{ gap: "2em" }}>
        {products.map((product) => (
          <div
            key={product.id}
            className="card card-menu"
            style={{ width: "19rem" }}
            onClick={() => handleProductClick(product.id)}
          >
            {product.images.length > 0 && (
              <img
                src={product.images.find(image => true).image}
                className="card-img-top img-menu"
                alt="images"
              />
            )}
            <div className="card-body text-center">
              <h5 className="card-title text-danger"> ${product.price} </h5>
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Ngăn chặn sự kiện click trên card
                  toggleFavorite(product.id);
                }}
                className="btn btn-link heart-button"
              >
                <i
                  className={`fas fa-heart ${product.isFavorite ? 'text-danger' : ''}`}
                ></i>
              </button>
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">{product.describe_product}</p>
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Ngăn chặn sự kiện click trên card
                  addToCart(product.id, product.images[0].image, product.price, product.name, product.describe_product);
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

const addToCart = (dish_id, src, h1Cost, h1Title, infor) => {
  // Code to add item to cart
};

export default ListProduct;