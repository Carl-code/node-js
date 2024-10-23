const number = process.argv[2];

function showNumber(number) {
  if (number % 2 === 0) {
    console.log("Par");
  }else if(!number){
    console.log('Ingresa un numero');
  } else {
    console.log("Impar");
  }
  return number;
}

console.log(showNumber(Number(number)));
