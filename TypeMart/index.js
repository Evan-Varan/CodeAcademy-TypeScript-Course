"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var products_1 = require("./products");
var productName;
productName = 'tote bag';
var product = products_1.default[0];
for (var i = 0; i < products_1.default.length; i++) {
    if (products_1.default[i].name === productName) {
        product = products_1.default[i];
        break;
    }
}
console.log(product);
if (product.preOrder == 'true') {
    console.log("We will send a message when your product is on it's way!");
}
var shipping;
var taxPercent;
var taxTotal;
var total;
var shippingAddress;
shippingAddress = "1008 Fortnite Lane";
if (Number(product.price) >= 25) {
    shipping = 0;
    console.log("Shipping is free, as the price of your item is over $25.");
}
else {
    shipping = 5;
}
if (shippingAddress.match('New York')) {
    taxPercent = 0.1;
}
else {
    taxPercent = 0.05;
}
taxTotal = Number(product.price) * taxPercent;
total = Number(product.price) + taxTotal + shipping;
console.log("Product Name:", product.name);
console.log("Shipping address:", shippingAddress);
console.log("Price of the product:", product.price);
console.log("Tax total:", taxTotal);
console.log("Shipping:", shipping);
console.log("Total amount: $".concat(total));
