import React from 'react'
import { Box, makeStyles, Grid } from '@material-ui/core';
import clsx from 'clsx';
const ImageURL = [
       'https://rukminim1.flixcart.com/flap/960/960/image/2f30db9425df5cec.jpg?q=50',
       'https://rukminim1.flixcart.com/flap/960/960/image/084789479074d2b2.jpg',
       'https://rukminim1.flixcart.com/flap/960/960/image/1ce0c4c1fb501b45.jpg?q=50'
   ];

const useStyle = makeStyles(theme => ({
       wrapper:{
              display:'flex',
              marginTop:20,
              justifyContent:'space-between'
       },
       img:{
              marginTop:20,
       }

   }));
function Midsection() {
       const classes = useStyle();
       const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';
       return (
              <>
              <Box className={classes.wrapper}>
{
       ImageURL.map(image=>(
                     <img src={image} width='33%'/>
              ))
}
              </Box>

              <img src={url} style={{width:'100%'}} className={classes.img}/>

</>
              
       )
}

export default Midsection
