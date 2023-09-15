export let cart = JSON.parse(localStorage.getItem('cart'));
//at the top we can get item from the top
// we have to give a default value to the cart when its empty
if(!cart){
  cart = [{
    productId : 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity : 2
  },
  {
    productId : '15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity : 1
  }];
}

/*use this function to save into localStorage 
while using localStorage we have to take care 
of that local storage only work in string
*/
function saveToStorage(){
  localStorage.setItem('cart',JSON.stringify(cart));
}

export function addToCart(productId){
    let matchingItem;
  
    cart.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingItem = cartItem;
      }
    });
  
    const quantitySelector = document.querySelector(
      `.js-quantity-selector-${productId}`
    );
  
    const quantity = Number(quantitySelector.value);
  
    if (matchingItem) {
      matchingItem.quantity += quantity;
    } else {
      cart.push({
        productId: productId,
        quantity: quantity
      });
    }
    saveToStorage();
  }

export function removeFromCart(productId){
    //create a new array
    let newCart = [];
    /*loop through the cart its gona contain all the product item that dont match this
      productid*/
    cart.forEach((cartItem)=>{
        if(cartItem.productId !== productId){
          newCart.push(cartItem);
        }
    });
    cart = newCart;
    saveToStorage();
  }
  