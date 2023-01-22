import  { useState } from "react";
import {
  Dialog,
  DialogContent,
  makeStyles,
  Box,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";

import {authenticatesignup} from '../../service/api'
import {authenticatelogin} from '../../service/api'
const useStyles = makeStyles({
  component: {
    height: "70vh",
    width: "90vh",
  },
  image: {
    backgroundImage: `url(${"https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png"})`,
    background: "#2874f0",
    backgroundPosition: "center 85%",
    backgroundRepeat: "no-repeat",
    height: "70vh",
    width: "40%",
    padding: "45px 35px",
    "& > *": {
      color: "#FFFFFF",
      fontWeight: 600,
    },
  },
  login: {
    padding: "25px 35px",
    display: "flex",
    flex: 1,
    flexDirection: "column",
    "& > *": {
      marginTop: 20,
    },
  },
  text: {
    color: "#878787",
    fontSize: 12,
  },
  loginbtn: {
    textTransform: "none",
    background: "#FB641B",
    color: "#fff",
    height: 48,
    borderRadius: 2,
  },
  requestbtn: {
    textTransform: "none",
    background: "#fff",
    color: "#2874f0",
    height: 48,
    borderRadius: 2,
    boxShadow: "0 2px 4px 0 rgb(0 0 0 / 20%)",
  },
  createtext: {
    margin: "auto 0 5px 0",
    textAlign: "center",
    color: "#2874f0",
    fontWeight: 600,
    fontSize: 14,
    cursor: "pointer",
  },
  error:{
    color:'red',
    fontSize:14,
    marginTop:0,
    fontWeight:600
  }
});

const initialvalue={
       login:{
              view:'Login',
              heading:'Login',
              subheading:'Get access to your Orders, Wishlists, Recomendations'
       },
       signup:{
              view:'SignUp',
              heading:"Looks like you're new here",
              subheading:'Signup with your mobile number to get started'
       }
}

const signupinitialvalue={
  firstname:'',
  lastname:'',
  username:'',
  email:'',
  password:'',
  phone:''
}
const logininitialvalues={
  username:'',
  password:'',
}
function Login({ open, setOpen,setaccount }) {
  const classes = useStyles();
  const [account, setAccount] = useState(initialvalue.login);
  const [signup,setsignup]=useState(signupinitialvalue);
  const [login,setlogin]=useState(logininitialvalues);
  const [error,seterror]=useState(false);
  const handleclose = () => {
    setOpen(false);
    setAccount(initialvalue.login)
  };
  const toggleaccount=()=>{
         setAccount(initialvalue.signup);
       
  }
  const onInputChange=(e)=>{
    setsignup({...signup,[e.target.name]:e.target.value})
    // console.log(signup);
  }
  const onvalueChange=(e)=>{
    setlogin({...login,[e.target.name]:e.target.value})
  }


  
  const signupUser=async ()=>{console.log('hi tehre')
    let response=await authenticatesignup(signup);
    if(!response) return;
    
    setaccount(signup.username);
    
    handleclose()
    alert('registered')
  }

    const loginuser=async ()=>{
        const resp=await authenticatelogin(login);
        if(!resp){
          seterror(true);
          return};
        handleclose();
        setaccount(login.username);
    }

  return (
    <Dialog open={open} onClose={handleclose}>
      <DialogContent className={classes.component}>
        <Box style={{ display: "flex" }}>
          <Box className={classes.image}>
            <Typography variant="h5">{account.heading}</Typography>
            <Typography style={{ marginTop: "20px" }}>
              {account.subheading}
            </Typography>
          </Box>

          {account.view === "Login" ? (
            <Box className={classes.login}>
              <TextField name="username" label="Enter username" onChange={(e)=>onvalueChange(e)}/>
              <TextField name="password" label="Enter password" onChange={(e)=>onvalueChange(e)}/>
              {
                error &&  <Typography className={classes.error}>please enter valid username or password</Typography>
              }
             
              <Typography className={classes.text}>
                By continuing, you agree to Flipkart's Terms of Use and Privacy
                Policy.
              </Typography>
              <Button variant="contained" className={classes.loginbtn} onClick={loginuser}>
                Login
              </Button>
              <Typography
                style={{ textAlign: "center" }}
                className={classes.text}
              >
                OR
              </Typography>
              <Button variant="contained" className={classes.requestbtn}>
                Request OTP
              </Button>
              <Typography className={classes.createtext} onClick={toggleaccount}>
                New to Flipkart? Create an account
              </Typography>
            </Box>
          ) : 
          
          
          
          
          (
            <Box className={classes.login}>
              <TextField onChange={(e)=>onInputChange(e)} name="firstname" label="Enter firstname" />
              <TextField onChange={(e)=>onInputChange(e)} name="lastname" label="Enter lastname" />
              <TextField onChange={(e)=>onInputChange(e)} name="username" label="Enter username" />
              <TextField onChange={(e)=>onInputChange(e)} name="email" label="Enter Email" />
              <TextField onChange={(e)=>onInputChange(e)} name="password" label="Enter password" />
              <TextField onChange={(e)=>onInputChange(e)} name="phone" label="Enter phone" />
              
              
             
             
              <Button variant="contained" className={classes.loginbtn} onClick={signupUser}>
                SignUp
              </Button>
              
            </Box>
          )}
        </Box>
      </DialogContent>
    </Dialog>
  );
}

export default Login;
