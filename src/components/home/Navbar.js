import React from 'react'
import {navData} from '../../constant/data'
import {Box,Typography,makeStyles} from '@material-ui/core';

const useStyles=makeStyles({
       component:{
              display: 'flex',
              margin:'55px 130px',
              marginBottom:10,
              justifyContent:'space-between'
       },
       container:{
              textAlign:'center',
              padding:'12px 8px'

       },
       image:{
              width:64
       },
       text:{
              fontSize:14,
              fontWeight:600
       }
})
function Navbar() {
       const classes=useStyles();
       return (
              <Box className={classes.component}>
              {
                     navData.map(data =>(
                            <Box className={classes.container}>
                                  <img src={data.url} className={classes.image}/>
                                  <Typography className={classes.text}>{data.text}</Typography> 
                            </Box>
                     ))
                    
              }
                     
              </Box>

       )
}

export default Navbar
