import { Box, makeStyles, Typography } from '@material-ui/core'
import React,{useState,useEffect} from 'react'
const usestyles=makeStyles({
       component:{
              width:'30%',
              backgroundColor:'#fff',
              marginLeft:15,
            
       
       },
       header:{
              padding:'16px 24px',
              borderBottom:'1px solid #f0f0f0'
       }
       ,container:{
              padding:'15px 24px',
              '&>*':{
                     marginTop:20,
                     fontSize:14
              }
       },
       greycolor:{
              color:'#878787'
       },
       price:{
              float: 'right'
       }
       ,totalamount:{
              fontSize:18,
              fontWeight:600,
              borderTop:'1px dashed #f0f0f0'
              ,padding:'20px 0'
       }
})
function Totleview({cartitems}) {
       const classes=usestyles();
       const [price,setprice]=useState(0);
       const [discount,setdiscount]=useState(0)
       useEffect(()=>{
              totalcost()
       },[cartitems])
       const totalcost=()=>{
              let price=0,discount=0;
              cartitems.map(item=>{
                     price += item.price.mrp;
                     discount+=(item.price.mrp-item.price.cost);
              })
              setprice(price);
              setdiscount(discount)
       }
       
       return (
             <Box className={classes.component}>
                    <Box className={classes.header}>
                            <Typography className={classes.greycolor}>PRICE DETAILS</Typography>
                    </Box>
                    <Box className={classes.container}>
                    <Typography>Price ({cartitems.length} item) <span className={classes.price}>{price}</span></Typography>
                    <Typography>Discount <span className={classes.price}>- {discount}</span></Typography>

                    <Typography>Delivery Charge<span className={classes.price}>₹40</span></Typography>
                    <Typography className={classes.totalamount}>Total amount<span className={classes.price}>₹{price-discount+40}</span></Typography>
                    <Typography style={{color:'green'}}>You will save ₹{discount-40} on this order.</Typography>


                    </Box>
             </Box>
       )
}

export default Totleview
