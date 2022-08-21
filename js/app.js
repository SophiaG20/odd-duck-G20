"use strict";

console.log("test");

const allProducts = [];
let section = document.getElementById("section");
// Product Constructor:
function Product(name, src, views = 0, clicked = 0) {
    this.name = name;
    this.src = `IMG/assets/${name}.jpg`;
    this.clicked = clicked;
    this.views = views;
    allProducts.push(this);
}

// Products Category
new Product("bag");
new Product("banana");
new Product("bathroom");
new Product("boots");
new Product("breakfast");
new Product("bubblegum");
new Product("chair");
new Product("cthulhu");
new Product("dog-duck");
new Product("dragon");
new Product("pen");
new Product("pet-sweep");
new Product("scissors");
new Product("shark");
new Product("sweep");
new Product("tauntaun");
new Product("unicorn");
new Product("usb");
new Product("water-can");
new Product("wine-glass");
new Product("pencil");

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

function handleProductClick (event) {
    // Get the alt attribute of the image that was clicked
    let alt = event.target.alt;
    // Find the product in the allProducts array that has the same name as the alt attribute
  for (let i = 0; i < allProducts.length; i++) {
    if (allProducts[i].name === alt) {
      allProducts[i].clicked++;

      break;
    }
    }
        showNewImage();
    if(currentRound === 25){
        button.className = "clicks-allowed";
        section.removeEventListener('click', handleProductClick);
    }
}

// Event Listener Steps:
let button = document.getElementById("productButton");
let img1 = document.getElementById("img1");
img1.addEventListener('click', handleProductClick);
let img2 = document.getElementById("img2");
img2.addEventListener('click', handleProductClick);
let img3 = document.getElementById("img3");
img3.addEventListener('click', handleProductClick);

// This is the event handler that gets invoked when we click the button
function showNewImage() {
    console.log (allProducts);
    // Get a random product
    let product1 = randomImage();
    let product2 = randomImage();
    let product3 = randomImage();
    // Get the image element
    while (product1 === product2 || product1 === product3 || product2 === product3) {
        product2 = randomImage();
        product3 = randomImage();
    }
    img1.src = allProducts[product1].src;
    img2.src = allProducts[product2].src;
    img3.src = allProducts[product3].src;
    img1.alt = allProducts[product1].name;
    img2.alt = allProducts[product2].name;
    img3.alt = allProducts[product3].name;
    // Increment the views for each product
    allProducts[product1].views++;
    allProducts[product2].views++;
    allProducts[product3].views++;
}

showNewImage();


// HINT: use Array.includes(<target item>) array method to generate 3 uniquely random images




