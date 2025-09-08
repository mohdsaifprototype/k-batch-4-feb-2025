function division(p, q) {
  if (q == 0) {
    console.log("Can't divide by zero!");
    return 0;
  }

  console.log(p / q);
  return 1;
}

console.log(division(5, 0));
