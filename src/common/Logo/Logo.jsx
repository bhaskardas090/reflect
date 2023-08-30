import React from "react";
import logo from "../../assets/Logo.png";
import logoText from "../../assets/LogoText.png";
import styles from "./Logo.module.css";
import meditate from "../../assets/Login_Page_1.png";

function Logo() {
  return (
    <div>
      <div className={styles.imgContainer}>
        <img src={logo} alt="logo" className={styles.logo} />
        <img src={logoText} alt="logo" className={styles.logoText} />
        <img
          src={meditate}
          alt="meditate"
          // style={{ display: "flex", justifyContent: "center", marign: "auto" }}
        />
      </div>
    </div>
  );
}

export default Logo;
