import jwt from 'jsonwebtoken';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import { connectMongoDB } from './db/connectMongoDB.js';
import authRoute from './routes/auth.route.js';

const app = express();

app.use(express.json()); //read json files directly
app.use(cors());
app.use(express.urlencoded({extended: true})) //easliy enter inputs 
app.use(cookieParser())//help get cookie from request header and set to req.cookie object

app.use('/auth', authRoute)

app.listen(4000, ()=> {
    connectMongoDB();
    console.log('server is running')
})

