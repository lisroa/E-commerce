/* This function calculates total price of a new order
*
* @param {array} products   cartProduct: Array de objetos 
  @returns {number} total price.
*
*/

export const totalPrice = (products) => {
   let sum = 0;
   products.forEach(product => sum += product.price)

   let roundedNumber = sum.toFixed(2)
   return roundedNumber
}