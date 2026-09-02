finalprice = 0;
let membership = prompt("please enter number of months");
let month = 350;
price = membership * month;
console.log("membership price => " + price + " L.E");
if (membership >= 12) {
  finalprice = price * 0.85;
  console.log("15% discount => " + price * 0.15 + " L.E");
} else if (membership >= 6) {
  finalprice = price * 0.9;
  console.log("10% discount => " + price * 0.1 + " L.E");
} else {
  finalprice = price;
  console.log("no discount");
}
console.log("price after discount => " + finalprice + " L.E");
let personalTraining = confirm("Do you want Personal Training for 200 EGP?");
if (personalTraining == true) {
  finalprice = finalprice + 200;
  console.log("personal training => 200 L.E");
}
console.log("price after personal training => " + finalprice + " L.E");
let vat = (14 / 100) * finalprice;
finalprice = finalprice + vat;
console.log("vat 14% value => " + vat + " L.E");
console.log("final price => " + finalprice + " L.E");
