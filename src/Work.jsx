import React from "react";
import { Link } from "react-router-dom";
import "./Work.css";
import RoundNeck_Blue from "./converted/roundneck_black.webp";
import Hoodie1 from "./converted/Hoodie1.webp";
import Mug1 from "./converted/Mug1.webp";
import Leather1 from "./converted/leather1.webp";
import Pen1 from "./converted/Pen1.webp";
import Bottle1 from "./converted/Bottle1.webp";
import Cap1 from "./converted/Cap1.webp";
import CardHolder1 from "./converted/Cardholder1.webp";
import Keychain1 from "./converted/Keychain1.webp";
import PhoneStand1 from "./converted/PhoneStand1.webp";
import FlaskSet1 from "./converted/FlaskSet1.webp";
import Plate1 from "./converted/Plate1.webp";
import Pillow1 from "./converted/Pillow1.webp";
import Tiffin1 from "./converted/Tiffin1.webp";
import Pouch1 from "./converted/Pouch1.webp";
import Wallet1 from "./converted/Wallet1.webp";
import Labcoat1 from "./converted/Labcoat1.webp";
import Shirt1 from "./converted/Shirt1.webp";
import Apron1 from "./converted/Apron1.webp";
import LeatherCombo1 from "./converted/LeatherCombo1.webp";

const products = [
  { image: RoundNeck_Blue, name: "T-Shirts", link: "/product/t-shirt" },
  { image: Hoodie1, name: "Hoodies", link: "/product/hoodies" },
  { image: Mug1, name: "Mugs", link: "/product/mugs" },
  { image: Leather1, name: "Combos", link: "/product/combo" },
  { image: Pen1, name: "Pens", link: "/product/pen" },
  { image: Bottle1, name: "Bottles", link: "/product/bottle" },
  { image: Cap1, name: "Caps", link: "/product/cap" },
  { image: PhoneStand1, name: "Mobile Stands", link: "/product/phone-stand" },
  { image: FlaskSet1, name: "Vacuum Flask Sets", link: "/product/flaskset" },
  { image: Pillow1, name: "Pillows", link: "/product/pillow" },
  { image: Tiffin1, name: "Tiffins", link: "/product/tiffin" },
  { image: Pouch1, name: "Pouches", link: "/product/pouch" },
  { image: CardHolder1, name: "Card holders", link: "/product/cardholder" },
  { image: Apron1, name: "Aprons", link: "/product/apron" },
  { image: Keychain1, name: "Keychains", link: "/product/keychain" },
  { image: Shirt1, name: "Shirts", link: "/product/shirt" },
  { image: Labcoat1, name: "Lab Coats", link: "/product/labcoat" },
  { image: Wallet1, name: "Wallets", link: "/product/wallet" },
  { image: Plate1, name: "Plates", link: "/product/plate" },
  { image: LeatherCombo1, name: "Leather Combo", link: "/product/leather" },
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
