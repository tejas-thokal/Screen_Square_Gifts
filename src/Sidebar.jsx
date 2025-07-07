import "./Sidebar.css";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();

  const handleCustomizeClick = () => {
    navigate('/products');
  };

  return (
    <>
    <div className="main d-flex">
      <div className="left1">
        <img src="/converted/Product.webp" alt="Product Image" />
      </div>
      <div className="right2">
        <p>
          Gifts that <br/>
          speak <span>volumes</span><br/>
          about your <span>brand</span>
        </p>
        <h1>Your One-Stop Solution for <br /> Custom
Corporate Printing and  Branding Needs.</h1>
        <button onClick={handleCustomizeClick}>Customize Your Product</button>
      </div>
    </div>
    </>
  );
}
