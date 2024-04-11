
function calculateDiscountedPrice(price, discountPercentage) {
  const discount = (price * discountPercentage) / 100;
  const priceWithDiscount = price - discount;
  return priceWithDiscount;
}
const originalPrice = 2000;
const discountPercentage = 50;
const finalPrice = calculateDiscountedPrice(originalPrice, discountPercentage);

console.log("Original Price: $" + originalPrice);
console.log("Discount: " + discountPercentage + "%");
console.log("Price with discount: $" + finalPrice);
