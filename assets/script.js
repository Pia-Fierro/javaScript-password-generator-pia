// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//Generate the password using users input for certain criteria

function generatePassword() {
  //* prompt method will display information to the user to decide about the lenght of the password.

  var userLenght = window.prompt(
    "Between 8 and 128, how many character your password needs to have?"
  );
  var passwordLenght = userLenght;

  // console.log (passwordLenght);

  if (
    passwordLenght < 8 ||
    passwordLenght > 128 ||
    isNaN(parseInt(passwordLenght))
  ) {
    window.alert(
      "Password must have minimum of 8 and maximum of 128 characters and it must be a number. Please try again."
    );
  }

  //* confirm method will display acept or cancel to the user so they can decide about what carachters to include in the password
  else {
    var upperCaseCharacthers = window.confirm(
      "do you want to include upper case in your password?"
    );
    var lowerCaseCharacters = window.confirm(
      "do you want to include lower case in your password?"
    );
    var specialCharacters = window.confirm(
      "do you want to include special characthers in your password?"
    );
    var numbersCharacters = window.confirm(
      "do you want to include numbers in your password?"
    );

    var upperCase = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
    var lowerCase = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    var special = [
      "!",
      "@",
      "#",
      "$",
      "%",
      "&",
      "(",
      ")",
      "_",
      "+",
      "~",
      "|",
      "}",
      "{",
      "[",
      "]",
      "?",
      ">",
      "<",
      "/",
    ];
    var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var options = [];

    //* if user does not accepted any of the special critaria then a numeric pasword will be generated randomly

    if (
      !upperCaseCharacthers &&
      !lowerCaseCharacters &&
      !specialCharacters &&
      !numbersCharacters
    ) {
      window.alert(
        "as none options have been selected, default numeric password will be created"
      );

      var options = numbers;
      var generatePassword = "";
      for (var i = 0; i < passwordLenght; i++) {
        var randomCharacter =
          options[Math.floor(Math.random() * options.length)];
        // console.log(randomCharacter);
        generatePassword += randomCharacter;
        // console.log(generatePassword);
      }
      return generatePassword;
    }
    //* If user choose a mix of carachters for the password from the 4 availables then the concat method will create a new arrey with the chosen mix
    else {
      if (upperCaseCharacthers) {
        var options = upperCase;
      }
      if (lowerCaseCharacters) {
        var options = options.concat(lowerCase);
      }
      if (specialCharacters) {
        var options = options.concat(special);
      }
      if (numbersCharacters) {
        var options = options.concat(numbers);
      }

      var generatePassword = "";
      for (var i = 0; i < passwordLenght; i++) {
        var mix = options[Math.floor(Math.random() * options.length)];
        generatePassword += mix;
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
