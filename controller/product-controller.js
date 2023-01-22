import Product from '../model/productSchema.js'
export const getproducts=async (req,res)=>{
       try{
              const products=await Product.find({});//find is a condition based object
              res.json(products);
       }
       catch(err){
              console.log(err);


       }
}
export const getproductbyid=async (req,res)=>{
       try{
             const product=await Product.findOne({'id':req.params.id}); //because id is comming from header
             res.json(product);
       }
       catch(err){
              console.log(err.message);
       }
}