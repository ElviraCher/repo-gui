[200~ var num = prompt ("Введите трехзначное число:", '');

function Num(ones, tens, hundreds) {
	  this.единицы = ones;
	  this.десятки = tens;
	  this.сотни = hundreds;
}

if(num.length === 3) {
	var myNum = new Num(num[2], num[1], num[0]);
}

else if (num.length === 2) {
	var myNum = new Num(num[1], num[0], 0);
}

else if (num.length === 1) {
	var myNum = new Num(num[0], 0, 0);
}

else {
	alert("Введите трехзначное число");
}
console.log(myNum);
