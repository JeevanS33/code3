import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Products/Products.css";

function Products() {
  const [products, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => {
        setProduct(res.products);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div className="ads"></div>{" "}
      <div className="products-cont">
        <div className="pro-heading">
          <h1>All Products</h1>
        </div>
        {loading ? (
          <p>Loading products...</p>
        ) : (
          <div className="product-list">
            {products.map((product) => (
              <Link
                to={`/product/${product.id}`}
                key={product.id}
                className="product-item-link"
              >
                <div className="product-item">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="product-image"
                  />
                  <h2>{product.title}</h2>
                  <p>{product.description}</p>
                  <div className="price-cont">
                    <p>Price: ${product.price}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Products;
