import React from "react";
import styles from "./Navigation.module.css";
// Library imports
import { NavLink } from "react-router-dom";
// Assets import
import home from "../../assets/home.png";
import meditate from "../../assets/medidate.png";
import breathe from "../../assets/breathe.png";
import chat from "../../assets/chat.png";

function Navigation() {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.links}>
        <NavLink
          to="/"
          style={({ isActive, isPending }) => {
            return {
              color: isActive ? "#FFB02E" : "black",
              textDecoration: "none",
              fontSize: "14px",
            };
          }}
        >
          <div className={styles.link}>
            <img src={home} alt="home" />
            <p>Home</p>
          </div>
        </NavLink>
        <NavLink
          to="/meditate"
          style={({ isActive, isPending }) => {
            return {
              color: isActive ? "#FFB02E" : "black",
              textDecoration: "none",
              fontSize: "14px",
            };
          }}
        >
          <div className={styles.link}>
            <img src={meditate} alt="meditate" />
            <p>Meditate</p>
          </div>
        </NavLink>
        <NavLink
          to="/breathe"
          style={({ isActive, isPending }) => {
            return {
              color: isActive ? "#FFB02E" : "black",
              textDecoration: "none",
              fontSize: "14px",
            };
          }}
        >
          <div className={styles.link}>
            <img src={breathe} alt="breathe" />
            <p>Breathe</p>
          </div>
        </NavLink>
        <NavLink
          to="/chatbot"
          style={({ isActive, isPending }) => {
            return {
              color: isActive ? "#FFB02E" : "black",
              textDecoration: "none",
              fontSize: "14px",
            };
          }}
        >
          <div className={styles.link}>
            <img src={chat} alt="chat" />
            <p>ChatBot</p>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Navigation;
