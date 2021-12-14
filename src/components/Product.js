import React, { useState, useEffect} from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Paper, Button, listItemAvatarClasses } from '@mui/material'
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { useParams } from "react-router-dom";

import { getSingleProduct } from '../services/getSingleProduct'

export default function Product(){
  const { id } = useParams();
  const [list, setList] = useState([]);

  useEffect(() => {
    getSingleProduct(id)
      .then(items => {
        //const { results } = items
        //setList(results)
        //console.log(items)
        setList(items)
      })
    return []
  })

  return(
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs>
        </Grid>
        <Grid item xs={9}>
          Product {id}
          <Paper>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Typography gutterBottom variant="h4" component="div" className="TitleCarousel" >
                  {list.title}
                </Typography>
                <Typography gutterBottom variant="subtitle2" component="div">
                  {list.category.toUpperCase()}
                </Typography>
                <Rating name="read-only" value={list.rating.rate} readOnly size="small"/>
                <Button className="CheckButton">
                  Ver más
                </Button>
              </Grid>
              <Grid item xs={4}>
                <CardMedia
                      component="img"
                      height="280"
                      image={list.image}
                      alt={list.title}
                    />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs>
        </Grid>
      </Grid>
    </Box>
  )
}