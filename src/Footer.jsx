import "./footer.css";
import logo from "./converted/logo.webp";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className=" footer text-white py-4 mt-5">
            <div className="text-center text-md-start">
                <div className="row g-4">
                    <div className="fot-container3">
                        <div className="col-md-3 mb-4 container2">
                            <img src={logo} alt="Screen Square" className="img-fluid" />
                        </div>
                        <div className="col-md-3 mb-4">
                            <h5>About Us</h5>
                            <p>We provide customizable <br /> products for gifts and events.</p>
                        </div>
                        <div className="col-md-3 mb-4">
                            <h5>Quick Links</h5>
                            <ul className="list-unstyled">
                                <li><Link className="nav-link active" to="/">Home</Link></li>
                                <li><Link className="nav-link" to="/products">Product</Link></li>
                                <li><Link className="nav-link" to="/contact">Contact Us</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-3 mb-4">
                            <h5>Contact</h5>
                            <p>Email: screensquare2019@gmail.com <br />Phone: +91 9923660003</p>
                        </div>
                    </div>
                </div>
                <div className="text-center pt-3 border-top mt-3">
                    <small>&copy; 2025 Screen Square. All rights reserved.</small>
                </div>
            </div>
        </footer>
    );
}
