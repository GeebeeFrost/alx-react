import React from "react";
import { getFooterCopy, getFullYear } from "../utils/utils";
import "./Footer.css";

const footer = `Copyright ${getFullYear()} - ${getFooterCopy(true)}`;

const Footer = () => {
  return (
    <div className="App-footer">
      <p>{footer}</p>
    </div>
  );
};

export default Footer;
