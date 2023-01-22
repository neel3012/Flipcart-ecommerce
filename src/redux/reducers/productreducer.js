
import * as actiontype from '../constants/productconstant'
export const getproductsreducer=(state={products:[]},action)=>{
       switch (action.type){
              case actiontype.GET_PRODUCT_SUCCESS:
                     return {products:action.payload}
              case actiontype.GET_PRODUCT_FAIL:
                     return {error:action.payload}
              default:
                     return state
       }
}
export const getproductdetailsreducer=(state={product:{}},action)=>{
       console.log(action)
       switch (action.type){
              case actiontype.GET_PRODUCT_DETAIL_SUCCESS:
                     return {product:action.payload}
              case actiontype.GET_PRODUCT_DETAIL_FAIL:
                     return {error:action.payload}
              default:
                     return state;
       }
}