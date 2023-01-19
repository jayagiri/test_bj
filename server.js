require("dotenv").config();
const express=require("expess");

const app=express();

const port =process.env.PORT || 3001 ;
app.listen(port,()=>{
    
})