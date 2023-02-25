const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

// 1
if (!shoppingCart.includes("Meat")) {
  shoppingCart.unshift("Meat");
}

// 2
if (!shoppingCart.includes("Sugar")) {
  shoppingCart.push("Sugar");
}

// 3
shoppingCart.splice(shoppingCart.indexOf("Honey"), 1);

//
shoppingCart[shoppingCart.indexOf("Tea")] = "Green Tea";

console.log(shoppingCart);

// output
// [ 'Meat', 'Milk', 'Coffee', 'Green Tea', 'Sugar' ]
