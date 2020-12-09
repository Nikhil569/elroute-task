import React from "react";
import logo from "../../Images/logo.png";

const Navbar = () => {
  return (
    <div className="navbar black">
      <div className="nav-wrapper container">
        <div className="left-side">
          <img src={logo} />
        </div>
        <div className="right-side">
          <div className="num">(+91)8450949364</div>
          <div className="nav-links">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a
                  href="#"
                  className="waves-effect waves-light btn yellow darken-3"
                >
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
