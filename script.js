// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//Generate the password using users input for certain criteria

function generatePassword () {

//* prompt method will display information to the user to decide about the characteristics of the password
  var userLenght = window.prompt ("Between 8 and 128, how many character your password needs to have?");
  var passwordLenght = (userLenght);
  console.log (passwordLenght);
    if (passwordLenght <8) {
      window.alert ("Password must have 8 characters minimun");
    } else if (passwordLenght >128) {
      window.alert("password must have 128 character or less") 
    } else {
      var upperCaseCharacthers = window.confirm ("do you want to include upper case in your password?");
      var lowerCaseCharacters = window.confirm ("do you want to include lower case in your password?");
      var specialCharacters = window.confirm ("do you want to include special characthers in your password?");
      var numbersCharacters = window.confirm ("do you want to include numbers in your password?");
      
      var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
      var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
      var special = ["!","@","#","$","%","&","(",")","_","+","~","|","}","{","[","]","?",">","<","/"]
      var numbers = ["1","2","3","4","5","6","7","8","9"]
      var options = []
      
      //* if user does not accepted any of the special critaria then a numeric pasword will be generated randomly 

      if (!upperCaseCharacthers && !lowerCaseCharacters && !specialCharacters && !numbersCharacters) 
        {window.alert ("as none options have been selected, default numeric password will be created");
        var options = numbers;
        var generatePassword= "";
        
        for (var i=0;i<passwordLenght;i++){
          var randomCharacter = options[Math.floor(Math.random()*options.length)];
          console.log(randomCharacter);
          generatePassword=generatePassword+randomCharacter;
          console.log(generatePassword);
        }
        return generatePassword;
      }
    }
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
