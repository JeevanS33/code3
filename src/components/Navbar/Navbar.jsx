import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import profile from "../Images/profile.jpg";
import "../Navbar/Navbar.css";
import { useAuth } from "../auth/Authenticate.jsx";

function Navbar() {
  const { user } = useAuth();

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Shopify</h1>
      </div>
      <div className="navbar-links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Men">Men</Link>
          </li>
          <li>
            <Link to="/Women">Women</Link>
          </li>
          <li>
            <Link to="/Kid">Kid</Link>
          </li>
          <li>
            <Link to="/Products">Products</Link>
          </li>
          <li>
            {user ? (
              <Link to="/profile">
                <FontAwesomeIcon icon={faUser} /> {user.name}{" "}
              </Link>
            ) : (
              <Link to="/Login">Login</Link>
            )}
          </li>
        </ul>
      </div>
      <div className="navbar-profile">
        <div className="profile-container">
          <img
            src={profile}
            alt="navbar-profile"
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/150";
            }}
          />
        </div>
        <a href="#">☰</a>
      </div>
    </nav>
  );
}

export default Navbar;
