import axios from "axios";
import React from "react";
import { Box, Card, Typography, TextField, Button, Grid } from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./login.css";
import { useNavigate } from "react-router-dom";
/// File is incomplete. You need to add input boxes to take input for users to login.

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [status, setStatus] = React.useState(null);

  const handleToken = (token) => {
    console.log(token);
    localStorage.setItem("token", token);
  };

  const handleLogin = async () => {
    const headers = {
      username: username,
      password: password,
      "Content-Type": "application/json",
    };

    try {
      const res = await axios.post(
        "http://localhost:3000/admin/login",
        {},
        { headers }
      );
      handleToken(res.data.token);
      navigate("/courses");
    } catch (error) {
      if (error.response) {
        setStatus(error.response.status);
      } else {
        console.log(error.message);
      }
    }
  };

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
            Login to admin dashboard.
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
              {status === 401 ? (
                <TextField
                  error
                  id="filled-error-helper-text"
                  label="Username"
                  variant="outlined"
                  helperText="Incorrect username or password."
                  size="medium"
                  onChange={(e) => setUsername(e.target.value)}
                />
              ) : (
                <TextField
                  id="outlined-basic"
                  label="Username"
                  variant="outlined"
                  size="medium"
                  onChange={(e) => setUsername(e.target.value)}
                />
              )}
              <Grid item>
                {status === 401 ? (
                  <TextField
                    error
                    id="outlined-basic"
                    label=""
                    variant="outlined"
                    size="medium"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                ) : (
                  <TextField
                    id="outlined-basic"
                    label="Password"
                    type="password"
                    variant="outlined"
                    size="medium"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                )}
              </Grid>
            </Grid>
            <Grid item>
              <Button variant="contained" color="success" onClick={handleLogin}>
                Login
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
            <Typography sx={{ marginRight: "10px" }}>New here?</Typography>
            <Button variant="outlined" onClick={() => navigate("/register")}>
              Register
            </Button>
          </Grid>
        </Card>
      </Box>
    </Box>
  );
}

export default Login;
