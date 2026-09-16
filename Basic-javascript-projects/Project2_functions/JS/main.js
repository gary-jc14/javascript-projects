// Declares a function called showMessage
function showMessage() {
  var firstName = "Gary"; // variable, string 
  var age = 50; // variable, number

  var output = document.getElementById("output"); // Finds the element in the HTML and stores a reference to it

  output.textContent = firstName + " is " + age + " years old."; // Writes the paragraph's text using the two variables
}

// Declares a function called concatenateMessage
function concatenateMessage() {
  var sentence = "You clicked the paragraph"; // variable, string

  sentence += " and this bit got added on."; // += tacks this onto the end of sentence

  document.getElementById("concatenate").innerHTML = sentence; // finds the p and writes sentence into it
}
