import React,{useContext, useState} from "react";
import { Box, Button, makeStyles, Typography ,Badge} from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import {Link} from 'react-router-dom'
import {LoginContext} from '../../contaxt/Contextprovider'
import Login from '../login/Login'
import Profile from './Profile'
import {useSelector} from 'react-redux'
const useStyle = makeStyles({
  login: {
    background: "#ffffff",
    color: "#2874f0!important",
    textTransform: "none",
    fontWeight: 600,
    borderRadius: 2,
    padding: "5px 40px",
    boxShadow:'none',
    '&:hover': {
      background: "#ffffff",
      color: "#2874f0!important",
    }
  },
  wrapper: {
    margin: "0 7% 0 auto",
    display: "flex",
    alignItems:'center',
    "& >*": {
      marginRight: 50,
      textDecoration:'none',
      color:'#ffffff'
    },
  },
  container:{
         display: 'flex',
         textDecoration:'none',
         color:'inherit',
         
  }
});
function Headerbuttons() {
  const classes = useStyle();
  const [open, setOpen] = useState(false);
  const {account,setaccount}=useContext(LoginContext);
  const {cartitems}=useSelector(state=>state.cart)

  const handleLogin=()=>{
    setOpen(true);
  }

  return (
    <Box className={classes.wrapper}>
    {
      account ? <Profile account={account} setaccount={setaccount}/>
      : <Button className={classes.login} varient="contained" onClick={handleLogin}>
        Login
      </Button>
    }
     
      <Link><Typography>More</Typography></Link>
      <Link to="/cart" className={classes.container}>
        <Badge badgeContent={cartitems.length} color="secondary">
          <ShoppingCartIcon />
        </Badge>
        <Typography style={{marginLeft:10}}>Cart</Typography>
      </Link>
      <Login open={open} setOpen={setOpen} setaccount={setaccount}/>
    </Box>
  );
}

export default Headerbuttons;
