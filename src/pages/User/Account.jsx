// import React from 'react'
// import myAccount from '../../assets/myAcc.png'
// import styles from '../../styles/User/Account.module.css'
// import Input from '../../common/MyAccount/Input'

import React, { useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import styles from "../../styles/User/Account.module.css";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import PageHeader from "../../common/PageHeader/PageHeader";
import { useNavigate } from "react-router";

import useDB from "../../hooks/useDB";
import useAuthContext from "../../hooks/useAuthContext";

const Account = () => {
  const [account, setAccount] = useState(null);
  const { user } = useAuthContext();
  const { getUser } = useDB("users");
  const navigate = useNavigate();

  useEffect(() => {
    const getUserData = async () => {
      const data = await getUser(user?.displayName);
      setAccount(data);
    };
    getUserData();
  }, []);

  return (
    <div>
      <PageHeader type="transparent" onclick={() => navigate("/")} />
      <div className={styles.container}>
        <h1>Hello {user?.displayName} !</h1>
      </div>
      <div className={styles.form}>
        {account && (
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
              label="Name"
              defaultValue={account?.name}
              InputProps={{
                readOnly: true,
              }}
              variant="standard"
            />
            <TextField
              label="Username"
              defaultValue={account?.username}
              InputProps={{
                readOnly: true,
              }}
              variant="standard"
            />
            <TextField
              label="Email"
              defaultValue={account?.email}
              InputProps={{
                readOnly: true,
              }}
              variant="standard"
            />
            <TextField
              label="Age"
              defaultValue={account?.age}
              InputProps={{
                readOnly: true,
              }}
              variant="standard"
            />
            <TextField
              label="Date Of Birth"
              defaultValue={account?.dob}
              InputProps={{
                readOnly: true,
              }}
              variant="standard"
            />
            <TextField
              label="Number"
              defaultValue={account?.number}
              InputProps={{
                readOnly: true,
              }}
              variant="standard"
            />
            <TextField
              label="Gender"
              defaultValue={account?.gender}
              InputProps={{
                readOnly: true,
              }}
              variant="standard"
            />
            <TextField
              label="Working as"
              defaultValue={account?.working}
              InputProps={{
                readOnly: true,
              }}
              variant="standard"
            />
          </Box>
        )}
      </div>
    </div>
  );
};

export default Account;
