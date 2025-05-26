import React, { useState, useMemo, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import "./Work.css";
import WhatsAppButton from './components/WhatsAppButton';
import RoundNeck_Blue from "./converted/roundneck_black.webp";
import Hoodie1 from "./converted/Hoodie1.webp";
import Hoodie2 from "./converted/Hoodie2.webp";
import Hoodie3 from "./converted/Hoodie3.webp";
import Hoodie4 from "./converted/Hoodie4.webp";
import Hoodie5 from "./converted/Hoodie5.webp";
import Hoodie6 from "./converted/Hoodie6.webp";
import Tshirt1 from "./converted/tshirt1.webp";
import Tshirt2 from "./converted/tshirt2.webp";
import Tshirt3 from "./converted/tshirt3.webp";
import Tshirt4 from "./converted/tshirt4.webp";
import Tshirt5 from "./converted/tshirt5.webp";
import Tshirt6 from "./converted/tshirt6.webp";
import Mug1 from "./converted/Mug1.webp";
import Mug2 from "./converted/Mug2.webp";
import Mug3 from "./converted/Mug3.webp";
import Mug4 from "./converted/Mug4.webp";
import Mug5 from "./converted/Mug5.webp";
import Mug6 from "./converted/Mug6.webp";
import LeatherCombo1 from "./converted/LeatherCombo1.webp";
import LeatherCombo2 from "./converted/LeatherCombo2.webp";
import LeatherCombo3 from "./converted/LeatherCombo3.webp";
import LeatherCombo4 from "./converted/LeatherCombo4.webp";
import LeatherCombo5 from "./converted/LeatherCombo5.webp";
import LeatherCombo6 from "./converted/LeatherCombo6.webp";
import Pen1 from "./converted/Pen1.webp";
import Pen2 from "./converted/Pen2.webp";
import Pen3 from "./converted/Pen3.webp";
import Pen4 from "./converted/Pen4.webp";
import Pen5 from "./converted/Pen5.webp";
import Bottle1 from "./converted/Bottle1.webp";
import Steel1 from "./converted/steel1.webp";
import Steel2 from "./converted/steel2.webp";
import Steel3 from "./converted/steel3.webp";
import Temp1 from "./converted/Temp1.webp";
import Temp2 from "./converted/Temp2.webp";
import Temp3 from "./converted/Temp3.webp";
import Temp4 from "./converted/Temp4.webp";
import Temp5 from "./converted/Temp5.webp";
import Temp6 from "./converted/temp6.webp";
import Temp7 from "./converted/Temp7.webp";
import Cap1 from "./converted/Cap1.webp";
import Cap2 from "./converted/Cap2.webp";
import Cap3 from "./converted/Cap3.webp";
import Cap4 from "./converted/Cap4.webp";
import CardHolder1 from "./converted/CardHolder1.webp";
import CardHolder2 from "./converted/CardHolder2.webp";
import CardHolder3 from "./converted/CardHolder3.webp";
import CardHolder4 from "./converted/CardHolder4.webp";
import Keychain1 from "./converted/Keychain1.webp";
import Keychain2 from "./converted/Keychain2.webp";
import Keychain3 from "./converted/Keychain3.webp";
import Keychain4 from "./converted/Keychain4.webp";
import Keychain5 from "./converted/Keychain5.webp";
import PhoneStand1 from "./converted/PhoneStand1.webp";
import PhoneStand2 from "./converted/PhoneStand2.webp";
import PhoneStand3 from "./converted/PhoneStand3.webp";
import PhoneStand4 from "./converted/PhoneStand4.webp";
import FlaskSet1 from "./converted/FlaskSet1.webp";
import FlaskSet2 from "./converted/FlaskSet2.webp";
import FlaskSet3 from "./converted/FlaskSet3.webp";
import Plate1 from "./converted/Plate1.webp";
import Plate2 from "./converted/Plate2.webp";
import Plate3 from "./converted/Plate3.webp";
import Plate4 from "./converted/Plate4.webp";
import Plate5 from "./converted/Plate5.webp";
import Pillow1 from "./converted/Pillow1.webp";
import Pillow2 from "./converted/pillow2.webp";
import Pillow3 from "./converted/pillow3.webp";
import Pillow4 from "./converted/pillow4.webp";
import Pillow5 from "./converted/pilow5.webp";
import Tiffin1 from "./converted/Tiffin1.webp";
import Tiffin2 from "./converted/Tiffin2.webp";
import Tiffin3 from "./converted/Tiffin3.webp";
import Tiffin4 from "./converted/Tiffin4.webp";
import Tiffin5 from "./converted/Tiffin5.webp";
import Tiffin6 from "./converted/Tiffin6.webp";
import Combo1 from "./converted/Combo2.webp";
import Combo2 from "./converted/Combo3.webp";
import Combo3 from "./converted/Combo4.webp";
import Combo4 from "./converted/Combo5.webp";
import Combo5 from "./converted/Combo6.webp";
import PouchLether1 from "./converted/PouchLether1.webp";
import PouchLeather2 from "./converted/PouchLeather2.webp";
import PouchLeather3 from "./converted/PouchLeather3.webp";
import PouchLeather4 from "./converted/PouchLeather4.webp";
import PouchLeather5 from "./converted/PouchLeather5.webp";
import Pouch2 from "./converted/pouch2.webp";
import Pouch3 from "./converted/pouch3.webp";
import Wallet1 from "./converted/Wallet1.webp";
import Wallet2 from "./converted/wallet2.webp";
import Wallet3 from "./converted/wallet3.webp";
import Wallet4 from "./converted/wallet4.webp";
import Wallet5 from "./converted/wallet5.webp";
import Wallet6 from "./converted/wallet6.webp";
import Wallet7 from "./converted/wallet7.webp";
import Labcoat1 from "./converted/Labcoat1.webp";
import Labcoat2 from "./converted/Labcoat2.webp";
import Labcoat3 from "./converted/Labcoat3.webp";
import Labcoat4 from "./converted/Labcoat4.webp";
import Labcoat5 from "./converted/Labcoat5.webp";
import Shirt1 from "./converted/Shirt1.webp";
import Shirt2 from "./converted/Shirt2.webp";
import Shirt3 from "./converted/Shirt3.webp";
import Apron1 from "./converted/Apron1.webp";
import Apron2 from "./converted/Apron2.webp";
import Apron3 from "./converted/Apron3.webp";
import Apron4 from "./converted/Apron4.webp";
import Apron5 from "./converted/Apron5.webp";
import Apron6 from "./converted/Apron6.webp";
import Apron7 from "./converted/Apron7.webp";
import Apron8 from "./converted/Apron8.webp";

const productDetails = {
  "t-shirt": {
    name: "T-Shirts",
    description: "A stylish T-shirt for every occasion. Soft, comfortable, and made with high-quality fabric.",
    themes: {
      vacation: [RoundNeck_Blue, Tshirt1,Tshirt2,Tshirt3,Tshirt4,Tshirt5,Tshirt6]
    }
  },
  hoodies: {
    name: "Hoodies",
    description: "Stay warm and fashionable with our premium hoodies, perfect for every season.",
    themes: {
      vacation: [Hoodie1, Hoodie2, Hoodie3, Hoodie4, Hoodie5, Hoodie6]
    }
  },
  plate: {
    name: "Plate",
    description: "Beautiful designer plates for your dining and decor needs.",
    themes: {
      Kids: [Plate1, Plate2,Plate3,Plate4,Plate5],
    }
  },
  mugs: {
    name: "Mugs",
    description: "Perfect mugs for your morning coffee, with various designs to match your personality.",
    themes: {
      vacation: [Mug1, Mug2,Mug3,Mug4,Mug5]
    }
  },
  leather: {
    name: "Leather Combo",
    description: "Premium leather combos for the sophisticated you.",
    themes: {
      Personal: [LeatherCombo1, LeatherCombo2, LeatherCombo3, LeatherCombo4, LeatherCombo5, LeatherCombo6]
    }
  },
  pen: {
    name: "Pens",
    description: "Elegant pens for professionals.",
    themes: {
      vacation: [Pen1,Pen3, Pen4, Pen5]
    }
  },
  bottle: {
    name: "Bottles",
    description: "Stay hydrated with our premium range of stylish bottles.",
    themes: {
      Temperature: [Temp2,Temp3,Temp4,Temp5,Temp6,Temp7],
      Steel: [Steel1,Steel2,Steel3],
      Combined: [Bottle1,Steel1,Steel2,Steel3,Temp1,Temp2,Temp3,Temp4,Temp5,Temp6,Temp7],
    }
  },
  cap: {
    name: "Caps",
    description: "Stylish and comfortable caps for sunny days.",
    themes: {
      vacation: [Cap1, Cap2, Cap3, Cap4]
    }
  },
  wallet: {
    name: "Wallets",
    description: "Classy wallets for both men and women.",
    themes: {
      leather: [Wallet1,Wallet3,Wallet4,Wallet5,Wallet6,Wallet7]
    }
  },
  "phone-stand": {
    name: "Mobile Stands",
    description: "Convenient and sturdy mobile stands.",
    themes: {
      vacation: [PhoneStand1,PhoneStand2,PhoneStand3,]
    }
  },
  flaskset: {
    name: "Vacuum Flask Sets",
    description: "Premium vacuum flask sets for hot or cold beverages.",
    themes: {
      vacation: [FlaskSet1, FlaskSet2, FlaskSet3]
    }
  },
  pillow: {
    name: "Pillows",
    description: "Comfortable and supportive pillows.",
    themes: {
      Family: [Pillow1,Pillow2,Pillow3,Pillow4,Pillow5]
    }
  },
  tiffin: {
    name: "Tiffins",
    description: "Practical and stylish tiffins.",
    themes: {
      vacation: [Tiffin1, Tiffin2, Tiffin3, Tiffin4, Tiffin5, Tiffin6]
    }
  },
  combo: {
    name: "Combos",
    description: "Premium Combos for the sophisticated you.",
    themes: {
      vacation: [Combo1, Combo2, Combo3, Combo4, Combo5]
    }
  },
  pouch: {
    name: "Pouches",
    description: "Compact and versatile pouches.",
    themes: {
      Leather: [PouchLether1, PouchLeather2, PouchLeather3, PouchLeather4, PouchLeather5, Pouch2, Pouch3]
    }
  },
  cardholder: {
    name: "Card Holders",
    description: "Sleek and secure card holders, perfect for organizing your business and credit cards with style.",
    themes: {
      vacation: [CardHolder1, CardHolder2, CardHolder3, CardHolder4],
    }
  },
  apron: {
    name: "Aprons",
    description: "Durable and stylish aprons.",
    themes: {
      vacation: [Apron1,Apron2,Apron3,Apron4,Apron5,Apron7,Apron8]
    }
  },
  keychain: {
    name: "Keychains",
    description: "Unique and customizable keychains.",
    themes: {
      Logo: [Keychain1,Keychain2,Keychain3,Keychain4,Keychain5]
    }
  },
  shirt: {
    name: "Shirts",
    description: "Classic shirts with modern designs.",
    themes: {
      Company: [Shirt1,Shirt2,Shirt3]
    }
  },
  labcoat: {
    name: "Lab Coats",
    description: "Professional lab coats for scientific environments.",
    themes: {
      Logo: [Labcoat1,Labcoat4,Labcoat5,Labcoat3],
      temp:[Labcoat1]
    }
  },
};

function ProductDetailPage() {
  const { name } = useParams();
  const navigate = useNavigate();
  const [selectedTheme, setSelectedTheme] = useState();

  const product = useMemo(() => productDetails[name], [name]);
  const themes = useMemo(() => product ? Object.keys(product.themes) : [], [product]);
  const imagesToShow = useMemo(() => 
    selectedTheme && product ? product.themes[selectedTheme] : [],
    [selectedTheme, product]
  );

  const handleImageClick = useCallback((image) => {
    navigate('/product-detail', { 
      state: { 
        product: {
          name: product?.name,
          description: product?.description
        },
        image: image
      } 
    });
  }, [navigate, product]);

  const handleThemeChange = useCallback((e) => {
    setSelectedTheme(e.target.value);
  }, []);

  if (!product) {
    return <div className="error-message">Product not found</div>;
  }

  // Set initial theme if not set
  if (!selectedTheme && themes.length > 0) {
    setSelectedTheme(themes[0]);
  }

  const ProductImage = React.memo(({ image, index }) => (
    <div className="category-item">
      <img 
        src={image} 
        alt={`${product.name} ${index + 1}`} 
        onClick={() => handleImageClick(image)}
        loading="lazy"
        width="300"
        height="300"
      />
    </div>
  ));

  return (
    <div className="product">
      <div className="product_title">
        <h1 className="title">{product.name}</h1>
        <p>{product.description}</p>
      </div>

      {themes.length > 1 && (
        <div className="theme-dropdown">
          <label htmlFor="theme">Select Theme: </label>
          <select
            id="theme"
            value={selectedTheme || ''}
            onChange={handleThemeChange}
          >
            {themes.map((theme) => (
              <option key={theme} value={theme}>
                {theme.charAt(0).toUpperCase() + theme.slice(1)}
              </option>
            ))}
          </select>
        </div>
      )}

      <div className="categories">
        {imagesToShow.map((image, index) => (
          <ProductImage 
            key={`${image}-${index}`}
            image={image} 
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

export default React.memo(ProductDetailPage);