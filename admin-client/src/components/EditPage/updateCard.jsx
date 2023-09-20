import { Card, TextField, Button } from "@mui/material";


function UpdateCard(props) {

  return (
    <>
      <Card sx={{ display: "flex", flexDirection: "column", padding: "15px" }}>
        <TextField
          id="outlined-basic"
          value={props.title}
          label="Title"
          variant="outlined"
          sx={{ marginTop: "10px" }}
          onChange={(e) => props.setTitle(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          value = {props.description}
          label="Description"
          variant="outlined"
          sx={{ marginTop: "10px" }}
          onChange={(e) => props.setDescription(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          value={props.price}
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
          onClick={props.ohandleUpdate}
        >
          Update
        </Button>
      </Card>
    </>
  );
}

export default UpdateCard;
