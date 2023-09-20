import React from "react";
import { Typography } from "@mui/material";
import MediaCard from "./MediaCard";

import "./courseDetailCard.css";
import { useRecoilValue } from "recoil";
import { courseWithId } from "../../recoil/atom";

function courseDetailsCard() {
  const course = useRecoilValue(courseWithId);
  return (
    <>
      <div className="courseShow">
        <Typography
          variant="h3"
          sx={{
            color: "Black",
            textAlign: "center",
            fontWeight: "bold",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {course.title}
        </Typography>
        <div className="card">
          <MediaCard />
        </div>
        <div className="about">
          <Typography sx={{ fontWeight: "bold" }}>Description</Typography>
          <Typography
            sx={{ marginLeft: "10px",  textAlign: "left" }}
          >
            {course.description}
          </Typography>
        </div>
      </div>
    </>
  );
}

export default courseDetailsCard;
