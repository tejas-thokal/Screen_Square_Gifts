import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./product.css";
import tshirt from "./converted/combine.webp";
import Mug from "./converted/mug4.webp";
import Hoodie from "./converted/hoodie.webp";
import Flaskset from "./converted/flaskset.webp";
import Cap from "./converted/cap.webp";
import Wallet from "./converted/wallet.webp";
import Bottle from "./converted/bottle.webp";
import Set from "./converted/set.webp";

const products = [
  { id: "t-shirt", name: "Customize Tshirts", description: "for Gift", image: tshirt, className: "tshirt special-card" },
  { id: "mugs", name: "Customize Mug", description: "for Gift", image: Mug, className: "mug mug-card" },
  { id: "hoodies", name: "Customize Hoodies", description: "for Gift", image: Hoodie, className: "hoodie" },
  { id: "flaskset", name: "Customize Bottle", description: "for Gift", image: Flaskset, className: "flaskset" },
  { id: "cap", name: "Customize Cap", description: "for Gift", image: Cap, className: "cap" },
  { id: "wallet", name: "Customize Wallet", description: "for Gift", image: Wallet, className: "wallet" },
  { id: "bottle", name: "Customize bottle", description: "for Gift", image: Bottle, className: "Bottle-card" },
  { id: "combo", name: "Customize set", description: "for Gift", image: Set, className: "Set" }
];

export default function Product() {
  const navigate = useNavigate();
  const gridRef = useRef(null);
  const productRefs = useRef([]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1
    };

    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add animation class when element comes into view
          entry.target.classList.add('animate');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    // Observe the grid container
    if (gridRef.current) {
      observer.observe(gridRef.current);
    }

    // Observe each product card
    productRefs.current.forEach(ref => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="product-grid" ref={gridRef}>
      {products.map((product, index) => (
        <div
          key={product.id}
          className={`product-card ${product.className}`}
          ref={el => productRefs.current[index] = el}
          onClick={() => handleProductClick(product.id)}
          style={{ cursor: 'pointer' }}
        >
          <div className="right">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="left">
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <button 
              className="shop-btn"
              onClick={(e) => {
                e.stopPropagation();
                handleProductClick(product.id);
              }}
            >
              Check Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
