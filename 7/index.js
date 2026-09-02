let finalPrice = Number(prompt("Enter amount to recharge"));
console.log("Recharge Amount => " + finalPrice + " L.E");

let fee = (2 / 100) * finalPrice;
finalPrice = finalPrice + fee;
console.log("Service Fee 2% => +" + fee + " L.E");

let vat = (14 / 100) * finalPrice;
finalPrice = finalPrice + vat;
console.log("VAT 14% value => " + vat + " L.E");

console.log("Final Price is : " + finalPrice + " L.E");
