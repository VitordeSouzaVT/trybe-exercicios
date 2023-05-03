let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
/* Ex 1
for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index]);
}*/

/* Ex 2
let sum = 0;

for (let index = 0; index < numbers.length; index += 1) {
  sum += numbers[index];
}
console.log(sum);
*/

/*Ex 3 e Ex 4
let sum = 0;

for (let index = 0; index < numbers.length; index += 1) {
sum += numbers[index];
}
let average = sum / numbers.length
console.log(average);

if (average > 20){
  console.log('O valor da média aritmética é maior que 20');
} else {
  console.log('O valor da média aritmética é menor ou igual a 20');
}
*/

let higherNumber = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] > higherNumber) {
    higherNumber = numbers[index];
  } 
}
console.log(higherNumber);