import React,{useState} from 'react'
import {Button,ButtonGroup} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
const useStyles=makeStyles({
       button:{
              borderRadius:'50%'
       }
})
function Groupbutton() {
       const classes=useStyles()
       const [counter,setcounter]=useState(1);
       const handledecrease=()=>{
              setcounter(counter-1);
       }
      
       const handleincrease=()=>{
              setcounter(counter+1);
       }
       return (
              <ButtonGroup style={{marginTop:20}}>
                     <Button className={classes.button} disabled={counter===1} onClick={handledecrease}>-</Button>
                     <Button>{counter}</Button>
                     <Button className={classes.button} onClick={handleincrease}>+</Button>
                     
              </ButtonGroup>
       )
}

export default Groupbutton
