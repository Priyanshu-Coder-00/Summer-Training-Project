const fs=require('fs')
// import fs from 'fs' //ES Module
//for ES module modify pkg.json -> "type":"module"
//create pkg.json by : npm init -y
//or rename the file as fileName.mjs extension
//create readable stream
const readStream=fs.createReadStream('./file.txt',{encoding:'utf-8', start:0, end:3})
//const readStream=fs.createReadStream('./node.txt','utf-8')
//events data
readStream.on("data",(chunk)=>{
    console.log("recieved the data",chunk)
})
//events end
readStream.on("end",()=>{
    console.log("finished reading the file");
})
//error handling
readStream.on("error",(err)=>{
    console.log("err reading the file",err)
})
readStream.on("data",(chunk)=>{
    console.log(`sending the chunk of size : ${chunk.length} bytes`)
})
const writeStream=fs.createWriteStream('./filecopy.txt')
writeStream.write("hello this is written using writeable stream\n")
writeStream.write("writing some more data to the file\n")
writeStream.end();
writeStream.on("finish",()=>{
    console.log("finished writing the data to the file")
})
writeStream.on("error",(err)=>{
    console.log("err writing to the file",err)
})
//write + read stream (duplex stream)
const readwrite=fs.createReadStream('./file.txt')
readwrite.write("adding this line at the beginning of the file\n")
readwrite.end(()=>{
    console.log("done adding line")
})
const readfile=fs.createReadStream('./file.txt',{encoding:'utf-8'})
readfile.on("data",(chunk)=>{
    console.log("file data:",chunk)
})