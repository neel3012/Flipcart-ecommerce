import { Box, Button, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom';

const useStyles=makeStyles({
       component:{
              margin:'80px 140px',
              width:'80%',
              backgroundColor:'#fff',
              height:'65vh'

       }
       ,image:{
              width:'15%'
       },
       center:{
              textAlign:'center',
              paddingTop:70,
              '&>*':{
                     marginTop:10,
                     fontSize:14
              }
       },
       button:{
              marginTop:20,
              padding:'17px 70px',
              borderRadius:2,
              fontSize:14,
              backgroundColor:'#2874f0',
              color:'#fff'
       }
})
function Emptycart() {
       const imgurl = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';
      const classes=useStyles()
      const history=useHistory();
      const additem=()=>{
       history.push('/');
      }
       return (
              <div>
                 <Box className={classes.component}>
                 <Box className={classes.center}>
                        <img src={imgurl} className={classes.image}/>
                        <Typography>Your cart is empty</Typography>
                        <Typography>Add item to it now.</Typography>
                        <Button className={classes.button} variant='contained' onClick={additem}>Shop Now</Button>
                        </Box>
                 </Box>     
              </div>
       )
}

export default Emptycart
