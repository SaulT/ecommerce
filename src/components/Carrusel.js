import React, { useState, useEffect} from "react";
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';

import '../App.css';

// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';

import { getAllProducts } from '../services/getAllProducts'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'

function Item(props)
{
    return (
        <Paper>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}
export default function Carrusel(props){
  var items = [
    {
        name: "Random Name #1",
        description: "Probably the most random thing you have ever seen!"
    },
    {
        name: "Random Name #2",
        description: "Hello World!"
    },
    {
        name: "Random Name #3",
        description: "Prueba de items"
    }
  ]

  const [list, setList] = useState([]);
  useEffect(() => {
    getAllProducts()
      .then(items => {
        setList(items)
      })
    return []
  })

  return(
    <div className="Carousel">
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs>
        </Grid>
        <Grid item xs={9}>
          <Carousel
          fullHeightHover={true}     // We want the nav buttons wrapper to only be as big as the button element is
          navButtonsProps={{          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
              style: {
                  backgroundColor: '#929292',
                  borderRadius: 20,
                  color: "white",
                  cursor: "pointer",
                  '&:hover': {
                      opacity: "0.6 !important"
                  },
              },
          }}
          navButtonsWrapperProps={{   // Move the buttons to the bottom. Unsetting top here to override default style.
              style: {
                  bottom: '0',
                  top: 'unset'
              }
          }}

          autoPlay={true}
          interval={2000}
          navButtonsAlwaysVisible={true}
          indicatorIconButtonProps={{
            style: {
                padding: '5px',    // 1
                //color: 'blue'       // 3
            }
        }}
        activeIndicatorIconButtonProps={{
            style: {
                //backgroundColor: 'red' // 2
                color: 'blue'
            }
        }}
        indicatorContainerProps={{
            style: {
                marginTop: '10px', // 5
                textAlign: 'center' // 4
            }

        }}
      >
        {/* {
          items.map( (item, i) => <Item key={i} item={item} /> )
        } */}
        {list.map(result1 =>
          <Paper>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Typography gutterBottom variant="h4" component="div" className="TitleCarousel" >
                  {result1.title}
                </Typography>
                <Typography gutterBottom variant="subtitle2" component="div">
                  {result1.category.toUpperCase()}
                </Typography>
                <Rating name="read-only" value={result1.rating.rate} readOnly size="small"/>
                <Link to={`product/${result1.id}`}>
                  <Button className="CheckButton">
                      Ver más
                  </Button>
                </Link>
              </Grid>
              <Grid item xs={4}>
                <CardMedia
                      component="img"
                      height="280"
                      image={result1.image}
                      alt={result1.title}
                    />
              </Grid>
            </Grid>
          </Paper>
        )}

      </Carousel>
        </Grid>
        <Grid item xs>
        </Grid>
      </Grid>
    </Box>
      

    </div>
  )
}