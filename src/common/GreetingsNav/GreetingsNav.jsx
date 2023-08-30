import React from "react";
import styles from "./GreetingsNav.module.css";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { Link } from "react-router-dom";
import useLogOut from "../../hooks/useLogOut";
import useAuthContext from "../../hooks/useAuthContext";
import account from "../../assets/Account.png";
import journal from "../../assets/journal.png";
import extra from "../../assets/Extra.png";
function GreetingsNav() {
  const { logout } = useLogOut();
  const { user } = useAuthContext();
  const [anchorElAcc, setAnchorElAcc] = React.useState(null);
  const openAcc = Boolean(anchorElAcc);
  const [anchorElExtra, setAnchorElExtra] = React.useState(null);
  const openExtra = Boolean(anchorElExtra);

  const handleAccount = (event) => {
    setAnchorElAcc(event.currentTarget);
  };
  const handleAccClose = () => {
    setAnchorElAcc(null);
  };

  const handleExtra = (event) => {
    setAnchorElExtra(event.currentTarget);
  };
  const handleExtraClose = () => {
    setAnchorElExtra(null);
  };

  return (
    <div>
      <div className={styles.greetingsNavContainer}>
        <div className={styles.helloEmoji}>
          <p>🖐🏻</p>
        </div>
        <div className={styles.greetingsMessage}>
          <h4>Hey {user?.displayName.slice(0, 10)}</h4>
          <h5>Have a Great Day!</h5>
        </div>
        <div className={styles.navigationButtons}>
          {/* //! JOURNAL */}
          <Link to="/journal">
            <img src={journal} alt="journal" />
          </Link>
          {/* //! EXTRA */}
          <Menu
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            sx={{ marginTop: "10%" }}
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
              to="/resource"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <MenuItem>Resource</MenuItem>
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
          {/* //! ACCOUNT */}
          <img src={account} onClick={handleAccount} alt="account" />
          <Menu
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            sx={{ marginTop: "10%" }}
            anchorEl={anchorElAcc}
            open={openAcc}
            onClose={handleAccClose}
          >
            <Link
              to="/account"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <MenuItem>My Account</MenuItem>
            </Link>
            <Link
              to="/update-account"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <MenuItem>Update Account</MenuItem>
            </Link>
            <MenuItem onClick={() => logout()}>Logout</MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
}

export default GreetingsNav;
