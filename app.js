
var availableItems = 10;

const decNum = (val,card__price)=>{
  var itemVal = document.querySelector(val);
  var itemPrice = document.querySelector(card__price);
  // console.log(itemVal.value);
  // console.log(itemPrice.innerHTML);
  
  if (itemVal.value <= 0) {
    itemVal.value = 0;
  }else{
    itemVal.value = parseInt(itemVal.value) - 1;
    itemPrice.innerHTML = parseInt(itemPrice.innerHTML) - 23;
    console.log("item price : " + itemPrice.innerHTML);
  }
}
const incNum = (val,card__price)=>{
  var itemVal = document.querySelector(val);
  var itemPrice = document.querySelector(card__price);

  // console.log(itemPrice.innerHTML)

  if( itemVal.value >= availableItems){
    itemVal.value = availableItems;
    alert(`Available items only ${availableItems}`);
  }else{
    itemVal.value = parseInt(itemVal.value) + 1;
    itemPrice.innerHTML = parseInt(itemPrice.innerHTML) + 23;
  }
}

// var total = document.querySelector("total");
// var shipping = document.querySelector("shipping");
// var discount = document.querySelector("discount");
// var fee = document.querySelector("fee");
// var total_cart_amt = document.querySelector("total_cart_amt");;

// const decreaseNumber = (incdec, itemprice) => {
//   var itemval = document.querySelector(incdec);
//   var itemprice = document.querySelector(itemprice);
//   console.log(itemprice.innerHTML);
//   // console.log(itemval.value);
//   if (itemval.value <= 0) {
//     itemval.value = 0;
//     alert("Negative quantity not allowed");
//   } else {
//     itemval.value = parseInt(itemval.value) - 1;
//     itemval.style.background = "#fff";
//     itemval.style.color = "#000";
//     itemprice.innerHTML = parseInt(itemprice.innerHTML) - 15;
//     total.innerHTML = parseInt(total.innerHTML) - 15;
//     total_cart_amt.innerHTML =
//       parseInt(total.innerHTML) +
//       parseInt(shipping.innerHTML);
//   }
// };
// const increaseNumber = (incdec, itemprice) => {
//   var itemval = document.querySelector(incdec);
//   var itemprice = document.querySelector(itemprice);
//   // console.log(itemval.value);
//   if (itemval.value >= 5) {
//     itemval.value = 5;
//     alert("max 5 allowed");
//     itemval.style.background = "red";
//     itemval.style.color = "#fff";
//   } else {
//     itemval.value = parseInt(itemval.value) + 1;
//     itemprice.innerHTML = parseInt(itemprice.innerHTML) + 15;
//     total.innerHTML = parseInt(total.innerHTML) + 15;
//     total_cart_amt.innerHTML =
//       parseInt(total.innerHTML) +
//       parseInt(shipping.innerHTML);
//   }
// };