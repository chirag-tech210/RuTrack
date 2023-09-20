import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useRecoilValue } from 'recoil';
import { courseWithId } from '../../recoil/atom';
import axios from 'axios';

export default function MediaCard() {
  const course =useRecoilValue(courseWithId);

  const purchaseRoute = async()=>{
    const headers = {
      authorization: "Bearer " + localStorage.getItem("token"),
      "Content-Type": "application/json",
    };
    try{
      const res = await axios.post("http://localhost:3000/user/purchase/"+course._id,{},{headers});
      alert(res.data.message);
    }
    catch(error){
      console.log(error);
    }
  }
  
  return (
    <Card sx={{width:"200px"}}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://source.unsplash.com/random"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        ₹ {course.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={purchaseRoute} sx={{color:"purple"}}>Purchase</Button>
      </CardActions>
    </Card>
  );
}