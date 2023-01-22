import React, { useEffect } from 'react'
import Navbar from './Navbar';
import Banner from './Banner'
import Slide from './Slide'
import {Box,makeStyles} from '@material-ui/core';
// import {products} from '../../constant/data'
import Midsection from './Midsection';
import {getproducts as listproducts} from '../../redux/actions/productactions'
import {useDispatch, useSelector} from 'react-redux'
const useStyle=makeStyles({
       component:{
              padding:'15px 10px',
              backgroundColor:'#F2F2F2'
       },
       rightimg:{
             background: '#FFFFFF',
             padding:5,
             margin: '12px 0 0 10px',
             width:'70%'
       }
})
function Home() {
       const classes=useStyle();
       const addUrl="https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70"

       const {products}=useSelector(state=>state.getproducts);
       const dispatch=useDispatch();
       useEffect(()=>{
              dispatch(listproducts())
       },[dispatch])
       return (
              <div>
                   <Navbar/>
                   <Box className={classes.component}>
                   <Banner/>
                   <Box style={{display:'flex',width:'100%',overflow:'hidden'}}>
                          <Box style={{width:'83%'}}>
                                 <Slide timer={true} title="Deal of the day" products={products}/>
                          </Box>
                          <Box className={classes.rightimg}>
                                 <img src={addUrl} style={{width:230,height:'auto'}}/>
                          </Box>
                   </Box>
                   <Midsection/>
                   <Slide timer={false} title="Diwali dhamaka sales" products={products}/>
                  
                   </Box>
                 
                   
              </div>
       )
}

export default Home
