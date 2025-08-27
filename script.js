// --- PART 1: JavaScript Basics ---
// Ask user for their age and respond based on input
let userName = prompt("What's your name?");
let age = parseInt(prompt("How old are you?"));

// Check age with an if/else statement
if (age >= 18) {
  console.log(`Hello, ${userName}! You are an adult.`);
} else {
  console.log(`Hi, ${userName}! You are under 18.`);
}

// --- PART 2: Functions ---
// Function to calculate total price
function calculateTotal(price, quantity) {
  return price * quantity;
}

// Function to greet a user
function greetUser(name) {
  console.log(`Welcome to our site, ${name}!`);
}

// Test our functions
console.log(calculateTotal(10, 3)); // 30
greetUser(userName);


// --- PART 3: Loops ---
// For loop: count 1 to 5
for (let i = 1; i <= 5; i++) {
  console.log(`Counting: ${i}`);
}

// While loop: countdown
let count = 3;
while (count > 0) {
  console.log(`Countdown: ${count}`);
  count--;
}


 

 