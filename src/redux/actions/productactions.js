  import axios from 'axios'
  import * as action from '../constants/productconstant'
  
  export const getproducts=()=>async (dispatch)=>{
       try{
             const {data}= await axios.get('http://localhost:8000/products');
             dispatch({type:action.GET_PRODUCT_SUCCESS,payload:data})
             
       }
       catch(err){
              dispatch({type:action.GET_PRODUCT_FAIL,payload:err.response})
              console.log(err)
       }
  }
  export const getproductdetails=(id)=>async (dispatch)=>{
      try{
            const {data}=await axios.get(`http://localhost:8000/product/${id}`);
            dispatch({type:action.GET_PRODUCT_DETAIL_SUCCESS,payload:data})
      }
      catch(err){
            dispatch({type:action.GET_PRODUCT_DETAIL_FAIL,payload:err.response})
            console.log(err.message)
      }
  }