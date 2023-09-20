import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";


function Landing(props){
  const navigate = useNavigate();

  const handleClick1 = ()=> {
    navigate("/register");
  };

  const handleClick2 = ()=> {
    navigate("/login");
  };

  return (
    <div>
      <Box
        sx={{
          backgroundImage: `url("https://images.pexels.com/photos/733852/pexels-photo-733852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")`,
          WebkitBackgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h4">
          Welcome to course selling website Admin's Panel!
        </Typography>
        <Grid container spacing={2} justifyContent="center" marginTop="10px">
          <Grid item>
            <Button variant="contained" color="success" onClick={handleClick1}>
              Register
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="secondary" onClick={handleClick2}>
              Login
            </Button>
          </Grid>
        </Grid>
        <br />
      </Box>
    </div>
  )};


export default Landing;
