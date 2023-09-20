import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
export default function MediaCard(props) {
  const navigate = useNavigate();

  function handleEdit() {
    navigate("/edit/" + props.courseId);
  }
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://source.unsplash.com/random"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
        <Box sx={{ display: "flex", marginTop: "5px" }}>
          <Typography variant="h6">Price:</Typography>
          <Typography variant="h6" sx={{ marginLeft: "3px" }}>
            ₹ {props.price}
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        {props.Edit && (
          <Button size="small" onClick={() => props.handleCard(props.courseId)}>
            Delete
          </Button>
        )}
        {!props.Edit && (
          <Typography sx={{ marginBottom: "6px",marginLeft:"5px"}}>
            {props.published ? "Published" : "Not Published"}
          </Typography>
        )}
        {props.Edit && (
          <Button size="small" onClick={handleEdit}>
            Edit{" "}
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
