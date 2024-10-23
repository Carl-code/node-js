const numberUser = Number(process.argv[2]);
if (isNaN(numberUser)) {
  console.log("Ingrese un Numero");
} else {
  for (let i = 1; i <= numberUser; i++) {
    if ((i % 3 === 0) & (i % 5 === 0)) {
      console.log(i, "- FizzBuzz");
    } else if (i % 3 === 0) {
      console.log(i, "- Fizz");
    } else if (i % 5 === 0) {
      console.log(i, "- Buzz");
    } else {
      console.log(i);
    }
  }
}
