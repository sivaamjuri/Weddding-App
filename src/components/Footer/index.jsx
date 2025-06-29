import { Component } from "react";
import "./index.css";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <img src="../public\footer-shape-1 (1).png" alt="footer-shape-1" className="footer-shape-1" />
        <img src="../public\footer-shape-2 (1).png" alt="footer-shape-2" className="footer-shape-2" />
        <h4 className="footer-quote">
          Let us come together in the spirit of love and joy, as we embark on
          this beautiful journey of togetherness. Your presence will add warmth
          and blessings to our union, making it a celebration to remember in our
          hearts and souls.
        </h4>
        <nav className="footer-nav">
          <a href="#home" className="footer-link">
            HOME
          </a>
          <a href="#schedules" className="footer-link">
            Schedules
          </a>
          <a href="#rsvp" className="footer-link">
            RSVP
          </a>
          <a href="#couple" className="footer-link">
            GALLERY
          </a>
          <a href="#gift-registry" className="footer-link">
            GIFT REGISTRY
          </a>
        </nav>
      </footer>
    );
  }
}

export default Footer;
