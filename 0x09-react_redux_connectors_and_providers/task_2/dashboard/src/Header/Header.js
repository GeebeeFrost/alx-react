import React, { useContext } from "react";
import logo from "../assets/holberton-logo.jpg";
import { StyleSheet, css } from "aphrodite";
import { AppContext } from "../App/AppContext";

const Header = () => {
  const { user, logOut } = useContext(AppContext);

  return (
    <div className={css(styles.AppHeader)}>
      <div className="logo">
        <img src={logo} alt="logo" className={css(styles.AppLogo)} />
      </div>
      <h1 className={css(styles.heroHeader)}>School dashboard</h1>
      {user.isLoggedIn && (
        <section id="logoutSection">
          <p>
            Welcome {user.email}{" "}
            <a onClick={logOut} className={css(styles.link)}>
              Logout
            </a>
          </p>
        </section>
      )}
    </div>
  );
};

const styles = StyleSheet.create({
  AppHeader: {
    borderBottom: "4px solid #e0354b",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "2rem",
  },

  heroHeader: {
    color: "#e0354b",
  },

  AppLogo: {
    width: "60%",
  },

  link: {
    cursor: "pointer",
  },
});

export default Header;
