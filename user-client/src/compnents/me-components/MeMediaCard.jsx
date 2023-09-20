import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function MeMediaCard() {
  const navigate = useNavigate();

  const [username,setUsername] = React.useState("");
  
  const getUserData = async()=>{
    const headers = {
      authorization: "Bearer " + localStorage.getItem("token"),
      "Content-Type": "application/json",
    };
    try{
      const res = await axios.get("http://localhost:3000/user/me",{headers});
      setUsername(res.data);
    }
    catch(error){
      console.log(error);
    }
  }

  const handleLogout=() =>{
    localStorage.removeItem("token");
    navigate("/login");
  }

  React.useEffect(()=>{
    getUserData();
  },[])
  
  return (
    <Card sx={{width:"200px"}}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {username}
        </Typography>
      </CardContent>
      <CardActions sx={{justifyContent:"space-between"}}>
        <Button variant="outlined"  size="small" onClick={handleLogout} sx={{color:"Purple",fontWeight:"bold"}}>Logout</Button>
      </CardActions>
    </Card>
  );
}