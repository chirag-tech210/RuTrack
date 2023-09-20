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
import TextFieldCustom from "../Text-field";
import Nav from "../Nav";
import "./loginRegister.css";
import axios from "axios";

function LoginRegister(props) {
  const theme = useTheme();
  const isMobileDevice = useMediaQuery(theme.breakpoints.down("sm"));
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const sendData = async () => {
    const newUser = {
      username: username,
      password: password,
    };

    try {
      const res = await axios.post(
        "http://localhost:3000/user/signup",
        newUser
      );
      
      
    } catch (error) {
      if (error.response) {
        if(error.response.status==="409"){
          alert("User already exist.");
        }
      } else {
        console.log(error.message);
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
          login={props.login}
          register={props.register}
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
              {props.website} to Course Selling Website
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
                onClick={props.register?sendData:null}
                size={isMobileDevice ? "small" : "medium"}
                sx={{ marginTop: "15px", backgroundColor: "purple" }}
              >
                {props.website}
              </Button>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default LoginRegister;
