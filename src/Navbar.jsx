import { Link, useNavigate } from "react-router-dom";
import logo from "./converted/logo.webp";
import { useState } from "react"; // Import React's useState hook
import "./Navbar.css"; // Ensure it has styles for both navbar and sidebar
import "./Sidebar.css"; // Optional: if you had sidebar styles separate

export default function NavbarWithSidebar() {
    const [isNavOpen, setIsNavOpen] = useState(false); // Track the navbar state
    const [searchQuery, setSearchQuery] = useState(''); // Track search input
    const navigate = useNavigate();

    // Toggle the navbar on and off
    const handleNavbarToggle = () => {
        setIsNavOpen(!isNavOpen); // Toggle the navbar state
    };

    // Handle search submission
    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            // Convert search query to lowercase and remove spaces for URL
            const formattedQuery = searchQuery.toLowerCase().trim().replace(/\s+/g, '-');
            navigate(`/product/${formattedQuery}`);
            setSearchQuery(''); // Clear the search input after submission
        }
    };

    return (
        <div className="d-flex">
            <div className="bg-dark sidebar text-white d-flex flex-column align-items-center py-4"
            style={{ width: '3em', minHeight: '100vh' }}>
                <Link to="#" className="sidebar-icon"><i className="fas fa-tshirt"></i></Link>
                <Link to="/product/t-shirt" className="sidebar-icon"><i className="fas fa-tshirt"></i></Link>
                <Link to="/product/mugs" className="sidebar-icon"><i className="fas fa-mug-hot"></i></Link>
                <Link to="/product/bottle" className="sidebar-icon"><i className="fas fa-wine-bottle"></i></Link>
                <Link to="/product/pen" className="sidebar-icon"><i className="fas fa-pen"></i></Link>
                <Link to="/product/plate" className="sidebar-icon"><i className="fas fa-utensils"></i></Link>
                <Link to="/product/cap" className="sidebar-icon"><i className="fas fa-hat-cowboy"></i></Link>
                <Link to="/product/keychain" className="sidebar-icon"><i className="fas fa-key"></i></Link>
                <Link to="/product/wallet" className="sidebar-icon"><i className="fas fa-wallet"></i></Link>
            </div>

            <nav className="navbar navbar-expand-lg bg-body-tertiary w-100">
                <div className="container-fluid ">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} alt="Screen Square" className="navbar-logo"/>
                    </Link>

                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={handleNavbarToggle}
                        aria-expanded={isNavOpen ? "true" : "false"}
                    >
                        <span className="navbar-toggler-icon" style={{ filter: 'brightness(0) invert(1)' }}></span>
                    </button>

                    {/* COLLAPSIBLE CONTENT */}
                    <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarSupportedContent">
                        <ul className="navbar-nav d-flex flex-row gap-4 mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/products">Product</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact Us</Link>
                            </li>
                        </ul>
                        <form className="d-flex rside" role="search" onSubmit={handleSearch}>
                            <input 
                                className="form-control me-2" 
                                type="search" 
                                placeholder="Search products..." 
                                aria-label="Search"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
}
