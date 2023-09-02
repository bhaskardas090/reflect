import React from "react";
import styles from "./PageHeader.module.css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import back from "../../assets/back.png";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { IconButton } from "@mui/material";
function PageHeader({ onclick, title, type }) {
  return (
    <div className={styles.pageHeaderComponent}>
      {type === "transparent" ? (
        <div className={styles.pageHeader}>
          <img
            src={back}
            className={styles.backButton}
            onClick={() => onclick()}
            alt="back"
          />
          <p className={styles.title}>{title}</p>
        </div>
      ) : (
        <AppBar
          sx={{
            overflowX: "hidden",
            width: "100vw",
            background: `linear-gradient(180deg, #fda52b 21.3%, #fe7401 100%)`,
          }}
          position="static"
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => onclick()}
            >
              <ArrowBackIosIcon />
            </IconButton>
            <p style={{ fontSize: "1.2rem" }}>{title}</p>
          </Toolbar>
        </AppBar>
      )}
    </div>
  );
}

export default PageHeader;
