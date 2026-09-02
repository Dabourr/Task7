let kWh = prompt("Enter your kWh");
let price1 = 0.75;
let price2 = 1.2;
let totalPrice = 0;

if (kWh <= 100) {
  totalPrice = kWh * price1;
  console.log("Price for the first 100 kWh is  " + totalPrice);
} else {
  totalPrice = 100 * price1;
  let extra = kWh - 100;
  extra = extra * price2;
  totalPrice = totalPrice + extra;
  console.log("Price after the first 100 kWh is " + extra);
  console.log("Price before VAT  " + totalPrice);
}

console.log("Optional Service fee is 5 L.E");
let plus = confirm("Do you want optional service?");

if (plus == true) {
  totalPrice = totalPrice + 5;
}

let vat = (14/100) * totalPrice;

console.log('Your VAT is ' + vat + ' L.E');

totalPrice = totalPrice + vat;

console.log('You will pay => ' + totalPrice + ' L.E');
