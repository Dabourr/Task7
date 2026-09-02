let finalprice = 0;
let cupsize = prompt("please select cup size sm,md,lg");
if (cupsize == "sm") {
  finalprice = finalprice + 45;
  console.log("cup-size : sm=> 45 L.E ");
} else if (cupsize == "md") {
  finalprice = finalprice + 55;
  console.log("cup-size : md=> 55 L.E ");
} else if (cupsize == "lg") {
  finalprice = finalprice + 65;
  console.log("cup-size : lg=> 65L.E ");
} else {
  document.write("invalid size");
}
let extrasyrup = confirm("do you want extra syrup ?");
if (extrasyrup == true) {
  finalprice = finalprice + 7;
  console.log("Exrta-syrup => 7 L.E");
}
let extrashoot = confirm("do you want extra shoot ?");
if (extrashoot == true) {
  finalprice = finalprice + 10;
  console.log("Exrta-milk => 10 L.E");
}
let isstudent = confirm("Are you Student");
if (isstudent == true) {
  let disscountvalue = (20 / 100) * finalprice;
  finalprice = finalprice - disscountvalue;
  console.log("student discount => " + disscountvalue + "L.E");
}
let vat = (14 / 100) * finalprice;
finalprice = finalprice + vat;
console.log("vat 14% value => " + vat + "L.E");
console.log("final price => " + finalprice + "L.E");
