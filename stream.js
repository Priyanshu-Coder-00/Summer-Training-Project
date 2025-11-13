const express=require('express'); 
const app=express(); //creates an application
const PORT=5000;
app.get('/',(req,res)=>{
    res.send("Hello welcome to express");
})
app.get('/about',(req,res)=>{
    res.send("Hello About page welcome to express");
})
app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}/about`);
})