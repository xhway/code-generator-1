// Assignment Code



//Scope
var password = "";

var generatePassword = function(){
  password = "";

//
var lengthPassword = passwordLength();

//
var passwordInc = characterInc();
var passwordIncLength = passwordInc.length;

for (var i = 0; i < lengthPassword; i++){
  password += passwordInc.charAt(Math.floor(Math.random()* passwordIncLength));
}
return password;
};

var passwordLength = function(){
  var lengthPassword = prompt("Enter length of password. Password must be between 8 and 128 characters.");
  if (lengthPassword < 8 || lengthPassword > 128 || lengthPassword === ""){
    return passwordLength;
  }
lengthPassword = Math.floor(Number(lengthPassword));

return passwordLength;

}
//

var characterInc = function (){

  var passwordInc = "";

//Character sets..letters,numbers,special characters.
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specChar = "!@#$%^&*()-_+=<>";
//Confirmation
var confirmLowerCase = confirm("Must have one lower case letter.");
var confirmUpperCase = confirm("Must contain one upper case letter.");
var confirmNumber = confirm("Must contain a number.");
var confirmSpecChar = confirm("Must contain a special character.");

//
if (confirmLowerCase == true){
  passwordInc += lowerCase;
}
if(confirmUpperCase == true){
  passwordInc += upperCase;
}
if(confirmNumber == true){
  passwordInc += numbers;
}
if (confirmSpecChar == true){
  passwordInc += specChar;
}

return passwordInc;

}
//

var generateBtn=document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);