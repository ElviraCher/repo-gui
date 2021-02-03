var basket = {
	goods: [],
  countPrice() {
  	let result = 0;
  	for (let i in this.goods) {
    	let element = this.goods[i];
      result += element.price;
    }
    return result;
  }
}
var good1 = {
	name: "хлеб белый",
  price: 56
}

var good2 = {
	name: "Сыр Российский",
  price: 126
}

var good3 = {
	name: "масло сливочное",
  price: 98
}

var good4 = {
	name: "шоколад молочный",
  price: 75
}

var good5 = {
	name: "чай зелёный",
  price: 27
}

basket.goods.push(good1, good1, good2, good3, good4, good5);

console.log(basket.countPrice());
