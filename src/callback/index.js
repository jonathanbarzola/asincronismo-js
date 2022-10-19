/* 
    Callback
    - Una función de callback es una función que se pasa a otra función como un argumento, que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción.
*/

function sum(num1, num2) {
  return num1 + num2;
}

function calc(num1, num2, callback) {
  return callback(num1, num2);
}

console.log(calc(33, 36, sum));


setTimeout(() => {
    console.log('Hello JavaScript!');
}, 5000);

function greet(name) {
    console.log(`Hi! I'm ${name}`);
}

setTimeout(greet, 2000, 'Jonathan');