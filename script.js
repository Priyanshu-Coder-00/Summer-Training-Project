//variable declaration
//let - changed, const - fixed, var-old
let restaurant="Domino's";
const deliveryCharge=100;
console.log(`Order from: ${restaurant}`);//template literals
console.log(`Delivery Charges: ${deliveryCharge}`);
function cal(amount){
    const tax=5.0;
    return amount+amount*tax;
}
const greetStudent=(name)=>`Hello ${name}! Welcome to Restaurant`;
console.log(greetStudent('LPU'));
console.log(`Total Bill: ${cal(30)}`);
const Student={
    name:"nodejs",
    rollno:45,
    course:"BTech",
    greet(){
        console.log(`Hi, I am ${this.name}, enrolled in ${this.course}`);
    }
}
Student.greet();
console.log(`Student roll no is: ${Student.rollno}`);
//arrays
const items=["laptop","mobile","charger",greetStudent("Priyanshu")];
items.push("TV");
console.log("items are as: ",items);

