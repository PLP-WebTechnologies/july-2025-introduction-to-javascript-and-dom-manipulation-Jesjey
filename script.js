// ============================
// Part 1: JavaScript Basics
// ============================

// Variables & Data Types
let recommendedWaterIntake = 2; // liters per day
let userInputLiters = 0;

// Simple Conditional Logic Example
function checkWaterIntake(liters) {
  if (liters >= recommendedWaterIntake) {
    return "✅ Great! You're drinking enough water.";
  } else if (liters > 0) {
    return "⚠️ Try to drink more water for better health.";
  } else {
    return "❌ You must drink water daily to stay healthy!";
  }
}

// ============================
// Part 2: Functions
// ============================

// Function to calculate average water intake
function calculateAverage(intakes) {
  let total = 0;
  for (let i = 0; i < intakes.length; i++) {
    total += intakes[i];
  }
  return total / intakes.length;
}

// Function to toggle highlighting on table
function toggleHighlight() {
  const table = document.querySelector("table");
  table.classList.toggle("highlighted");
}

// ============================
// Part 3: Loops
// ============================

// Example 1: For loop generating example water facts
const exampleFacts = [
  "💧 70% of the human body is water.",
  "🚰 Safe water is a human right.",
  "🌍 Water scarcity affects 40% of the global population."
];
for (let i = 0; i < exampleFacts.length; i++) {
  console.log("Fact:", exampleFacts[i]);
}

// Example 2: While loop countdown
let countdown = 3;
while (countdown > 0) {
  console.log("Countdown:", countdown);
  countdown--;
}

// ============================
// Part 4: DOM Manipulation
// ============================

// 1. Responding to user input
document.getElementById("checkWaterBtn").addEventListener("click", function() {
  userInputLiters = document.getElementById("waterInput").value;
  const message = checkWaterIntake(userInputLiters);
  document.getElementById("waterMessage").textContent = message;
});

// 2. Adding new facts dynamically
document.getElementById("addFactBtn").addEventListener("click", function() {
  const newFact = document.createElement("li");
  newFact.textContent = "🌱 Access to safe sanitation boosts school attendance.";
  document.getElementById("facts-list").appendChild(newFact);
});

// 3. Toggling highlight on table when clicked
document.querySelector("table").addEventListener("click", toggleHighlight);

// Extra styling for highlight
const style = document.createElement("style");
style.textContent = `
  .highlighted {
    border: 2px solid #ff7f50;
    box-shadow: 0 0 10px rgba(255,127,80,0.7);
  }
`;
document.head.appendChild(style);
