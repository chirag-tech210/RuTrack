import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        Expense Tracker
      </Typography>
      <Button color="inherit" component={Link} to="/dashboard">Dashboard</Button>
    </Toolbar>
  </AppBar>
);

export default NavBar; 