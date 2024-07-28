const jwt = require('jsonwebtoken')
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')

const connectDB = require('./db/connectMongoDB')
const app = express();


app.use(express.json()); //read json files directly
app.use(cors());
app.use(express.urlencoded({extended: true})) //easliy enter inputs 
app.use(cookieParser())//help get cookie from request header and set to req.cookie object


app.listen(4000, ()=> {
    connectDB();
    console.log('server is running')
})