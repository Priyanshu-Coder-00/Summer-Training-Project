import http from 'http'
const server=http.createServer((req,res)=>{
    res.end("hello this is http server")
})
const PORT=50;
server.listen(50,()=>{
    console.log(`server started at port${PORT}`)
})