const cookDish = require("./chef");
const serveDish = require("./waiter");
const dish=cookDish("Pasta");
const waiter=serveDish("Pasta");
serveDish(dish);
console.log("Customer is happy");