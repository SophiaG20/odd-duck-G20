"use strict";

console.log("test");

const allProducts = [];
// Product Constructor:
function Product(name) {
    this.name = name;
    this.src = `assets/${name}.jpg`;
    this.clicked = 0;
    allProducts.push(this);
}

// Products Category
let productNames = [
    "bag",
    "banana",
    "bathroom",
    "boots",
    "breakfast",
    "bubblegum",
    "chair",
    "cthulhu",
    "dog-duck",
    "dragon",
    "pen",
    "pet-sweep",
    "scissors",
    "shark",
    "sweep",
    "tauntaun",
    "unicorn",
    "usb",
    "water-can",
    "wine-glass"
];

let currentRound = 0

// // Instead of a for loop, I want to use a random number generator
// for (let i = 0; i < allProducts.length; i++) {
    // let product = allProducts[i];
    // // Step 1. create element
    // // - Done in html, line 11
    // // Step 2. fill with content
    // let img = document.getElementById("productImage");
    // console.log(img);
    // img.src = `assets/${product.name}.jpg`
    // // Step 3. append child
// }

// return a random index inside allProducts array
function randomImage() {
    // return a number between 0 - 6 (6 is the index of the last item in allProducts)
    return Math.floor(Math.random() * allProducts.length) 
}


// DOM Manipulation
// let product = allProducts[randomImage()];
// let img = document.getElementById("productImage");
// img.src = `assets/${product.name}.jpg`;


// Event Listener Steps:
let button = document.getElementById("productButton");
button.addEventListener('click', showNewImage);

// This is the event handler that gets invoked when we click the button
function showNewImage() {
    // Get a random product
    let product1 = randomImage();
    let product2 = randomImage();
    let product3 = randomImage();
    // Get the image element
    while (product1 === product2 || product1 === product3 || product2 === product3) {
        product2 = randomImage();
        product3 = randomImage();
    }
}

showNewImage();


// HINT: use Array.includes(<target item>) array method to generate 3 uniquely random images




