import React from "react";
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import CardMedia from '@mui/material/CardMedia';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

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
  return(
    <div>
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
        {
          items.map( (item, i) => <Item key={i} item={item} /> )
        }

      </Carousel>
        </Grid>
        <Grid item xs>
        </Grid>
      </Grid>
    </Box>
      

    </div>
  )
}