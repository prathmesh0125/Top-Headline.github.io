import React from "react";

import { Link } from "react-router-dom";

const Navbar = (props) => {
  
  return (
    <div>
      <nav
        className={`navbar fixed-top navbar-expand-lg navbar-${props.mode}    bg-${props.mode} `}
      >
        <div className="container-fluid" style={{ fontFamily: "cursive" }}>
          <Link className="navbar-brand" to="/">
            Top-Headline
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className="navbar-nav me-auto mb-2 mb-lg-0"
              style={{ fontFamily: "cursive" }}
            >
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/bussiness">
                  Bussiness
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment">
                  entertainment
                </Link>
              </li>
          
              <li className="nav-item">
                <Link className="nav-link" to="/health">
                  Health
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/science">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cricket">
                  IPL
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/weather">
                  weather
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/tecnology">
                  Tecnology
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle "
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Country
                </Link>
                <ul
                  className={`dropdown-menu navbar-${props.mode}`}
                  style={{
                    backgroundColor: props.mode === "light" ? "light" : "grey",
                  }}
                >
                  <li>
                    <Link className="dropdown-item" to="/us">
                      America
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/jp">
                      japan
                    </Link>
                  </li>
                  {/* <li><hr className="dropdown-divider"/></li> */}
                  <li>
                    <Link className="dropdown-item" to="/fr">
                      france
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/de">
                      Germany
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/Abouts">
                  About Us
                </Link>
              </li>
            </ul>
       
            <div
              className={`form-check form-switch text-${
                props.mode === "light" ? "dark" : "light"
              } `}
            >
              {/*for changing color use turnery operator*/}{" "}
              <input
                className="form-check-input"
                onClick={props.changemode}
                type="checkbox"
                id="flexSwitchCheckDefault"
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                {" "}
                Dark mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

// import { useState } from 'react';

// function InputBox() {
// const [inputValue, setInputValue] = useState('');

// const handleInputChange = (event) => {
// setInputValue(event.target.value);
// };

// const handleApiCall = () => {
// const encodedValue = encodeURIComponent(inputValue);
// const apiUrl = `https://example.com/api?query=${encodedValue}`;
// // make API call using apiUrl
// };

// return (
// <div>
// <input type="text" value={inputValue} onChange={handleInputChange} />
// <button onClick={handleApiCall}>Call API</button>
// </div>
// );
// }
