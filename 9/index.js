let usdAmount = prompt("Enter USD amount");
let finalPrice = usdAmount * 48;
console.log("Exchanged Amount => " + finalPrice + " EGP");

let commission = (3 / 100) * finalPrice;
finalPrice = finalPrice - commission;
console.log("Commission 3% => - " + commission + " EGP");

console.log("Final Price is : " + finalPrice + " EGP");
