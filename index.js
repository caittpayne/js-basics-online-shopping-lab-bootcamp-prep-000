var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  const price = Math.floor(Math.random() * 100) +1;
  const itemInfo = { itemName: `${item}`, itemPrice: price };
  cart.push(itemInfo);
 
 return(`${item} has been added to your cart.`)
 
}

function viewCart() {
  if(cart.length === 0) {
    return('Your shopping cart is empty.');
  }
  else {
    const itemList = []
    for(let i = 0; i < cart.length; i++) {
      itemList.push(`${cart[i].itemName} at $${cart[i].itemPrice}`);
    }
    if(cart.length === 1) {
      return(`In your cart, you have ${itemList}.`)
    }
    else {
    return(`In your cart, you have ${itemList.slice(0, -1).join(', ')}` + ', and ' + itemList.slice(-1) + '.');
  }
 }
}
      
  function total() {
  var itemTotal = 0;
  for(let i = 0; i < cart.length; i++) {
    itemTotal += getCart()[i].itemPrice;
  }
  return itemTotal;
    }
  

function removeFromCart(item) {
  for()

}

function placeOrder(cardNumber) {
  // write your code here
}
