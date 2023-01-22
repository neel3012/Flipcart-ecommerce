



import axios from "axios"
import * as actiontype from '../constants/cartconstant'
const url='http://localhost:8000';
export const addTOCart=(id)=>async (dispatch)=>{
       try{
              const {data}=await axios.get(`${url}/product/${id}`);
              dispatch({type:actiontype.ADD_TO_CART,payload:data})
       }
       catch(err){
              dispatch({type:actiontype.ERROR_IN_CART,payload:err})
       }
}

export const removeFromcart=(id)=>(dispatch)=>{
       dispatch({type:actiontype.REMOVE_FROM_CART,payload:id})
}