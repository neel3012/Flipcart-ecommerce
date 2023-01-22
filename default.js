import {products} from './constants/product.js'
import product from './model/productSchema.js'
const defaultdata=async ()=>{
       try{
              await product.deleteMany({});//thi function bassicaaly delete all the data and add from scratch to avoid duplication
              await product.insertMany(products);
              console.log('data imported successfully')
       }
       catch(error){
              console.log(error.message);
       }
}
export default defaultdata;