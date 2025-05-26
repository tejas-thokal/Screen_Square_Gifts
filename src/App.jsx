import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

// Lazy load all other components
const Sidebar = React.lazy(() => import("./Sidebar.jsx"));
const Home = React.lazy(() => import("./Home_temp.jsx"));
const Product = React.lazy(() => import("./product.jsx"));
const Skills = React.lazy(() => import("./Skills.jsx"));
const ReviewSlider = React.lazy(() => import("./Reviews.jsx"));
const Work = React.lazy(() => import("./Work.jsx"));
const Contact = React.lazy(() => import("./Contact_Us.jsx"));
const ProductDetailPage = React.lazy(() => import("./ProductDetail.jsx"));
const About = React.lazy(() => import("./About_US.jsx"));
const ProductInDetail = React.lazy(() => import("./ProductInDetail.jsx"));

// Loading fallback component
const LoadingFallback = () => (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    height: '100vh' 
  }}>
    Loading...
  </div>
);

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Suspense fallback={<LoadingFallback />}>
                <Sidebar />
                <Product/>
                <Skills />
                <ReviewSlider />
              </Suspense>
              <Footer />
            </>
          }
        />
        <Route
          path="/products"
          element={
            <>
              <Navbar/>
              <Suspense fallback={<LoadingFallback />}>
                <Work />
              </Suspense>
              <Footer />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Navbar/>
              <Suspense fallback={<LoadingFallback />}>
                <Contact/>
              </Suspense>
              <Footer/>
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Navbar/>
              <Suspense fallback={<LoadingFallback />}>
                <About/>
              </Suspense>
              <Footer/>
            </>
          }
        />
        <Route 
          path="/product/:name" 
          element={
            <>
              <Navbar />
              <Suspense fallback={<LoadingFallback />}>
                <ProductDetailPage />
              </Suspense>
              <Footer/>
            </>
          } 
        />
        <Route 
          path="/product-detail" 
          element={
            <>
              <Navbar />
              <Suspense fallback={<LoadingFallback />}>
                <ProductInDetail />
              </Suspense>
              <Footer/>
            </>
          } 
        />
      </Routes>
    </Router>
  );
}
