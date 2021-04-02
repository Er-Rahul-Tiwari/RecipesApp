
  var card__name = document.querySelector(".card__name");
  var update__name = document.querySelector('.update__name');
  var total = document.querySelector('.total');
  
  var availableItems = 100;
  
  const decNum = (val,card__price,update__price)=>{
    var itemVal = document.querySelector(val);
    var itemPrice = document.querySelector(card__price);
    var update__price = document.querySelector(update__price);
  
  if (itemVal.value <= 0) {
    itemVal.value = 0;
  }else{
    itemVal.value = parseInt(itemVal.value) - 1;
    itemPrice.innerHTML = parseInt(itemPrice.innerHTML) - 23;
    update__price.innerHTML = itemPrice.innerHTML;
    total.innerHTML = parseInt(update__price.innerHTML) + 40;
  }
}
const incNum = (val,card__price,update__price)=>{
  var itemVal = document.querySelector(val);
  var itemPrice = document.querySelector(card__price);
  var update__price = document.querySelector(update__price);
  
  if( itemVal.value >= availableItems){
    itemVal.value = availableItems;
    alert(`Available items only ${availableItems}`);
  }else{
    itemVal.value = parseInt(itemVal.value) + 1;
    itemPrice.innerHTML = parseInt(itemPrice.innerHTML) + 23;
    update__price.innerHTML = itemPrice.innerHTML;
    total.innerHTML = parseInt(update__price.innerHTML) + 40;

  }
}