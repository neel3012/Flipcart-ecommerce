import { Box, makeStyles, Table, TableBody, TableCell, TableRow, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import clsx from 'clsx';
import { useParams } from "react-router-dom";
import { getproductdetails } from "../../redux/actions/productactions";
import {LocalOffer as Badge} from '@material-ui/icons';

import Actionitems from "./Actionitems";
const useStyles=makeStyles({
      component:{
            marginTop:'55px',
            backgroundColor:'#F2F2F2'
      },
      container:{
              margin:'0 80px',
              backgroundColor:'#fff'    ,
              display:'flex'
      },
      rightcontainer:{
            marginTop:50,
            marginLeft:15,
            '&>*':{
                  marginTop:10
            }
      }
      ,smalltext:{
            fontSize:14,
            verticalAlign:'baseline',
            '&>*':{
                  fontSize:14,
                  marginTop:10
            },
            MuiTableCell:{
                  root:{
                        borderBottom:'none'
                  }
            }
      },
      greytextcolor:{
            color:'#878787'
      },
      price:{
            fontSize:28,
            
      },
      badge:{
            fontSize:14,
            marginRight:10,
            color: '#00CC00'
      }
})

const Detailview = ({ match }) => {
      const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
      const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
  // console.log(match.params.id)
  const productDetails = useSelector((state) => state.getproductdetails);
  const { product } = productDetails;
  const dispatch = useDispatch();
  // const { id } = useParams()
  // console.log(match);
  useEffect(() => {
    dispatch(getproductdetails(match.params.id)); //here match is a inbuilt prop
  }, [dispatch]);
  const classes=useStyles();

  const date=new Date(new Date().getTime()+ (5*24*60*60*1000));

  return (
    <Box className={classes.component}>
    {product && Object.keys(product).length &&
      <Box className={classes.container}>
        <Box style={{minWidth:'40%'}}>
            <Actionitems product={product}/>
        </Box>
        <Box className={classes.rightcontainer}>
              <Typography>{product.title.longTitle}</Typography>
              <Typography className={clsx(classes.smalltext, classes.greytextcolor)}>
              8 Ratings 1 Review
              <span><img src={fassured} alt="assured" style={{width:77,marginLeft:20}}/></span>
              </Typography>
              <Typography>
                    <span className={classes.price}>₹{product.price.cost}</span> &nbsp; &nbsp; &nbsp;
                    <span className={classes.greytextcolor}><strike>₹{product.price.mrp}</strike></span>&nbsp; &nbsp; &nbsp;
                    <span style={{color:'#388e3c'}}>{product.price.discount} off</span>
              </Typography>

              <Typography style={{fontWeight:600,marginTop:20}}>Available offers</Typography>
            <Box className={classes.smalltext}>
                <Typography><Badge className={classes.badge} />Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card</Typography>
                <Typography><Badge className={classes.badge} />Bank Offer 10% Off on Bank of Baroda Mastercard debit card first time transaction, Terms and Condition apply</Typography>
                <Typography><Badge className={classes.badge} />Purchase this Furniture or Appliance and Get Extra ₹500 Off on Select ACs</Typography>
                <Typography><Badge className={classes.badge} />Partner OfferExtra 10% off upto ₹500 on next furniture purchase</Typography>
            </Box>

            <Table>
                  <TableBody>
                        <TableRow className={classes.smalltext}>
                              <TableCell className={classes.greytextcolor}>
                                    Delivery
                              </TableCell>
                              <TableCell style={{fontWeight:600}}>
                                    {date.toDateString()} | ₹40
                              </TableCell>
                        </TableRow>
                        <TableRow className={classes.smalltext}>
                              <TableCell className={classes.greytextcolor}>
                                    Warranty
                              </TableCell>
                              <TableCell>
                                    No Warranty
                              </TableCell>
                        </TableRow>
                        <TableRow className={classes.smalltext}>
                              <TableCell className={classes.greytextcolor}>
                                    Seller
                              </TableCell>
                              <TableCell className={classes.smalltext}>
                                    <span style={{color:'#2874f0'}}>SupercomNet</span>
                                    <Typography>GST Invoice Available</Typography>
                                    <Typography>14 days return policy</Typography>
                                    <Typography>View more seller from ₹300</Typography>
                              </TableCell>
                        </TableRow>
                        <TableRow>
                              <TableCell colSpan={2}>
                                    <img src={adURL} style={{width:390}}/>
                              </TableCell>
                             
                             
                        </TableRow>

                        <TableRow className={classes.smalltext}>
                              <TableCell className={classes.greytextcolor}>
                                    Description
                              </TableCell>
                              <TableCell>
                                    {product.description}
                              </TableCell>
                        </TableRow>
                  </TableBody>
            </Table>

        </Box>
      </Box>
      }
    </Box>
  );
};

export default Detailview;
