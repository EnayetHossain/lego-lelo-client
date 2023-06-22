import React from "react";
import {
  FaFacebook,
  FaInstagramSquare,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="desktop-max footer-section">
        <div className="social-section">
          <h1 className="logo">LOGOLELO</h1>
          <p className="footer-text">Follow us on social media</p>
          <div className="socials">
            <Link to="/">
              <FaFacebook></FaFacebook>
            </Link>
            <Link to="/">
              <FaTwitter></FaTwitter>
            </Link>
            <Link to="/">
              <FaInstagramSquare></FaInstagramSquare>
            </Link>
            <Link to="/">
              <FaYoutube></FaYoutube>
            </Link>
          </div>
        </div>

        <div className="footer-menu">
          <p className="footer-text">Menu</p>
          <ul className="footer-menu-items">
            <li className="footer-menu-item">
              <Link to="/">Home</Link>
            </li>
            <li className="footer-menu-item">
              <Link to="/">All Toys</Link>
            </li>
            <li className="footer-menu-item">
              <Link to="/">My Toys</Link>
            </li>
            <li className="footer-menu-item">
              <Link to="/">Add a Toy</Link>
            </li>
            <li className="footer-menu-item">
              <Link to="/">Blog</Link>
            </li>
            <li className="footer-menu-item">
              <Link to="/">Login</Link>
            </li>
            <li className="footer-menu-item">
              <Link to="/">Sign Up</Link>
            </li>
          </ul>
        </div>

        <div className="contact-info">
          <p className="footer-text">Contact info</p>
          <ul className="contact-info">
            <li>+880114544356</li>
            <li>+880114345536</li>
            <li>contact@gmail.com</li>
            <li>686 Arnold St. Anderson, SC 29621</li>
          </ul>
        </div>
      </div>
      <p className="copyright">All rights reserved &copy;2023 to LegoLelo</p>
    </div>
  );
};

export default Footer;
