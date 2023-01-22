import mongoose from 'mongoose';

import dotenv from 'dotenv';
dotenv.config();
 export const connection = async () => {
        const username=process.env.DB_USERNAME;
        const password=process.env.DB_PASSWORD;
       const connectionLink = `mongodb+srv://${username}:${password}@ecommerce.uaiab.mongodb.net/flipcart?retryWrites=true&w=majority`;

       try{
              await mongoose.connect(connectionLink, {

                     useNewUrlParser: true,
                     useUnifiedTopology: true,
                   });
                   console.log('connection successfull')
       }
       catch(error){
              console.log(error);
       }
  
};
