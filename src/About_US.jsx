import React from "react";
import "./About_US.css";
import Bhumika from "./converted/Bhumika.webp";

export default function PortfolioCard() {
  return (
    <div className="portfolio-container">
      <div className="portfolio-card">
        <div className="profile-image-wrapper">
          <div className="profile-border">
            <img
              src={Bhumika}
              alt="Bhumika"
              className="profile-image"
            />
          </div>
          <div className="dot dot-orange"></div>
          <div className="dot dot-yellow"></div>
        </div>

        <div className="info-section">
          <button className="about-button">About US</button>
          <h1 className="headline">
            At Screen Square, we believe that the right gift can build lasting connections. Founded in 2019, we have been committed to helping businesses express appreciation and celebrate success through thoughtfully selected gifts.
          </h1>

          <p className="description">
            To elevate business relationships by providing exceptional corporate gifts that reflect your brand's values and appreciation
          </p>

          <div className="info-box">
            <div>
              <div className="label">Name:</div>
              <div>Bhumika Thokal</div>
            </div>
            <div>
              <div className="label">Phone:</div>
              <div><a href="tel:+919923660003" style={{ color: 'inherit', textDecoration: 'none' }}>+91 9923660003</a></div>
            </div>
            <div>
              <div className="label">Email:</div>
              <div><a href="mailto:screensquare2019@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>screensquare2019@gmail.com</a></div>
            </div>
            <div>
              <div className="label">Facebook:</div>
              <div>@Screen Square</div>
            </div>
          </div>

          <div className="button-row">
            <button className="contact-button">Contact me →</button>
            <button className="resume-button">Download Catlog ⭳</button>
          </div>
        </div>
      </div>
    </div>
  );
}
