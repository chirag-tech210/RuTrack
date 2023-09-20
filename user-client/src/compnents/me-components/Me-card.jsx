import React from "react"
import { Typography } from "@mui/material";
import MeMediaCard from "./MeMediaCard";

import "./meCard.css";

function MeCard() {

  return (
    <>
      <div className="courseShow1">
        <div className="card1">
        <MeMediaCard/>
        </div>
        <div className="about">
          <Typography sx={{fontWeight:"bold"}}>Bio</Typography>
        <Typography sx={{marginLeft:"10px"}}>Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica.Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica</Typography>
        </div>
      </div>
    </>
  )
}

export default MeCard;
