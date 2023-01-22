import express from 'express';
import { userSignup,userlogin } from '../controller/user-controller.js';
import {getproducts,getproductbyid} from '../controller/product-controller.js';
const router=express.Router();

router.post('/signup',userSignup)
router.post('/login',userlogin)


router.get('/products',getproducts);
router.get('/product/:id',getproductbyid) //here change if error occurs
export default router;



