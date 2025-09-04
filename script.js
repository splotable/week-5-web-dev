// ------------------------------
// Part 1: Variables & Conditionals
// ------------------------------
let houses = ["Mukuyu Hostel", "Tities Apartments", "Town Residence"];
let available = true;

if (houses.length > 0) {
  console.log("We have some houses listed!");
} else {
  console.log("No houses available right now.");
}

// ------------------------------
// Part 2: Custom Functions
// ------------------------------
function checkAvailability() {
  let message = available
    ? "Yes! Houses are available for booking."
    : "Sorry, no houses are currently available.";
  document.getElementById("output").innerText = message;
}

function addHouse(name) {
  houses.push(name);
  document.getElementById("output").innerText = `${name} was added to the listings!`;
}

// ------------------------------
// Part 3: Loops
// ------------------------------
// Loop 1: For loop
function listHouses() {
  let list = "Available Houses:\n";
  for (let i = 0; i < houses.length; i++) {
    list += `🏠 ${houses[i]}\n`;
  }
  document.getElementById("output").innerText = list;
}

// Loop 2: For...of loop
function showHousesInConsole() {
  for (let house of houses) {
    console.log("House:", house);
  }
}
showHousesInConsole();

// ------------------------------
// Part 4: DOM Interactions
// ------------------------------
document.getElementById("checkAvailability").addEventListener("click", checkAvailability);

document.getElementById("listHouses").addEventListener("click", listHouses);

document.getElementById("addHouse").addEventListener("click", function() {
  let newHouse = prompt("Enter the new house name:");
  if (newHouse) {
    addHouse(newHouse);
  }
});
