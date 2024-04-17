import React from "react";
import { getFooterCopy, getFullYear } from "../utils/utils";
import { StyleSheet, css } from "aphrodite";

const footer = `Copyright ${getFullYear()} - ${getFooterCopy(true)}`;

const Footer = () => {
  return (
    <div className={css(footerStyles.AppFooter)}>
      <p>{footer}</p>
    </div>
  );
};

const footerStyles = StyleSheet.create({
  AppFooter: {
    textAlign: "center",
    height: "10vh",
    borderTop: "4px solid #e0354b",
    fontStyle: "italic",
  },
});

export default Footer;
