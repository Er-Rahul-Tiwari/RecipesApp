
var availableItems = 10;

const decNum = (val,card__price,card__name,update__name,update__price)=>{
  var itemVal = document.querySelector(val);
  var itemPrice = document.querySelector(card__price);
  var card__name = document.querySelector(card__name);
  var update__name = document.querySelector(update__name);
  var update__price = document.querySelector(update__price);

 update__name.innerHTML = card__name.innerHTML;
  console.log(card__name.innerHTML);
  // console.log(itemPrice.innerHTML);
  
  if (itemVal.value <= 0) {
    itemVal.value = 0;
  }else{
    itemVal.value = parseInt(itemVal.value) - 1;
    update__price.innerHTML = parseInt(itemPrice.innerHTML) - 23;
    console.log("item price : " + update__price.innerHTML);
  }
}
const incNum = (val,card__price,card__name,update__name,update__price)=>{
  var itemVal = document.querySelector(val);
  var itemPrice = document.querySelector(card__price);
  var card__name = document.querySelector(card__name);
  var update__name = document.querySelector(update__name);
  var update__price = document.querySelector(update__price);

  update__name.innerHTML = card__name.innerHTML;
  // console.log(itemPrice.innerHTML)

  if( itemVal.value >= availableItems){
    itemVal.value = availableItems;
    alert(`Available items only ${availableItems}`);
  }else{
    itemVal.value = parseInt(itemVal.value) + 1;
    update__price.innerHTML = parseInt(itemPrice.innerHTML) + 23;
  }
}