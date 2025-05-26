import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import "./Contact_US.css";

export default function Contact() {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ message: '', isError: false });

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ message: '', isError: false });

    // Get form values
    const formData = new FormData(form.current);
    const templateParams = {
      to_email: 'screensquare2019@gmail.com',
      user_name: formData.get('user_name'),
      user_email: formData.get('user_email'),
      subject: formData.get('subject'),
      message: `
Name: ${formData.get('user_name')}
Email: ${formData.get('user_email')}
Subject: ${formData.get('subject')}

Message:
${formData.get('message')}
      `,
    };

    // EmailJS configuration with actual credentials
    emailjs.send(
      'service_q80ng0j',
      'template_aqbvpms',
      templateParams,
      '4qn7uvH6DRFBrsw_h'
    )
      .then((result) => {
        setSubmitStatus({ 
          message: 'Thank you for your message! We will get back to you soon.', 
          isError: false 
        });
        form.current.reset();
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        setSubmitStatus({ 
          message: 'Failed to send message. Please try again or contact us directly at screensquare2019@gmail.com', 
          isError: true 
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="contact-container">
      <div className="cards">
        <div className="card">
          <h3>Find Us</h3>
          <p>
            Sr. No. 47, Nainadevi Homes Sankalp Soc, 1st Floor, Flat No. 2, Lane
            No. 1, Behind Dwarka Garden Mangal Karyalaya, Sunita Nagar, Wadgaon
            Sheri, Pune, Maharashtra 411014
          </p>
          <button>
            <i className="fas fa-map-marker-alt"></i>
            <a
              href="https://maps.app.goo.gl/t11mfM3oT1L5xHNA9"
              target="_blank"
              rel="noopener noreferrer"
            >
              Go to Maps
            </a>
          </button>
        </div>
        <div className="card">
          <div className="number">
            <h3>Call Us</h3>
            <p>+91 9923660003</p>
          </div>
          <button>
            <i className="fa-solid fa-phone"></i>
            <a href="tel:+919923660003">Call Now</a>
          </button>
        </div>
        <div className="card">
          <div className="e-mail">
            <h3>Mail Us</h3>
            <p>screensquare2019@gmail.com</p>
          </div>
          <button>
            <i className="fas fa-envelope"></i>
            <a href="mailto:screensquare2019@gmail.com">Mail Us</a>
          </button>
        </div>
      </div>

      <div className="contact-form-container">
        <h2>Send us a Message</h2>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="user_name"
              required
              placeholder="Enter your name"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="user_email"
              required
              placeholder="Enter your email"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              placeholder="Enter subject"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="Enter your message"
              rows="5"
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="submit-button" 
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>

          {submitStatus.message && (
            <div className={`status-message ${submitStatus.isError ? 'error' : 'success'}`}>
              {submitStatus.message}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
