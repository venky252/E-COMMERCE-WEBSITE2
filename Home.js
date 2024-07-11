import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductList from './ProductList';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortType, setSortType] = useState('default');

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the products!", error);
      });
  }, []);

  const sortedProducts = [...products].sort((a, b) => {
    if (sortType === 'price-asc') {
      return a.price - b.price;
    } else if (sortType === 'price-desc') {
      return b.price - a.price;
    } else if (sortType === 'alphabetical') {
      return a.title.localeCompare(b.title);
    } else {
      return products;
    }
  });

  const filteredProducts = sortedProducts.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Products</h1>
      <div>
        <label>Sort by: </label>
        <select onChange={(e) => setSortType(e.target.value)} value={sortType}>
          <option value="default">Default</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="alphabetical">Alphabetical</option>
        </select>
      </div>
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default Home;
