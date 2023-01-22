import React from "react";
import { bannerData } from "../../constant/data";
import Carousel from "react-material-ui-carousel";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
  image: {
    width: "100%",
    height: 200,
  },
  carosel:{
         marginTop:0,
         
  }
});
function Banner() {
  const classes = useStyles();
  return (
    <Carousel
      autoPlay={true}
      animation="slide"
      indicators={false}
      navButtonsAlwaysVisible={true}
      cycleNavigation={true}
      navButtonsProps={{style:{
             background: '#ffffff',
             color:'#494949',
             borderRadius:0,
             margin:0
      }}}
      className={classes.carosel}
    >
      {bannerData.map((img) => (
        <img src={img} className={classes.image} />
      ))}
    </Carousel>
  );
}

export default Banner;
