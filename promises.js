// function getData(callback) {
//     setTimeout(() => {
//         console.log("data is fetched from server");
//         callback();
//     }, 1000);
// }

// function getProcess(callback) {
//     setTimeout(() => {
//         console.log("data is processed");
//         callback();
//     }, 1000);
// }

// function saveData(callback) {
//     setTimeout(() => {
//         console.log("data is saved to db");
//         callback();
//     }, 1000);
// }

// getData(() => {
//     getProcess(() => {
//         saveData(() => {
//             console.log("all tasks are completed");
//         });
//     });
// });

// function checkResult(marks) {
//     return new Promise((resolve, reject) => {
//         console.log("checking for result...");
//         setTimeout(() => {
//             if (marks >= 35) {
//                 resolve("result is passed");
//             } else {
//                 reject("result is failed");
//             }
//         }, 2000);
//     });
// }

// checkResult(40)
//     .then((message) => {
//         console.log(message);
//     })
//     .catch((message) => {
//         console.log(message);
//     });
// function Task(){
//     return new Promise((resolve,reject)=>{
//         let success=true;
//         if(success){
//             resolve("task completed");
//         }else{
//             resolve("task failed");
//         }
//     },2000)
// }
// async function test(){
//     console.log("starting task...");
//     const msg=await Task();
//     console.log("task",msg);
// }
// test()
async function getUser(){
    try{
        const res=await fetch("https://jsonplaceholder.typicode.com/users/1")
        const user=await res.json()
        console.log("user data",user)
    }catch(err){
        console.log("err")
    }
}
getUser()