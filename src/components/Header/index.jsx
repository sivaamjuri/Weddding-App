import { Component } from "react";
import "./index.css";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header-title">
          <h1 className="header-Icon">Wedding</h1>
        </div>
        <nav className="header-nav">
          <a href="#home" className="nav-link">
            HOME
          </a>
          <a href="#schedules" className="nav-link">
            SCHEDULES
          </a>
          <a href="#rsvp" className="nav-link">
            RSVP
          </a>
          <a href="#gallery" className="nav-link">
            GALLERY
          </a>
          <a href="#gift-registry" className="nav-link">
            GIFT REGISTRY
          </a>
        </nav>
      </header>
    );
  }
}

export default Header;
