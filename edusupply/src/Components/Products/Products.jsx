import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Products.css';
import highlighters from '../../assets/highlighters.png';
import backpack from '../../assets/backpack.png';
import gelpens from '../../assets/gelpens.png';
import notebook from '../../assets/notebooks.png';
import microscope from '../../assets/microscope.png';
import labkit from '../../assets/physicslabkit.png';
import mathbook from '../../assets/maths.png';
import sciencebook from '../../assets/science.png';
import cartIcon from '../../assets/shopping-bag.png'; // Make sure this file exists

const allProducts = [
  {
    title: 'Highlighters - 6 Pack',
    price: 150,
    image: highlighters,
    stock: 'In stock',
    category: 'School Supplies',
  },
  {
    title: 'Durable Backpack',
    price: 2500,
    image: backpack,
    stock: 'In stock',
    category: 'School Supplies',
  },
  {
    title: 'Gel Pens Set - 12 Colors',
    price: 799,
    salePrice: 999,
    image: gelpens,
    stock: 'In stock',
    category: 'School Supplies',
  },
  {
    title: 'Classic Notebook - 5 Pack',
    price: 700,
    salePrice: 1299,
    image: notebook,
    stock: 'In stock',
    category: 'School Supplies',
  },
  {
    title: 'Basic Microscope',
    price: 4200,
    image: microscope,
    stock: 'In stock',
    category: 'Lab Equipment',
  },
  {
    title: 'Physics Lab Kit',
    price: 5800,
    image: labkit,
    stock: 'In stock',
    category: 'Lab Equipment',
  },
  {
    title: 'Mathematics Workbook',
    price: 320,
    image: mathbook,
    stock: 'In stock',
    category: 'Educational Books',
  },
  {
    title: 'Science Textbook',
    price: 750,
    image: sciencebook,
    stock: 'In stock',
    category: 'Educational Books',
  },
];

const categories = ['School Supplies', 'Lab Equipment', 'Educational Books'];
const stockOptions = ['In stock', 'Out of stock', 'On backorder'];

const Products = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedStock, setSelectedStock] = useState([]);
  const [addedProductIndex, setAddedProductIndex] = useState(null);

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const toggleStock = (status) => {
    setSelectedStock((prev) =>
      prev.includes(status)
        ? prev.filter((s) => s !== status)
        : [...prev, status]
    );
  };

  const handleAddToCart = (index) => {
    setAddedProductIndex(index);
    setTimeout(() => setAddedProductIndex(null), 2000); // hide message after 2s
  };

  const filteredProducts = allProducts.filter((product) => {
    const matchesCategory =
      selectedCategories.length === 0 || selectedCategories.includes(product.category);
    const matchesStock =
      selectedStock.length === 0 || selectedStock.includes(product.stock);
    return matchesCategory && matchesStock;
  });

  return (
    <div className="products-container">
      <div className="cart-icon-container">
  <Link to="/cart">
    <img src={cartIcon} alt="Cart" className="cart-icon" />
  </Link>
</div>
      <div className="breadcrumbs">
        <Link to="/" className="breadcrumb-link">Home</Link> &gt; Products
      </div>
      <h1 className="page-title">Products</h1>

      <div className="filters horizontal">
        <div className="filter-section">
          <div className="filter-title">Collections</div>
          {categories.map((cat) => (
            <label key={cat}>
              <input
                type="checkbox"
                checked={selectedCategories.includes(cat)}
                onChange={() => toggleCategory(cat)}
              />{' '}
              {cat}
            </label>
          ))}
        </div>

        <div className="filter-section">
          <div className="filter-title">Stock</div>
          {stockOptions.map((stock) => (
            <label key={stock}>
              <input
                type="checkbox"
                checked={selectedStock.includes(stock)}
                onChange={() => toggleStock(stock)}
              />{' '}
              {stock}
            </label>
          ))}
        </div>
      </div>

      <div className="products">
        {filteredProducts.map((product, idx) => (
          <div key={idx} className="product-card">
            <img
              src={product.image}
              alt={product.title}
              className="product-image"
            />
            <div className="product-info">
              <div className="product-title">{product.title}</div>
              <div className="price">
                {product.salePrice && (
                  <span className="sale-price">₹{product.salePrice}</span>
                )}
                ₹{product.price}
              </div>
              <button
                className="add-to-cart"
                onClick={() => handleAddToCart(idx)}
              >
                Add to Cart
              </button>
              {addedProductIndex === idx && (
                <div className="cart-message">Added to cart!</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
