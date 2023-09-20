import { Card, TextField, Button } from "@mui/material";


function AddCard(props) {

  return (
    <>
      <Card sx={{ display: "flex", flexDirection: "column", padding: "15px" }}>
        <TextField
          id="outlined-basic"
          label="Title"
          variant="outlined"
          sx={{ marginTop: "10px" }}
          onChange={(e) => props.setTitle(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Description"
          variant="outlined"
          sx={{ marginTop: "10px" }}
          onChange={(e) => props.setDescription(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Price"
          variant="outlined"
          sx={{ marginTop: "10px" }}
          onChange={(e) => props.setPrice(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="ImageTitle"
          variant="outlined"
          sx={{ marginTop: "10px" }}
        />
        <Button
          variant="contained"
          sx={{ marginTop: "10px" }}
          onClick={props.handlePublished}
        >
          {props.published ? "Not published" : "Published"}
        </Button>
        <Button
          variant="contained"
          color="success"
          sx={{ marginTop: "10px" }}
          onClick={props.handleAdd}
        >
          Add Course
        </Button>
      </Card>
    </>
  );
}

export default AddCard;
