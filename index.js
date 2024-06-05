// Importing Local Moduls
import db from "./services/database/db";

// modules
import express from "express";
import bodyParser from 'body-parser'
import morgan from 'morgan'
import "dotenv";

// Variables
const port = process.env.PORT || 5500
const app = express()

// middleware
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json())
app.use(morgan('tiny'))


// basic routes
app.get('/', (req, res)=>{
    res.send("Hello, This is Bhaanoo Vishwakarma")
})


app.listen(port, ()=>{
    console.log(`Server is Running @${port}`);
    db()
})