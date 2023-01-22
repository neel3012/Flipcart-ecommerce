import { Box,Button,makeStyles, Typography } from '@material-ui/core';
import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Cartitem from './Cartitem';
import {removeFromcart} from '../../redux/actions/cartaction'
import Emptycart from './Emptycart';
import Totleview from './Totleview'
const useStyles=makeStyles({
       container:{
              marginTop:'55px',
              padding:'30px 135px',
              display:'flex',
             
       },
       leftcomponent:{
              width:'67%'
       },
       header:{
              padding:'15px 24px',
              background: '#fff'
       },
       bottom:{
              padding:'16px 22px',
              background: '#fff',
              borderTop:'1px solid #f0f0f0'
              ,boxShadow:'0 2px 10px 0 rgb(0 0 0 /10%)'
       },
       placeorder:{
              background: '#fb641b',
              color:'#fff',
              borderRadius:2,
              width:'250px',
              height:'50px',
              display:'flex',
              marginLeft:'auto'
       }
})

function Cart() {
       const dispatch=useDispatch();
       const {cartitems}=useSelector(state=>state.cart)
       const classes=useStyles();
       useEffect(()=>{
console.log('items are',cartitems)
       })
       const removeitemfromcart=(id)=>{
              dispatch(removeFromcart(id))


  }
       return (
              <>
                   {
                     cartitems.length>0 ?
                     <Box className={classes.container}>
                            <Box className={classes.leftcomponent}>
                                   <Box className={classes.header}>
                                          <Typography style={{fontWeight:600,fontSize:18}}>My Cart ({cartitems.length})</Typography>
                                   </Box>
                                   {cartitems.map((item)=>(
                                          <Cartitem item={item} removeitemfromcart={removeitemfromcart}/>
                                   ))}
                                   <Box className={classes.bottom}>
                                          <Button variant="contained" className={classes.placeorder}>Place Order</Button>
                                   </Box>
                            </Box>
                           
                            <Totleview cartitems={cartitems}/>
                            
                     
                     </Box>    : 
                     <Emptycart/>
                   }
              </>
       )
}

export default Cart
