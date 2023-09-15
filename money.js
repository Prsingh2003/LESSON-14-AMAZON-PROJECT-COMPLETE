export function formatCurrency(priceCents){
   return (priceCents / 100).toFixed(2);
}
/*above we just created a function which is used to fix price formating 
  and we just use this function at checkout.js and amazon.js file  */