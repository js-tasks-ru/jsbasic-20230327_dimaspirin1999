function factorial(n) {
  let f = 1;
  
  for( let i = 0; i < n; i++ ) {
    f = f * (n - i);
  }

  return f;
}