let finalprice = 20;
let taxifare = prompt("please enter kilometers ");
let fare = finalprice + taxifare * 6.5;
console.log("taxifare-price" + fare + "EGP");
let nighttrip = confirm("is it night ?");
if (nighttrip == true) {
  let nightfare = fare * 1.1;
}
let promocode = prompt("please enter your promocode");
if (promocode == "SAV10") {
  fare = fare * 1.1;
}
let vat = (14 / 100) * finalprice;
finalprice = fare + vat;
console.log("vat 14% value => " + vat + "L.E");
console.log("final price => " + finalprice + "L.E");
