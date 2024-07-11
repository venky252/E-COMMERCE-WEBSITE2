import React, { useState } from 'react';

const ProductCard = ({ product }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const addToCart = () => {
    setCart([...cart, product]);
  };

  const addToWishlist = () => {
    setWishlist([...wishlist, product]);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>${product.price}</p>
      <button onClick={addToCart}>Add to Cart</button>
      <button onClick={addToWishlist}>Add to Wishlist</button>
    </div>
  );
};

export default ProductCard;
