const eventEmitter=require("events");
const eventemitter=new eventEmitter();
// eventemitter.on("greet",()=>{
//     console.log("event has emitted");
// })
// eventemitter.emit("greet");
// eventemitter.on("userlogin",(username)=>{
//     console.log(`${username} has logged in`);
// })
// eventemitter.emit("userlogin","priyanshu");

// class BankingSystem extends eventEmitter{}
// const bank=new BankingSystem();
// bank.on('deposit',(account,amount)=>{
//     console.log(`$${amount} deposit to account ${account}`)
// })
// bank.on('withdraw',(account,amount)=>{
//     console.log(`${amount} withdrawn from account: ${account}`)
// })
// bank.on('checkbal',(account,balance)=>{
//     console.log(`Account ${account} has bal of:${balance}`)
// })
// bank.emit('deposit','NMSDS3085',5000);
// bank.emit('withdraw','haskdahsk23',2000);
// bank.emit('checkbal','kashdk34',500);

class hotelSystem extends eventEmitter{}
const hotel=new hotelSystem();
hotel.on("order",(id)=>{
    console.log(`Food with Order is ${id} is placed`)
})
hotel.on("confirm",(id,name)=>{
    console.log(`Food with Order is ${id} is placed,please confirm your order: ${name}`);
})
hotel.on("prepared",(name)=>{
    console.log(`${name} is prepared`);
})
hotel.on("delivered",(id,name)=>{
    console.log(`order id: ${id} and ${name} is prepared and delivered `);
})
hotel.emit("confirm","123");
hotel.emit("confirm","123","burger");
hotel.emit("prepared","burger");
hotel.emit("delivered",123,"burger");