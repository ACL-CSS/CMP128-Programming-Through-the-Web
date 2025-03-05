let fruits = {"Grapes" , "Apples" , "Pears" , "Oranges"};
let fruit = fruits[0]; //first fruit
function logfirstFruit()
{
  let randomNumber= Math.floor(Math.random()*fruits.length);
  consol.log(fruits[0]);
}
logFirstFruit();

let mood = ["Happy", "Neutral" , "sad"];
function displayMood(){
  let randomMoodIndex = Math.floor(Math.random()*fruits.length);
  let myMood=mood[randomMoodIndex];
  let moodDivElement= document.getElementById(myMood);
  moodDivelement.innerHTML=myMood;
