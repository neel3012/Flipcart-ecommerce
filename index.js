import express from "express";
import mongoose from "mongoose";
import bodyParser from 'body-parser';
import Routes from './routes/routes.js';

import defaultdata from "./default.js";
import {connection} from './connection/db.js' 
import Cors from "cors";


const app = express();

const port = process.env.PORT || 8000;
app.use(Cors());
app.use(express.json());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}))

//apis
app.use('/',Routes);



//
connection();
app.listen(port, () => {
  console.log(`app is running on ${port}`);
});

//default data to databse then send data to server
defaultdata();
