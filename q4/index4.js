let subTotal = 0;

let itemPrice = prompt("Enter item price");
let quantity = prompt("Enter the quantity");

subTotal = itemPrice * quantity;
console.log("Your total price => " + subTotal + " L.E");

if (subTotal < 1000) {
  subTotal = subTotal + 60;
}

let coupon = confirm('Do you have coupon')

if( coupon == true){
    let couponCode = prompt("Enter coupon code");
    if(couponCode == 'COUPON10'){
        let discount = (10/100) * subTotal;
        subTotal = subTotal - discount;
        console.log('Your discount is ' + subTotal + ' L.E');
    }
}

let vat = (14/100) * subTotal;

subTotal = subTotal + vat;

console.log('You will pay => ' + subTotal + ' L.E');