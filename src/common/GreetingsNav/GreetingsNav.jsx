import React from "react";
import styles from "./GreetingsNav.module.css";
// Library imports
import { Link } from "react-router-dom";
//MUI component Import
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
//Asset Import
import journal from "../../assets/journal.png";
import extra from "../../assets/Extra.png";

function GreetingsNav() {
  // MUI Sub Menu State
  const [anchorElExtra, setAnchorElExtra] = React.useState(null);
  const openExtra = Boolean(anchorElExtra);

  // Handler Functions

  const handleExtra = (event) => {
    setAnchorElExtra(event.currentTarget);
  };
  const handleExtraClose = () => {
    setAnchorElExtra(null);
  };

  return (
    <div className={styles.greetingComponent}>
      <div className={styles.greetingsNavContainer}>
        {/* Greeting Section */}
        <div className={styles.helloSection}>
          <p>🖐🏻</p>
          <div className={styles.greetingsMessage}>
            <h4>Hey Manas,</h4>
            <h5>Have a Great Day!</h5>
          </div>
        </div>
        {/* Action Buttons */}
        <div className={styles.navigationButtons}>
          {/* //! JOURNAL */}
          <Link to="/journal">
            <img src={journal} alt="journal" />
          </Link>
          {/* //! EXTRA */}
          <Menu
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            className={styles.subMenu}
            anchorEl={anchorElExtra}
            open={openExtra}
            onClose={handleExtraClose}
          >
            <Link
              to="/select-routine"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <MenuItem>Change Routine</MenuItem>
            </Link>
            <Link
              to="/routine-history"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <MenuItem>Past Tasks</MenuItem>
            </Link>
            <Link
              to="/faqs"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <MenuItem>FAQs</MenuItem>
            </Link>
          </Menu>
          <img src={extra} onClick={handleExtra} alt="extra" />
        </div>
      </div>
    </div>
  );
}

export default GreetingsNav;
