import React, { useState, useEffect } from "react";
import "../menu/ListProduct.css";
const addToCart = (dish_id, src, h1Cost, h1Title, infor) => {
  // Code to add item to cart
};
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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  console.log(products);
  return (
    <div className="container" style={{ marginTop: "2em" }}>
      <div className="row" style={{ gap: "2em" }}>
        {products.map((product) => (
          <div key={product.id} className="card" style={{ width: "19rem" }}>
            {product.images.length > 0 && (
                <img src={product.images.find(image => true).image} className="card-img-top" alt="images" />)
            }
            <div className="card-body text-center">
              <h5 className="card-title text-danger"> ${product.price} </h5>
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">{product.describe_product}</p>
              <button
                onClick={() => addToCart()}
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
