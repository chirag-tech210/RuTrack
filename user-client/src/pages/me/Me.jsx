import React from "react";
import NavInternal from "../../compnents/Nav-Internal";
import MeCard from "../../compnents/me-components/Me-card";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import Footer from "../../compnents/footer";

function Me() {
  const theme = useTheme();
  const isSmallDevice = useMediaQuery(theme.breakpoints.down("sm"));
  const navContent = [
    { text: "All Courses", link: "/courses" },
    { text: "Purchased Courses", link: "/purchasedcourse" },
  ];
  return (
    <>
      <Box sx={{ backgroundColor: "#fafafa",minHeight:"100vh" }}>
        <NavInternal data={navContent} />
        <MeCard />
      </Box>
        <div style={{ marginTop:"auto" }}>
          <Footer />
        </div>
    </>
  );
}

export default Me;
