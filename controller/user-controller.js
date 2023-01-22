import User from '../model/userSchema.js'
export const userSignup=async (req,res)=>{
       try{
              const exist=await User.findOne({username:req.body.username})
              if(exist){
                     return res.sendStatus(401).json('user is already registered')
              }

                     const user=req.body;
                     console.log(user)
                     const newUser=new User(user);//this is for validating the front end object and if it correct then save

                     await newUser.save();

                     res.status(200).json('signup successfull')
       }
              
       
       catch(error){
              console.log(error.message)
       }

}
export const userlogin=async (req,res)=>{
       try{
              let user=await User.findOne({username:req.body.username,password:req.body.password});
              if(user){
                     return res.status(200).json('username alreay exist')

              }
              else{
                    
                     res.status(401).json('data provided is wrong');
                     
              }
       }
       catch(err){
              console.log(err);
       }
}