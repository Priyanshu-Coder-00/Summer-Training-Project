function test(callback){
    console.log("callback fuction ");
    callback();
}
function sendEmail(user){
    console.log(`sending the email to ${user}..`)
    setTimeout(()=>{
        console.log("email has sent successfully.");
        callback();
    },4000);
}
function emailNotification(){
    console.log("You have a new mail notification");
}
sendEmail("h@mail.com",emailNotification);
function orderFood(foodItem,callback){
    console.log(`Order is placed for ${foodItem}`);
    console.log("Restaurant is preparing your order");
    setTimeout(()=>{
        console.log(`${foodItem} is delivered`);
        callback();
    },4000);
}
function confirmDelivery(){
    console.log("Customer has got the order. thank you");
}
orderFood("Pizza",function(){
    console.log("ready");
})