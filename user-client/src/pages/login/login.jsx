import React, { useState, useEffect } from "react";
import {
  Card,
  Typography,
  Box,
  Grid,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import LoginSvg from "../../../svg-component/login-svg";
import TextFieldCustom from "../../compnents/Text-field";
import Nav from "../../compnents/Nav";
import "./loginRegister.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobileDevice = useMediaQuery(theme.breakpoints.down("sm"));
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const sendDataLogin = async () => {
    const headers = {
      username: username,
      password: password,
    };

    try {
  const res = await axios.post(
    "http://localhost:3000/user/login",
    {},
    { headers }
  );
  console.log(res.data);
  if (res.status === 200) {
    localStorage.setItem("token", res.data.token);
    navigate("/allcourses");
  }
} catch (error) {
  if (error.response) {
    if (error.response.data && error.response.data.error && error.response.data.error.message) {
      setError(error.response.data.error.message);
    } else {
      setError(error.response.data.err);
    }
  } else {
    setError("An error occurred during login.");
  }
}
    
    
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#fafafa",
        }}
      >
        <Nav
          navContent={[
            { text: "Login", link: "/login" },
            { text: "Signup", link: "/signup" },
          ]}
          login={false}
          register={true}
        />
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          sx={{ mt: "1" }}
        >
          <Grid item xs={12} marginBottom="5px">
            <Typography
              variant={isMobileDevice ? "h4" : "h3"}
              fontWeight="bold"
              color="purple"
              textAlign="center"
              sx={{ fontFamily: "Dancing Script, cursive", marginTop: "0" }}
            >
              Login to Course Selling Website
            </Typography>
          </Grid>
          <Grid item sx={{ marginTop: "60px" }}>
            {isMobileDevice ? (
              <LoginSvg width="200" height="150" />
            ) : (
              <LoginSvg width="400" height="300" />
            )}
          </Grid>
          <Grid item>
            <Card
              sx={{
                padding: "40px",
                maxWidth: isMobileDevice ? "150px" : "210px",
                marginLeft: isMobileDevice ? "5%" : "60px",
                marginTop: "30px",
              }}
            >
              <div>
                <TextFieldCustom
                  lable="username"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div style={{ marginTop: "10px" }}>
                <TextFieldCustom
                  lable="password"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <Button
                variant="contained"
                color="secondary"
                onClick={sendDataLogin}
                size={isMobileDevice ? "small" : "medium"}
                sx={{ marginTop: "15px", backgroundColor: "purple" }}
              >
                Login
              </Button>
              {error?(<Typography
                variant="body1"
                color="error"
                sx={{ marginTop: "10px" }}
              >
                {error}
              </Typography>):(<></>)}
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Login;
