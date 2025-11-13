//core modules- in built modules
const fs=require('fs');
//third party modules- install it first by - npm install moment
// const moment=require('moment');
//local modules
const add=require('./Modules');
const sum=add(25,50);
console.log("Sum is ",sum);
// fs.writeFileSync("node.txt",`The sum is ${sum}`);
const moment=require('moment');
const diff=add(50,25);
console.log("Difference is ",diff);
console.log("date and time is",moment().format('MMMM Do YYYY, h:mm:ss a'));