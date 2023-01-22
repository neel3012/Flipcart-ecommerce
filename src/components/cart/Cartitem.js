import React from "react";
import { Box, Button, Card, makeStyles, Typography } from "@material-ui/core";
import clsx from 'clsx';
import Groupbutton from './Groupbutton'
const useStyles = makeStyles({
  component: {
    display: "flex",
    borderRadius: 0,
    borderTop:'1px solid #f0f0f0'
  },
  leftcomponent: {
    margin: '20px',
    display:'flex',
    flexDirection:'column'
  },
  rightcomponent: {
    marginTop: 20,
  },
  smalltext:{
         fontSize: 14
  },
  greytextcolor:{
         color:'#878787'
  },
  image:{
         height:110,
         width:110
  },
  button:{
         margin:'15px 0'
  }
});
function Cartitem({ item,removeitemfromcart }) {
       const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
  const classes = useStyles();
  
  return (
    <Card className={classes.component}>
      <Box className={classes.leftcomponent}>
             <img src={item.url} className={classes.image}/>
             <Groupbutton/>
      </Box>
      <Box className={classes.rightcomponent}>
             <Typography>{item.title.longTitle}</Typography>
             <Typography style={{marginTop:10}} className={clsx(classes.greytextcolor,classes.smalltext)}>Seller: SupercomNet
             <span><img src={fassured} style={{width:55,marginLeft:10}}/></span></Typography>
              <Typography style={{margin:'20px 0'}}>
                     <span>₹{item.price.cost}</span> &nbsp; &nbsp;&nbsp;
                     <span><strike>₹{item.price.mrp}</strike></span> &nbsp;&nbsp;&nbsp;
                     <span style={{color:'#388E3E'}}>{item.price.discount} off</span>
              </Typography> 

              <Button onClick={()=>{removeitemfromcart(item.id)}} className={classes.button}>Remove</Button>
      </Box>
    </Card>
  );
}

export default Cartitem;
