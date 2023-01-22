import { Box, Button,makeStyles } from '@material-ui/core'
import React from 'react'
import clsx from 'clsx';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import {useDispatch} from 'react-redux';
import {addTOCart} from '../../redux/actions/cartaction'
import { useHistory } from 'react-router-dom';
const useStyles=makeStyles({
       container:{
              padding:'40px 0 0 80px'
       },
       image:{
              padding:'15px 20px',
              border:'1px solid #f0f0f0',
              width:'100%'
       },
       button:{
              height:50,
              width:'46%',
              borderRadius:2
       },
       addtocart:{
        background: '#ff9f00',
        color:'#fff',
        marginRight:10

       },
       buynow:{
              background: '#fb641b',
              color:'#fff'
       }
})
function Actionitems({product}) {
      
       const classes=useStyles();
       const dispatch=useDispatch();
       const history=useHistory();
       const addtocart=async ()=>{
              await dispatch(addTOCart(product.id))
              history.push('/cart')
       }
       return (
              <div>
                     <Box className={classes.container}>
                            <img src={product.detailUrl} className={classes.image}/><br/>
                            <Button onClick={addtocart} variant='contained' className={clsx(classes.button,classes.addtocart)}><ShoppingCartIcon/>Add to cart</Button>
                            <Button variant="contained" className={clsx(classes.button,classes.buynow)}><FlashOnIcon/>Buy now</Button>
                     </Box>                    
              </div>
       )
}

export default Actionitems
