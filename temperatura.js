const prompt = require('prompt-sync')();

function converte (temperatura, unidade
 ) {
     if (unidade === 'fahrenheit') {
         return (temperatura * 9/5) + 32;
     } else if
      (unidade === 'kelvin') {
         return temperatura + 273.15;
     } else {
          return 'Unidade de medida inválida. Escolha entre "fahrenheit" ou "kelvin".';
     } 
 }


let temperatura = Number(prompt('Temperatura desejada em Kelvin e Fahrenheit: '))
 console.log(converte (temperatura,'kelvin'));

 console.log(converte (temperatura,'fahrenheit'));

 //console.log(converte (temperatura, 'ok'));




// function saudacao() {
//      console.log("Hello, world!");
//  }
// saudacao(); 