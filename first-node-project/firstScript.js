const text = process.argv[2];
function invertirTexto(text) {
    return text.split('').reverse().join('');
}

const resultado = invertirTexto(text);
console.log(resultado);
