const fs=require('fs');
//create/write file
//sync method (blocking operation)
fs.writeFileSync('file.txt','write the file by sync method');
console.log("Sync file written as file.txt");
//aync method
fs.writeFile('AsyncFile.txt',"write the file by async method",(err)=>{
    if(err){
        console.log("async ",err);
    }else{
        console.log("file written is done with async method");
    }
})
const data={"city":"delhi","temp":30,}