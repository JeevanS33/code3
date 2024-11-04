import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../ProductDetails/ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [inCart, setInCart] = useState(false);

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);

        setReviews([
          { id: 1, username: "User1", rating: 4, comment: "Great product!" },
          { id: 2, username: "User2", rating: 5, comment: "Loved it!" },
        ]);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
        setLoading(false);
      });
  }, [id]);

  const handleToggleCart = () => {
    setInCart(!inCart);
  };

  if (loading) return <p>Loading product details...</p>;
  if (!product) return <p>Product not found</p>;

  return (
    <div className="product-details">
      <div className="product-left">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="product-image"
        />
      </div>
      <div className="product-right">
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <p className="price">Price: ${product.price}</p>
        <button
          className={`add-cart-btn ${inCart ? "added" : ""}`}
          onClick={handleToggleCart}
        >
          {inCart ? "Remove from Cart" : "Add to Cart"}
        </button>
        <div className="reviews">
          <h2>Reviews</h2>
          {reviews.length > 0 ? (
            reviews.map((review) => (
              <div key={review.id} className="review-item">
                <p>
                  <strong>{review.username}</strong> (Rating: {review.rating}/5)
                </p>
                <p>{review.comment}</p>
              </div>
            ))
          ) : (
            <p>No reviews yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
