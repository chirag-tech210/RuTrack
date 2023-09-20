import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useTheme,useMediaQuery } from '@mui/material';

export default function CourseCard(props) {
  const theme = useTheme();
  const isMobileDevice = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Card sx={{width:isMobileDevice?"250px":"300px"}}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://source.unsplash.com/random"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" >
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}}  >
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={()=>props.handleClick(props.courseId)} sx={{color:"purple"}}>{props.button1}</Button>
        <Button size="small" onClick={()=>props.purchaseRoute(props.courseId)} sx={{color:"purple"}}>{props.button2}</Button>
      </CardActions>
    </Card>
  );
}