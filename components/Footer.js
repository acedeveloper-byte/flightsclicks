'use client';
import React from 'react';
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';


const Footer = () => {
  return (
    <footer className=" text-white pt-5 pb-3 position-relative" style={{background: '#091138'}}>
      <Container>
        <Row>
          {/* About Us */}
          <Col md={4} className="mb-4 text-start">
            <Image src="/images/logo/logo.png" alt="logo" width={190} height={50} className="mb-2 footer-logo" />
            <p>
      At flightsclicks.com, you will find exclusive deals and discounts to save big on your travel expenses. Get in touch with us as soon as possible to grab limited-time deals, and have an affordable journey to your destination. Start planning your trip with flightsclicks.com today!</p>

            <div className="d-flex gap-3 mt-3">
              <a href="#" className="text-white fs-5"><FaFacebookF /></a>
              <a href="#" className="text-white fs-5"><FaXTwitter /></a>
              <a href="#" className="text-white fs-5"><FaInstagram /></a>
              <a href="#" className="text-white fs-5"><FaLinkedinIn /></a>
            </div>
          </Col>

          {/* Contact Info */}
          <Col md={4} className="mb-4 text-center">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>Email: support@flightsclicks.com</li>
              <li>Phone: <a href="tel: +44 80 8599 8705" className='text-decoration-none text-white'> +44 80 8599 8705</a></li>
              <li>Address:    <span>168 Great Portland Street <br /> London, W1W 5PF</span></li>
            </ul>
          </Col>

          {/* Links */}
          <Col md={4}>
            <Row>
              <Col xs={6}>
                <h5>Quick Links</h5>
                <ul className="list-unstyled">
                  <li><a href="/" className="text-white text-decoration-none">Home</a></li>
                  <li><a href="/about-us" className="text-white text-decoration-none">About us</a></li>
                
                  <li><a href="/contact-us" className="text-white text-decoration-none">Contact us</a></li>
              
                </ul>
              </Col>
              <Col xs={6}>
                <h5>Help Links</h5>
                <ul className="list-unstyled">
                  <li><a href="/privacy-policy" className="text-white text-decoration-none">Privacy Policy</a></li>
                  <li><a href="/terms-and-conditions" className="text-white text-decoration-none">Terms & Condition</a></li>
                  {/* <li><a href="/disclaimer" className="text-white text-decoration-none">Disclaimer</a></li> */}
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* Footer Bottom */}
        <div className="border-top mt-4 pt-3">
          <p className="text-white small mb-1 text-center">
            <strong>Disclaimer:</strong> flightsclicks operates as an independent third-party travel agency with no direct affiliation with Aeromexico Airlines. 

          </p>
          <hr />
          <p className="text-white small mb-0 text-center">
            © 2025 flightsclicks.com. All Rights Reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
