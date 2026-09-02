let liters = prompt("Enter liters");
let pricePerLiter = prompt("Enter price per liter");
let finalPrice = liters * pricePerLiter;
console.log("Fuel Cost => " + finalPrice + " L.E");

let payCash = confirm("Are you paying cash ?");
if (payCash == true) {
  let discountValue = (5 / 100) * finalPrice;
  finalPrice = finalPrice - discountValue;
  console.log("Cash Discount => - " + discountValue + " L.E");
}

let vat = (14 / 100) * finalPrice;
finalPrice = finalPrice + vat;
console.log("VAT 14% value => " + vat + " L.E");

console.log("Final Price is : " + finalPrice + " L.E");