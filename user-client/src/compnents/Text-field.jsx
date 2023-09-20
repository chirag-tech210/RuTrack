import React from "react";
import { TextField, inputLabelClasses } from "@mui/material";

function TextFieldCustom(props) {
  return (
    <TextField
      id="filled-basic"
      label={props.lable}
      type={props.type}
      variant="standard"
      onChange={props.onChange}
      InputLabelProps={{
        sx: {
          [`&.${inputLabelClasses.shrink}`]: {
            color: "purple",
          },
        },
      }}
      sx={{
        "& .MuiInput-underline:after": {
          borderBottomColor: "purple",
        },
      }}
    />
  );
}

export default TextFieldCustom;
