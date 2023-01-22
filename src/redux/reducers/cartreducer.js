import * as actiontype from '../constants/cartconstant'
export const cartreducer=(state={cartitems:[]},action)=>{
       switch (action.type){
              case actiontype.ADD_TO_CART:
                     const item=action.payload;
                     const exist=state.cartitems.find(product=>product.id===item.id);
                     if(exist) return;

                     
                     return {...state,cartitems:[...state.cartitems,item]}
              case actiontype.ERROR_IN_CART:
              case actiontype.REMOVE_FROM_CART:
                     return {...state,cartitems:state.cartitems.filter(product=>product.id!==action.payload)}
              default:
                     return state;

       }
}