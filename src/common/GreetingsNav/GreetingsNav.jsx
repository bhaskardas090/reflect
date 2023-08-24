import React from "react";
import styles from "./GreetingsNav.module.css";
import pause from "../../assets/Pause.png";
import resource from "../../assets/Resource.png";
import userIcon from "../../assets/User.png";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { Link } from "react-router-dom";
import useLogOut from "../../hooks/useLogOut";
import useAuthContext from "../../hooks/useAuthContext";

function GreetingsNav() {
  const { logout } = useLogOut();
  const { user } = useAuthContext();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
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
          <h2>Hey {user?.displayName}</h2>
          <h5>Have a Great Day!</h5>
        </div>
        <div className={styles.navigationButtons}>
          <img src={pause} alt="pause" />
          <Link to="/resource">
            <img src={resource} alt="resource" />
          </Link>

          <img src={userIcon} onClick={handleClick} alt="menu" />
          <Menu
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            sx={{ marginTop: "18%", marginRight: "10%" }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <Link
              to="/account"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <MenuItem>My Account</MenuItem>
            </Link>
            <Link
              to="/select-routine"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <MenuItem>Change Routine</MenuItem>
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
            <Link
              to="/settings"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <MenuItem>Settings</MenuItem>
            </Link>
            <Link
              to="/faqs"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <MenuItem>FAQs</MenuItem>
            </Link>
            <MenuItem onClick={() => logout()}>Logout</MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
}

export default GreetingsNav;
