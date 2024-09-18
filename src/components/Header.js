import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/n logo.png'; // Path to your logo
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container justify-content-between">
          {/* Left-aligned logo */}
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Logo" width="40" height="40" className="d-inline-block align-text-top" />
          </Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Right-aligned navigation links */}
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/projects">Projects</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
