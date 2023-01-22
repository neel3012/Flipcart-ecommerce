import { Typography,MenuItem,Menu,makeStyles } from "@material-ui/core";
import React,{useState} from "react";
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import { Link } from "@material-ui/core";
const useStyles=makeStyles({
   component:{
          marginTop:40
   },
   logout:{
          marginLeft:20,
          fontSize:14,
          
   },
   hovertext:{
          textTransform:'capitalize',
       '&:hover': {
              cursor:'pointer',
              
           },
   }
})

function Profile({ account, setaccount }) {
       const classes=useStyles();
       const [open,setopen]=useState(false);

       const handleClose=()=>{
              setopen(false)
       }
       const handleclick=(event)=>{
              setopen(event.currentTarget);
       }
       const logout=()=>{
              setaccount('')
       }
  return (
    <>
      <Typography onClick={handleclick} className={classes.hovertext}>{account}</Typography>
      <Menu
        
        anchorEl={open}
        className={classes.component}
        open={Boolean(open)}
        onClose={handleClose}
      >
        <MenuItem onClick={()=>{handleClose(); logout();}}>
        <PowerSettingsNewIcon fontSize="small" color="primary"/>
         <Typography className={classes.logout}>Logout</Typography>
         </MenuItem>
      </Menu>
    </>
  );
}

export default Profile;
