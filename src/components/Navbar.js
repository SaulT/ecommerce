import React, {useState} from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

import '../App.css';

export default function Navbar(){
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return(
    <Box sx={{ flexGrow: 1 }} className="Remerce">
    <Grid container spacing={3}>
      <Grid item xs>
      </Grid>
      <Grid item xs={9}>
      <Grid container spacing={3}>
        <Grid item xs={2}>
          <Typography variant="h3" gutterBottom component="div"  className="RemerceLogo">
            ReMerce
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 500 }}
            elevation={1}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="¿Qué estas buscando?"
              inputProps={{ 'aria-label': '¿Qué estas buscando?' }}
            />
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Stack direction="row" spacing={1}>
          <Button variant="outlined">Signup</Button>
          <Button variant="outlined">Login</Button>
            <IconButton color="secondary" aria-label="add an alarm">
              <AccountCircleIcon />
            </IconButton>
            <IconButton color="primary" aria-label="add to shopping cart">
              <AddShoppingCartIcon />
            </IconButton>
          </Stack>
        </Grid>
      </Grid>
      </Grid>
      <Grid item xs>
      </Grid>
    </Grid>
    </Box>
  )
}