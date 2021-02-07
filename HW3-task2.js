const basket = [
    ["хлеб белый", 56, 1],
    ["сыр Российский", 102, 1],
    ["масло сливочное", 94, 1],
    ["шоколад молочный", 70, 5],
    ["чай зелёный", 23, 2],
];

function countBasketPrice(value) {
    let basketPrice = 0;
    for (let i = 0; i < value.length; i++) {
        let item = value[i];

        let price = item[1];
        let count = item[2];
  	    basketPrice += price * count;
    }
    return basketPrice;
}

console.log (countBasketPrice(basket));
