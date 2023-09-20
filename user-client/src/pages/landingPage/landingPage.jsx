import React from "react";
import Nav from "../../compnents/Nav";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material";

function LandingPage() {
  const theme = useTheme();
  const isMobileDevice = useMediaQuery(theme.breakpoints.down("sm"));
  console.log(isMobileDevice);
  return (
    <>
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
        <Nav login={true} register={true } />
        {isMobileDevice?(
        <>
          <Typography variant="h5">
            Welcome to the Course Selling Website.
          </Typography>
          <Typography variant="h8">By Gaurav Singh.</Typography>
        </>
        ):(
        <>
          <Typography variant="h4">
            Welcome to the Course Selling Website.
          </Typography>
          <Typography variant="h6">By Gaurav Singh.</Typography>
        </>
        )}
      </Box>
    </>
  );
}

export default LandingPage;
