import React, { useState } from "react";
import axios from "axios";
import { Box, Card, Typography, TextField, Button, Grid } from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./register.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState(null);

  const handleUsernameChange = (e) => {
    setStatus(null);
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegister = async () => {
    const user = {
      username: username,
      password: password,
    };
    try {
      const response = await axios.post(
        "http://localhost:3000/admin/signup",
        user
      );
      if(response.status===200){
        alert("Successful register. Now login.");
        navigate("/login");
      };

    } catch (error) {
      if (error.response) {
        setStatus(error.response.status);
      } else {
        console.log(error.message);
      }
    }
  };

  console.log(status);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#ededed",
        padding: 0,
        margin: 0,
      }}
    >
      <Box sx={{ my: "auto" }}>
        <Card sx={{ minWidth: 275, padding: "20px", margin: 0 }}>
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            Register to admin dashboard.
          </Typography>
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
            direction="column"
            marginTop="10px"
          >
            <Grid item>
              {status === 409 ? (
                <TextField
                  error
                  id="filled-error-helper-text"
                  label="Password"
                  variant="outlined"
                  helperText="User already exist."
                  size="medium"
                  onChange={handleUsernameChange}
                />
              ) : (
                <TextField
                  id="outlined-basic"
                  label="Username"
                  variant="outlined"
                  size="medium"
                  onChange={handleUsernameChange}
                />
              )}
            </Grid>
            <Grid item>
              {status === 409 ? (
                <TextField
                  error
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  helperText=""
                  size="medium"
                  onChange={handlePasswordChange}
                />
              ) : (
                <TextField
                  id="outlined-basic"
                  label="Password"
                  type="password"
                  variant="outlined"
                  size="medium"
                  onChange={handlePasswordChange}
                />
              )}
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="success"
                onClick={handleRegister}
              >
                Register
              </Button>
            </Grid>
          </Grid>
          <Grid
            item
            container
            justifyContent="space-between"
            alignItems="center"
            sx={{ marginTop: "20px" }}
          >
            <Typography sx={{ marginRight: "10px" }}>
              Already a user?
            </Typography>
            <Button variant="outlined" onClick={() => navigate("/login")}>
              Login
            </Button>
          </Grid>
        </Card>
      </Box>
    </Box>
  );
};

export default Register;
