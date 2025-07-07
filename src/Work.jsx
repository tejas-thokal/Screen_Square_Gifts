import React from "react";
import { Link } from "react-router-dom";
import "./Work.css";

const products = [
  { image: '/converted/Roundneck_black.webp', name: "T-Shirts", link: "/product/t-shirt" },
  { image: '/converted/Hoodie1.webp', name: "Hoodies", link: "/product/hoodies" },
  { image: '/converted/Mug1.webp', name: "Mugs", link: "/product/mugs" },
  { image: '/converted/Leather1.webp', name: "Combos", link: "/product/combo" },
  { image: '/converted/Pen1.webp', name: "Pens", link: "/product/pen" },
  { image: '/converted/Bottle1.webp', name: "Bottles", link: "/product/bottle" },
  { image: '/converted/Cap1.webp', name: "Caps", link: "/product/cap" },
  { image: '/converted/PhoneStand1.webp', name: "Mobile Stands", link: "/product/phone-stand" },
  { image: '/converted/FlaskSet1.webp', name: "Vacuum Flask Sets", link: "/product/flaskset" },
  { image: '/converted/Pillow1.webp', name: "Pillows", link: "/product/pillow" },
  { image: '/converted/Tiffin1.webp', name: "Tiffins", link: "/product/tiffin" },
  { image: '/converted/Pouch1.webp', name: "Pouches", link: "/product/pouch" },
  { image: '/converted/CardHolder1.webp', name: "Card holders", link: "/product/cardholder" },
  { image: '/converted/Apron1.webp', name: "Aprons", link: "/product/apron" },
  { image: '/converted/Keychain1.webp', name: "Keychains", link: "/product/keychain" },
  { image: '/converted/Shirt1.webp', name: "Shirts", link: "/product/shirt" },
  { image: '/converted/Labcoat1.webp', name: "Lab Coats", link: "/product/labcoat" },
  { image: '/converted/Wallet1.webp', name: "Wallets", link: "/product/wallet" },
  { image: '/converted/Plate1.webp', name: "Plates", link: "/product/plate" },
  { image: '/converted/LeatherCombo1.webp', name: "Leather Combo", link: "/product/leather" },
];

const Products = () => {
  return (
    <div className="product">
      <div className="product_title">
        <h1 className="title">Exclusive Gift Collections</h1>
        {/* <p>
          Discover the perfect gift for every occasion in our carefully curated
          collections. From executive essentials to personal comforts,
          we have something for everyone.
        </p> */}
      </div>

      <div className="categories-container">
        <div className="categories">
          {products.map((product, index) => (
            <div className="category-item" key={index}>
              <Link to={product.link} className="product-link">
                <img src={product.image} alt={product.name} />
                <p className="product-name">{product.name}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
