// Copyright Fortior Blockchain 2022
// Apache License

// Establish Dictionary
var dict = {
  'outstanding': 1.00
  'good':0.75
  'acceptable':0.5
  'marginal': 0.25
  'unnactable': 0.00
};

// Define factors for analysis
var equity = window.prompt("Equity Analysis: ");
var decentralization = window.prompt("Decentralization Analysis: ");
var participation = window.prompt("Participation Analysis: ");
var investment = window.prompt("Investment Analysis: ");
var utility = window.prompt("Utility Analysis: ");
var purpose = window.prompt("Purpose Analysis: ");
var control = window.prompt("Control Analysis: ");
var derivatives = window.prompt("Derivatives Analysis: ");
var commonality = window.prompt("Commonality Analysis: ");

// Get the values from the dictionary for the user entries
var f1 = equity dict
var f2 = decentralization dict
var f3 = participation dict
var f4 = investment dict
var f5 = utility dict
var f6 = purpose dict
var f7 = control dict
var f8 = derivatives dict
var f9 = commonality dict

// Define the ratio for the factor analysis
var f10 = 1/9

// Multiply the values together and take them to the power defined
function knowledge(f1, f2, f3, f4, f5, f6, f7, f8, f9) {
  return f1 * f2 * f3 * f4 * f5 * f6 * f7 * f8 * f9;   
}
function intelligence(knowledge, f10){
    return knowledge ** f10
}

// Define intelligence function as result

alert("Compliance Score Is");