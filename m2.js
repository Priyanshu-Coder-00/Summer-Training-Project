const app=express()
app.use(express.json())
function authMid(req,res,next){
    if(req.headers.authorization==="mysecrettoken"){
        next()
    }   
    else{
        res.status(403).send("Forbidden")
    }

}
app.get('/protected',authMid,(req,res)=>{
    res.send("This is a protected route")
}
)
import express from 'express';
app.listen(4000,()=>{
    console.log("Server is running on port 4000")
}
)   
