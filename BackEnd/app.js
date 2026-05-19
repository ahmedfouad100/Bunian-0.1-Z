// dot env
// express 
// middleware json
// simple logger
// connection db
// port
// run server
// -------------------------

// dotenv
require("dotenv").config();

//express
const express = require("express")
const app = express();

//middleware json
app.use(express.json())

// simple logger
if (process.env.NODE_ENV === "dev") {
    app.use((req, res, next) => {
        console.log(`${req.method} ${req.originalUrl}`)
        next();
    })
}
app.get("/test",(req,res)=>{
    res.json({msg:"Test Route"})
})

// Port
const port = process.env.PORT || 3000;
// Run server
app.listen(port,()=>{
    console.log(`Server is Running ${port}`)
})

// db config connection
const connectdb = require("./config/db")
connectdb();
