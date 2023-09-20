import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Grid } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  return (
    <>
      <AppBar
        position="static"
        color="primary"
        sx={{ top: "auto", bottom: 0, backgroundColor: "#461959" }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
          <Typography
            variant="body1"
            color="inherit"
            sx={{ marginTop: "30px" }}
          >
            This website is made my Gaurav Singh.
          </Typography>
        </Toolbar>
        <Grid container sx={{ display: "flex", justifyContent: "center" }}>
          <Grid item>
            <IconButton>
              <a
                href="https://github.com/gauravsingh94/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon sx={{ color: "white", fontSize: "small" }} />
              </a>
            </IconButton>
          </Grid>
          <Grid item sx={{ marginBottom: "20px" }}>
            <IconButton>
              <a
                href="https://www.linkedin.com/in/gaurav-singh-a632a1231/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon sx={{ color: "white", fontSize: "small" }} />
              </a>
            </IconButton>
          </Grid>
        </Grid>
      </AppBar>
    </>
  );
}

export default Footer;
