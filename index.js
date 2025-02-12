// Importing Local Moduls
import db from "./services/database/db.js";
import router from "./services/routes/routes.js";

// modules
import express from "express";
import bodyParser from 'body-parser'
import morgan from 'morgan'
import ejs from 'ejs'
import "dotenv";

// Variables
const port = process.env.PORT || 5500
const app = express()

// middleware
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json())
app.use(morgan('tiny'))
app.set('view enginer', 'ejs')


// basic routes
app.get('/', (req, res)=>{
    res.send("Hello, This is Bhaanoo Vishwakarma")
})
app.get('/api/v1/userupdate', (req, res)=>{
    res.send("Hello, This is Bhaanoo Vishwakarma")
})

app.use('/api/v1/users', users)

// managing routes
app.use('/api/v1', router)

app.listen(port, ()=>{
    console.log(`Server is Running @${port}`);
    db()
})