// These variables are established in the global scope. Establish the characterLength and choiceArr variables that will be used later on.
var characterLength = 10;
var choiceArr = [];

// These variables are established in the global scope. Each array includes all character options pertaining to their type. 
var specialCharArr = ["!","#","$","%","&","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","}","|","~"];
var lowerCaseArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCaseArr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numberArr = ["1","2","3","4","5","6","7","8","9","0"];

// This variable is established in the global scope. The querySelector finds the first instance of the class "generate" in the HTML.
var generateBtn = document.querySelector("#generate");

//This event listener is triggered by a "click" made on the Generate Password button that was previously established as the generateBtn variable.
//When the "click" is triggered, it runs the function writePassword.
generateBtn.addEventListener("click", writePassword);

//This is the writePassword function. 
//It establishes the variable correctPrompts as the function getPrompts, introduced later.
//It establishes the variable passwordText that uses the query selector to locate the first id password in the HTML.
//The if statements are a safety, if correctPrompts is true, the passwordText value will be established by the generatePassword function.
//If else, then the passwordText value will have no input. 
function writePassword() {
  var correctPrompts = getPrompts();
  var passwordText = document.querySelector("#password");
  
  if (correctPrompts) {
    var password = generatePassword();
    passwordText.value = password;
  } else {
    passwordText.value = "";
  }
}

//This is the generatePassword function. It returns the password.
//This function generates the random password using a for loop and a random index. 
//The for loop will run for each character that is allowed in the password. If a password length of 10, it will run 10 times, choosing 10 random characters.
//The random index variable using the Math.floor() function, Math.random() function , and the choiceArr.length. 
//The Math.random() function chooses a number between 0 and 1. This is then multiplied against the length of the choice array, this varies in length depending on which types of characters the user chooses to include. This is then adjusted to the largest integer using the Math.floor() function.
//The randomIndex is then used to pull an item from the choiceArr array.    
function generatePassword() {
  var password = "";
  for (var i=0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[randomIndex];
  }
  return password;
}

//The getPrompts() function includes a set of if statements and prompts that determine the contents of the choiceArr.
//Line 55 to 58 validates the user response to the prompt. If it does not fulfill the criteria, the user is given an alert that will remind them of the validation criteria and ask them to try again.
//Row 60 to 75 determines the choiceArr depending on the confirm method response. 
//A user selection of OK is established as TRUE and Cancel is established as FALSE. 
//When true, the if statement will run the concat method to add the applicable array to the choiceArr.
function getPrompts() {
  choiceArr = [];
  characterLength = parseInt(prompt("How many characters do you want in your password? Input as digits. (8 to 128 characters)"));

  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Response must be a number between 8 to 128 characters and inputted as digits. Please try again.");
    return false;
  }

  if (confirm("Would you like to include lowercase letters in your password?")) {
    choiceArr = choiceArr.concat(lowerCaseArr);
  }

  if (confirm("Would you like to include uppercase letters in your password?")) {
    choiceArr = choiceArr.concat(upperCaseArr);
  }
  
  if (confirm("Would you like to include special characters in your password?")) {
    choiceArr = choiceArr.concat(specialCharArr);
  }

  if (confirm("Would you like to include numbers in your password?")) {
    choiceArr = choiceArr.concat(numberArr);
  }
  return true;
}