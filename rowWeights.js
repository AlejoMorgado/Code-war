function rowWeights(a) {
  let even = 0;
  let odd = 0;
  for (let i = 0; i < a.length; i++) {
    if (i % 2 === 0) {
      even += a[i];
    } else {
      odd += a[i];
    }
  }
  return [even, odd];
}