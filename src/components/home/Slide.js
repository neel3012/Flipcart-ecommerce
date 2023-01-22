import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import {makeStyles,Typography,Box,Button,Divider} from '@material-ui/core'
import Countdown from 'react-countdown';
import {Link} from 'react-router-dom'
const useStyles=makeStyles({
       image:{
              height:150
       },
       component:{
              marginTop:12,
              background: '#FFFFFF'
       },
       deal:{
              padding:'15px 20px',
              display:'flex',
              alignItems:'center'
       },
       dealtext:{
              fontSize:22,
              fontWeight:600,
              lineHeight:'12px',
              marginRight:25
       },
       timer:{
              color:"#7f7f7f",
              display:'flex',
              alignItems:'center',
              marginLeft:12
       },
       button:{
              marginLeft:'auto',
              background: '#2874f0',
              borderRadius:2,
              fontSize:13,
              color:'#fff',
              '&:hover': {
                     background: '#2874f0',color:'#fff',
              } 
       },
     text:{
            fontSize:14,
            marginTop:5
     },
     wrapper:{
            padding:'35px 15px'
     }
})
const responsive = {
       desktop: {
         breakpoint: { max: 3000, min: 1024 },
         items: 5,
         slidesToSlide: 3 // optional, default to 1.
       },
       tablet: {
         breakpoint: { max: 1024, min: 464 },
         items: 2,
         slidesToSlide: 2 // optional, default to 1.
       },
       mobile: {
         breakpoint: { max: 464, min: 0 },
         items: 1,
         slidesToSlide: 1 // optional, default to 1.
       },
      
       
     }
function Slide({timer,title,products}) {
       const classes=useStyles();
       const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
       const renderer = ({ hours, minutes, seconds }) => {
              
                // Render a completed state
              
                return <span className={classes.timer}>{hours}:{minutes}:{seconds} Left</span>;
              
            };
       return (
              <Box className={classes.component}>
              <Box className={classes.deal}>
                <Typography className={classes.dealtext}>{title}</Typography>
              {timer && <><img src={timerURL} style={{width:24}}/>
                <Countdown date={Date.now() + 5.04e+7} renderer={renderer}/></>}
                


                <Button varient="contained" color='primary' className={classes.button}>View All</Button>
              </Box>
              <Divider />
              <Carousel
               responsive={responsive}
                     infinite={true}
                     draggable={false}
                     centerMode={true}
                     autoPlay={true}
                     autoPlaySpeed={5000}
                     keyBoardControl={true}
                     showDots={false}
                     removeArrowOnDeviceType={["tablet", "mobile"]}
                     dotListClass="custom-dot-list-style"
                      itemClass="carousel-item-padding-40-px"
                      containerClass="carousel-container"
               >
                     {
                          
                            products.map(product=>(
                                  
                             <Link to={`product/${product.id}`} style={{textDecoration: 'none'}}>
                                   <Box textAlign="center" className={classes.wrapper}>
                                   <img src={product.url} className={classes.image}/>
                                   <Typography className={classes.text} style={{fontWeight:600,color:'#212121'}}>{product.title.shortTitle}</Typography>
                                   <Typography className={classes.text} style={{color:'green'}}>{product.discount}</Typography>
                                   <Typography className={classes.text} style={{color:'#212121',opacity:.6}}>{product.tagline}</Typography>
                                   </Box>
                                   </Link>
                                 
                            )) 
                                         
                                   
                     }
              </Carousel>
              </Box>
       )
}

export default Slide
