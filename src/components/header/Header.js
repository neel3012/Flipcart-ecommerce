import React from "react";
import { AppBar, Toolbar, makeStyles,Typography,Box, withStyles } from "@material-ui/core";
import Searchbar from './Searchbar'
import Headerbuttons from "./Headerbuttons";
import {Link} from 'react-router-dom';
const useStyle = makeStyles({
  header: {
    background: "#2874f0",
  },
  logo: {
    width: 75,
  },
  subURL:{
         width:10,
         height: 10,
         marginLeft:4,
  },
  container:{
         display: 'flex'
  },
  component:{
       marginLeft: '12%',
       lineHeight: 0,
       color: '#FFFFFF',
       textDecoration: 'none'
  }, 
   subHeading: {
       fontSize: 10,
       fontStyle: 'italic'
   },
});

const ToolBar=withStyles({
       root:{
              minHeight:55
       }
})(Toolbar)
function Header() {
  const classes = useStyle();
  const logoURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";
  return (
    <AppBar className={classes.header}>
      <ToolBar>
      <Link to="/" className={classes.component}>
        <img src={logoURL} className={classes.logo} alt="logo" />
        <Box component="span" className={classes.container}>
        {/* <Typography className={classes.subHeading}>
          Explore{" "}plus </Typography>
        <img src={subURL} alt="logo" className={classes.subURL} /> */}
        <Typography className = {classes.subHeading}>Explore <Box component="span" style={{color:'#FFE500'}}>Plus</Box></Typography>
                        <img src={subURL} className={classes.subURL} />
        </Box>
        </Link>

        <Searchbar/>
        <Headerbuttons/>
      </ToolBar>
    </AppBar>
  );
}

export default Header;
