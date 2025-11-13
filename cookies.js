// application.httpmethod(routes, handler/method, callback)
// app.post('/about',(req,res)=>{

// })
// app.all('/about',(req,res)=>{
//      all-means->POST,GET,DELETE,PUT
// })
import express from 'express';
import cookieParser from 'cookie-parser';
const app = express();
app.use(cookieParser());
app.get('/set',(req,res)=>{
    // res.cookie('name','value',{options})
    res.cookie('username','john_doe',{maxAge: 900000});
    res.send('Cookie has been set');
});
app.get('/get',(req,res)=>{
    res.send(`Cookie value: ${req.cookies.username}`);
});
app.get('/clear',(req,res)=>{
    res.clearCookie('username');
    res.send('Cookie has been cleared');
});
app.listen(3000, () => {
    console.log('Server is running on port http://localhost:3000');
});