// document.getElementById("count-el").innerText = 9
// let count = 7
// console.log(count)
 // 1. Create variable my age and set its value to your age

//  let myage = 20
//  console.log("My age is ", myage) 
//  //2. Task
//  let firstBatch  = 5
//  let secondBatch = 7
//  let newCount = firstBatch + secondBatch
//  console.log("Total numbers:", newCount)
 
/*3. Create two variables, myAge and humanDogRatio
Multiply two together and store the result in myDogAge
Log myDogAge to console
// */
// let myAge = 20
// let humanDogRatio = 5
//  let myDogAge = myAge * humanDogRatio
// console.log("The multiplication is ",  myDogAge)
// console.log(myDogAge =1000)


// // otherVariable = 5
// // console.log(5*otherVariable)

//  count = 5
// // count = 3
// // count = 1
// console.log(count)

//  let myName = 1
//  console.log(myName)
//  let myName1 = "Bibek"
//  console.log(myName1)
//  console.log(typeof(myName1))

/* Create variable bonusPoints. Initialize it as 50. Increase it to
100. Decrease it down to 25, and finnally increase it to 70.
*/
// let bonusPoint;
// bonusPoint = 50;
// console.log(bonusPoint += 50)
// console.log(bonusPoint-=75)
// console.log(bonusPoint +=45)

//for count button
/* Initialize count as 0 
Listen for clicks on the increment button
increment the count variable when the button is clicked
Change the count-el in HTML to reflect the new count
*/

// Create function increment()
// function increment() {
//     console.log("The button is clicked")
// }

// function countdown(){
//     for(let i = 1; i < 6; i++){
//       console.log("Countdown", i)  
//     }
// }
// lap1 = 23;
// lap2 = 32;
// lap3 = 5;
// function totalTime(){
//     lap1 = 23;
//     lap2 = 32;
//     lap3 = 5;
//     timeduration = lap1 + lap2 + lap3
//     console.log(timeduration)
// }

// let lapCompleted = 0;
// function lapUpdate(){
//   console.log("The lapcount ",lapCompleted++)
// }


let count = 0;
function IncrementValue()
{
  
count = count + 1 ;
document.getElementById("count-el").innerText = count
console.log(count)
}

function DecrementValue()
{
  count = count -1 ;
  document.getElementById("count-el").innerText = count
  console.log(count)
}
function ResetValue()
{
  count = 0
  document.getElementById("count-el").innerText = count
  console.log(count)
}
let saveEl = document.getElementById("save-el")

function SaveValue()
{
 let countStr = count + " -"
 saveEl.innerText += countStr

  console.log(count)
}


  // let name = prompt("What is your name?")
  // let greeting = "Hi, my name is"
  // let myGreeting = greeting + " " + name
  // console.log(myGreeting)
  
// let welcomeEl = document.getElementById("Welcome-el")
// let name = "Bibek"
// let greeting = "Hello, I am "
// welcomeEl.innerText = greeting + name
// welcomeEl.innerText += " Emoji"
 




