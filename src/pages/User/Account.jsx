import React, { useEffect, useState } from "react";
import styles from "../../styles/Account.module.css";
// MUI componetns
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
// Component imports
import PageHeader from "../../common/PageHeader/PageHeader";
// Hook imports
import useDB from "../../hooks/useDB";
import useAuthContext from "../../hooks/useAuthContext";
// Library import
import { useNavigate } from "react-router";
//ICONS
import EditIcon from "@mui/icons-material/Edit";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import NumbersIcon from "@mui/icons-material/Numbers";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import TransgenderIcon from "@mui/icons-material/Transgender";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";

const Account = () => {
  const { user } = useAuthContext();
  const { getUser } = useDB("users"); // Getting the user form the backend
  const [account, setAccount] = useState(null);
  const navigate = useNavigate();

  // Getting the user from the backend
  useEffect(() => {
    const getUserData = async () => {
      const data = await getUser(user?.displayName);
      setAccount(data);
    };
    getUserData();
  }, [user]);

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
              "& > :not(style)": { m: 1, width: "90vw" },
            }}
            noValidate
            autoComplete="off"
          >
            <div className={styles.titleAndEdit}>
              <h2>Account Details</h2>
              <IconButton aria-label="delete">
                <EditIcon
                  style={{
                    backgroundColor: "#18ADED",
                    borderRadius: "50%",
                    padding: "5px",
                    color: "white",
                  }}
                  onClick={() => navigate("/update-account")}
                />
              </IconButton>
            </div>
            <div className={styles.wrapper}>
              <AccountCircleIcon sx={{ fontSize: "32px", color: "grey" }} />
              <TextField
                label="Name"
                defaultValue={account?.name}
                InputProps={{
                  readOnly: true,
                }}
                variant="standard"
                className={styles.textField}
              />
            </div>
            <div className={styles.wrapper}>
              <PersonIcon sx={{ fontSize: "32px", color: "grey" }} />
              <TextField
                label="Username"
                defaultValue={account?.username}
                InputProps={{
                  readOnly: true,
                }}
                className={styles.textField}
                variant="standard"
              />
            </div>
            <div className={styles.wrapper}>
              <EmailIcon sx={{ fontSize: "32px", color: "grey" }} />
              <TextField
                label="Email"
                defaultValue={account?.email}
                InputProps={{
                  readOnly: true,
                }}
                variant="standard"
                className={styles.textField}
              />
            </div>
            <div className={styles.wrapper}>
              <NumbersIcon sx={{ fontSize: "32px", color: "grey" }} />
              <TextField
                label="Age"
                defaultValue={account?.age}
                InputProps={{
                  readOnly: true,
                }}
                variant="standard"
                className={styles.textField}
              />
            </div>
            <div className={styles.wrapper}>
              <PhoneAndroidIcon sx={{ fontSize: "32px", color: "grey" }} />
              <TextField
                label="Number"
                defaultValue={account?.number}
                InputProps={{
                  readOnly: true,
                }}
                variant="standard"
                className={styles.textField}
              />
            </div>
            <div className={styles.wrapper}>
              <TransgenderIcon sx={{ fontSize: "32px", color: "grey" }} />
              <TextField
                label="Gender"
                defaultValue={account?.gender}
                InputProps={{
                  readOnly: true,
                }}
                variant="standard"
                className={styles.textField}
              />
            </div>
            <div className={styles.wrapper}>
              <WorkOutlineIcon sx={{ fontSize: "32px", color: "grey" }} />
              <TextField
                label="Working as"
                defaultValue={account?.working}
                InputProps={{
                  readOnly: true,
                }}
                variant="standard"
                className={styles.textField}
              />
            </div>
          </Box>
        )}
      </div>
    </div>
  );
};

export default Account;
