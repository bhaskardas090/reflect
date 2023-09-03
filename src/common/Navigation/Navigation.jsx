import React from "react";
import styles from "./Navigation.module.css";
// Library imports
import { Link } from "react-router-dom";
// Assets import
import home from "../../assets/home.png";
import meditate from "../../assets/medidate.png";
import breathe from "../../assets/breathe.png";
import chat from "../../assets/chat.png";

function Navigation() {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.links}>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <div className={styles.link}>
            <img src={home} alt="home" />
            <p>Home</p>
          </div>
        </Link>
        <Link
          to="/meditate"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className={styles.link}>
            <img src={meditate} alt="meditate" />
            <p>Meditate</p>
          </div>
        </Link>
        <Link
          to="/breathe"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className={styles.link}>
            <img src={breathe} alt="breathe" />
            <p>Breathe</p>
          </div>
        </Link>
        <Link
          to="/chatbot"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className={styles.link}>
            <img src={chat} alt="chat" />
            <p>ChatBot</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
