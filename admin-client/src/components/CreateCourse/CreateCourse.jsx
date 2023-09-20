import axios from "axios";
import React, { useEffect, useState } from "react";
import Nav from "../Nav/nav.jsx";
import AddCard from "./addCard.jsx";
import { Grid } from "@mui/material";

function CreateCourse() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [published, setPublished] = useState(false);


  const handleClick = () => {
    published ? setPublished(false) : setPublished(true);
  };
  const handleButtonClick = async () => {

    const body = {
      title: title,
      description: description,
      price: price,
      imageLink: image,
      published: published,
    };
    const headers = {
      authorization: "Bearer " + localStorage.getItem("token"),
      "Content-Type": "application/json",
    };

    try {
      const res = await axios.post(
        "http://localhost:3000/admin/courses",
        body,
        { headers }
      );
      alert(res.data.message);
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
      } else {
        console.log(error.message);
      }
    }
  };


  useEffect(() => {});
  console.log(published);
  return (
    <div>
      <Nav isCourse={false}/>
      <Grid
        container
        sx={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: "140px",
        }}
      >
        <Grid item>
          <AddCard
            setTitle={setTitle}
            setDescription={setDescription}
            setPrice={setPrice}
            handlePublished={handleClick}
            handleAdd={handleButtonClick}
            published={published}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default CreateCourse;
