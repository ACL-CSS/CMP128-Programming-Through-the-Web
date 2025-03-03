let fruits = {"Grapes" , "Apples" , "Pears" , "Oranges"};
let fruit = fruits[0]; //first fruit
function logfirstFruit()
{
  let randomNumber= Math.floor(Math.random()*fruits.length);
  consol.log(fruits[0]);
}
logFirstFruit();
