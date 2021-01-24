function power (val, pow) {
  if (pow === 1) {
    return val;
  }
 return val * power(val, pow-1);
}
console.log(power(2, 3));
