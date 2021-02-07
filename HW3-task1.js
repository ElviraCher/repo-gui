let n = 100;
let i = 2;
nextPrime:
while (i < n) { 
i++

  for (let j = 2; j < i; j++) { 
    if (i % j === 0) continue nextPrime;
  }

  alert( i );
}
