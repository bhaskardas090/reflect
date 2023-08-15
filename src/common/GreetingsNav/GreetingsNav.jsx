import React from "react";
import styles from "./GreetingsNav.module.css";
import pause from "../../assets/Pause.png";
import resource from "../../assets/Resource.png";
import user from "../../assets/User.png";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { Link } from "react-router-dom";
import useLogOut from "../../hooks/useLogOut";

function GreetingsNav() {
  const { logout } = useLogOut();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div className={styles.greetingsNavContainer}>
        <div className={styles.helloEmoji}>
          <p>🖐🏻</p>
        </div>
        <div className={styles.greetingsMessage}>
          <h2>Hey Tisbha</h2>
          <h5>Have a Great Day!</h5>
        </div>
        <div className={styles.navigationButtons}>
          <img src={pause} />
          <Link to="/resource">
            <img src={resource} />
          </Link>

          <img src={user} onClick={handleMenu} />
          <Menu
            open={Boolean(anchorEl)}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            sx={{ marginTop: "18%", marginRight: "10%" }}
            onClose={handleClose}
          >
            <Link
              to="/account"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <MenuItem>My Account</MenuItem>
            </Link>
            <Link
              to="/faqs"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <MenuItem>FAQs</MenuItem>
            </Link>
            <Link
              to="/journal"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <MenuItem>Journal</MenuItem>
            </Link>
            <Link
              to="/routine-history"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <MenuItem>Past Tasks</MenuItem>
            </Link>
            <MenuItem onClick={() => logout()}>Logout</MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
}

export default GreetingsNav;
