🌊 Water & Sanitation Webpage (JavaScript Basics Project)

This project is an educational responsive webpage about Water, Hygiene, and Sanitation (WASH).
It demonstrates the use of HTML, CSS, and JavaScript fundamentals:

✅ JavaScript basics (variables, conditionals)

✅ Functions for reusability

✅ Loops for iteration

✅ DOM manipulation for interactivity

✅ Responsive layout using CSS Grid + Flexbox

📂 Project Structure
project-folder/
│── index.html   # Main webpage structure
│── style.css    # Styles and responsive design
│── script.js    # JavaScript interactivity and logic
│── README.md    # Project documentation

🎯 Assignment Breakdown
Part 1: JavaScript Basics

Declares variables (recommendedWaterIntake, userInputLiters).

Uses if/else conditionals to check if the user’s daily water intake meets the recommended amount.

Outputs results directly on the webpage when a button is clicked.

👉 Example:

if (liters >= recommendedWaterIntake) {
  return "✅ Great! You're drinking enough water.";
}

Part 2: Functions — Reusability

checkWaterIntake(liters) → Evaluates health message based on input.

calculateAverage(intakes) → Calculates the average from an array of water intakes.

toggleHighlight() → Adds/removes a highlight style on the data table when clicked.

Functions help keep code clean, modular, and DRY (Don’t Repeat Yourself).

Part 3: Loops — Repetition

For Loop: Iterates through an array of water facts and prints them in the console.

While Loop: Demonstrates a simple countdown.

👉 Example fact loop:

for (let i = 0; i < exampleFacts.length; i++) {
  console.log("Fact:", exampleFacts[i]);
}

Part 4: DOM Manipulation

Brings the webpage to life using JavaScript + the DOM:

Input & Button → Captures user’s daily water intake and displays a health message.

Dynamic Content → Adds a new fact to the list when a button is clicked.

Table Interaction → Toggles a highlight effect on the table when clicked.

👉 Example:

document.getElementById("checkWaterBtn").addEventListener("click", function() {
  let liters = document.getElementById("waterInput").value;
  document.getElementById("waterMessage").textContent = checkWaterIntake(liters);
});

🎨 Responsive Design

CSS Grid is used for the overall page layout (header, sidebar, content, footer).

Flexbox is used for navigation alignment and card layouts.

Media queries adapt the layout for desktop, tablet, and mobile.

🚀 How to Run

Clone or download this project folder.

Open index.html in your browser.

Try:

Entering water intake and clicking Check Health.

Clicking Add New Fact.

Clicking the table to toggle highlight.

Resizing the browser to see responsive changes.

📖 Learning Outcomes

By completing this project, you’ll understand:

How to structure a webpage with HTML5.

How to use Grid + Flexbox for responsive layouts.

How to apply JavaScript basics (variables, conditionals, loops, functions).

How to make web pages interactive with the DOM.

✨ This project combines environmental science (WASH education) with web development skills to create a practical, interactive learning tool.