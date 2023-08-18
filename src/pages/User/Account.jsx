// import React from 'react'
// import myAccount from '../../assets/myAcc.png'
// import styles from '../../styles/User/Account.module.css'
// import Input from '../../common/MyAccount/Input'

import React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import styles from "../../styles/User/Account.module.css";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment"; // Import InputAdornmentx
import CakeIcon from "@mui/icons-material/Cake";
import PhoneIcon from "@mui/icons-material/Phone";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import Button from "@mui/material/Button";
import PersonIcon from "@mui/icons-material/Person";
import PageHeader from "../../common/PageHeader/PageHeader";
import { useNavigate } from "react-router";

const Account = () => {
  const [name, setName] = useState("Tisbhas");
  const navigate = useNavigate();
  function handleChange(event) {
    const value = event.target.value;

    setName(value);
  }

  return (
    <div className="main">
      <PageHeader type="transparent" onclick={() => navigate("/")} />
      <div className={styles.container}>
        <h1>Hello {name} !</h1>
      </div>
      <div className={styles.form}>
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            "& > :not(style)": { m: 1, width: "30ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            placeholder="your name"
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon style={{ color: "#6E83B7" }} />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            id="outlined-basic"
            label="Birthday"
            variant="outlined"
            placeholder="dd/mm/yy"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CakeIcon style={{ color: "#6E83B7" }} />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            id="outlined-basic"
            label="Phone Number"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PhoneIcon style={{ color: "#6E83B7" }} />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            id="outlined-basic"
            label="Instagram Account"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <InstagramIcon style={{ color: "#6E83B7" }} />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            id="outlined-basic"
            label="Email Address"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon style={{ color: "#6E83B7" }} />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            className={styles.pass}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon style={{ color: "#6E83B7" }} />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Button variant="contained" sx={{ width: "80%" }}>
          Update Profile
        </Button>
      </div>
    </div>
  );
};

export default Account;
