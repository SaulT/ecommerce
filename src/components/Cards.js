import React, { useState, useEffect} from "react";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Paper from '@mui/material/Paper';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

import { getAllProducts } from '../services/getAllProducts'

export default function Cards(){
  const [list, setList] = useState([]);
  const [ click, showList ] = useState(false)
  useEffect(() => {
    // if(click){
    //   console.log('LLAMANDO api')
    //   getAllProducts()
    //   .then(items => {
    //     //const { results } = items
    //     //setList(results)
    //     setList(items)
    //     console.log(items)
    //   })
    // }
    getAllProducts()
      .then(items => {
        //const { results } = items
        //setList(results)
        setList(items)
        console.log(items)
      })
    return []
  })

  return(
    <Box sx={{ flexGrow: 1 }}>
      {/* <button type="button" onClick={() => showList(true)}>Show</button>
      <ul>
        {list.map(result => <li key={result.id}>{result.title}</li>)}
      </ul> */}

      <Grid container spacing={3}>
        <Grid item xs>
        </Grid>
        <Grid item xs={9}>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              '& > :not(style)': {
                m: 1,
                width: 220,
                height: 340,
              },
            }}
          >
            {list.map(result1 =>
              <Paper>
                <Card sx={{ maxWidth: 345, minHeight: 340 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={result1.image}
                      alt={result1.title}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="subtitle2" component="div">
                        {
                          result1.title.length>50? result1.title.substring(0, 50) + '...' : result1.title
                        }
                      </Typography>
                      <Rating name="read-only" value={result1.rating.rate} readOnly size="small"/>
                      <Typography variant="h6" color="text.secondary">
                        S/. {result1.price}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Ver más
                    </Button>
                  </CardActions>
                </Card>
              </Paper>
            )}
          </Box>
        </Grid>
        <Grid item xs>
        </Grid>
      </Grid>
    </Box>
  )
}