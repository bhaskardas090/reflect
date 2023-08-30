import React from "react";
import Box from "@mui/material/Box";
import styles from "../../styles/User/Account.module.css";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment"; // Import InputAdornmentx
import Button from "@mui/material/Button";
import PersonIcon from "@mui/icons-material/Person";
import PageHeader from "../../common/PageHeader/PageHeader";
import { useNavigate } from "react-router";

//ICONS
import CakeIcon from "@mui/icons-material/Cake";
import PhoneIcon from "@mui/icons-material/Phone";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WcIcon from "@mui/icons-material/Wc";
import AssuredWorkloadIcon from "@mui/icons-material/AssuredWorkload";
import useDB from "../../hooks/useDB";
import useAuthContext from "../../hooks/useAuthContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userDetails } from "../../helper/Validation";

const UpdateAccount = () => {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const { updateUser } = useDB("users");

  const {
    register,
    handleSubmit,
    formState: { errors },
    // reset,
  } = useForm({
    resolver: yupResolver(userDetails),
  });

  const onSubmit = async (data) => {
    updateUser(data);
  };

  return (
    <div className="main">
      <PageHeader type="transparent" onclick={() => navigate("/")} />
      <div className={styles.container}>
        <h1>Hello {user?.displayName} !</h1>
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
          <b style={{}}>! Please fill all the fields to update</b>
          <TextField
            label="Name"
            variant="outlined"
            placeholder="your name"
            name="name"
            {...register("name")}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon style={{ color: "#6E83B7" }} />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label="Age"
            variant="outlined"
            placeholder="your age"
            {...register("age")}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AcUnitIcon style={{ color: "#6E83B7" }} />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label="Birthday"
            variant="outlined"
            placeholder="dd/mm/yy"
            {...register("dob")}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CakeIcon style={{ color: "#6E83B7" }} />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label="Phone Number"
            variant="outlined"
            placeholder="+91 9437593134"
            {...register("phone")}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PhoneIcon style={{ color: "#6E83B7" }} />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label="Gender"
            variant="outlined"
            {...register("gender")}
            placeholder="Male / Female / Other"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <WcIcon style={{ color: "#6E83B7" }} />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            label="Working As"
            variant="outlined"
            className={styles.pass}
            placeholder="Student / Housewife / Job"
            {...register("working")}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AssuredWorkloadIcon style={{ color: "#6E83B7" }} />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Button
          variant="contained"
          sx={{ width: "85%" }}
          onClick={handleSubmit(onSubmit)}
        >
          Update Profile
        </Button>
      </div>
    </div>
  );
};

export default UpdateAccount;