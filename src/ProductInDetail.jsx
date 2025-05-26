import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './ProductInDetail.css';
import WhatsAppButton from './components/WhatsAppButton';

function ProductInDetail() {
  const location = useLocation();
  const { product, image } = location.state || {};

  if (!product || !image) {
    return (
      <div className="product-not-found">
        <h2>Product not found</h2>
        <Link to="/" className="back-link">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="product-indetail-container">
      <div className="product-indetail-content">
        <div className="product-indetail-image">
          <img src={image} alt={product.name} loading="lazy" />
        </div>
        <div className="product-indetail-info">
          <h1>{product.name}</h1>
          <p className="price">Contact for Price</p>
          <div className="description">
            <h3>Description</h3>
            <p>{product.description}</p>
          </div>
          <div className="action-buttons">
            <WhatsAppButton 
              text="Enquire on WhatsApp"
              productName={product.name}
            />
            <Link to="/products" className="back-button">
              Back to Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductInDetail;
