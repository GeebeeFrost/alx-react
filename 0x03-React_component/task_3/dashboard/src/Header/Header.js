import React from "react";
import logo from "../assets/holberton-logo.jpg";
import "./Header.css";

const Header = () => {
  return (
    <div className="App-header">
      <div className="logo">
        <img src={logo} alt="logo" className="App-logo" />
      </div>
      <h1>School dashboard</h1>
    </div>
  );
};

export default Header;
