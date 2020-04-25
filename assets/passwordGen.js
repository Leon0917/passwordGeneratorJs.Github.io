//Create user-selected criteria

var passwordLength = prompt("how long should the password be")
var specialChar = confirm("Do you want special Characters")
var uppercase = confirm("Do you want uppercase characters")
var lowercase = confirm("Do you want lowercase characters")
var numbers = confirm("Do you want numberic characters")

// Add event listeners

window.onload = function (){
    var generateButton = document.querySelector('#generate');
    generateButton.addEventListener('click', function(){				
        document.querySelector('#password').value = generate();

            });
}

// Add function to create random generator

function generate( length = 12 ){
    var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var lowercase = 'abcdefghijklmnopqrstuvwxyz';
    var numbers = '0123456789';
    var specialChar = '!"#$%&\'()*+,-./:;<=>?@^[\\]^_`{|}~';
 
    var all = uppercase + lowercase + numbers + specialChar;
 
    var password = '';
 
    for (var index = 0; index < length; index++) {
        var character = Math.floor(Math.random() * all.length);
        password += all.substring(character, character + 1);
    }
 
    return password;
 }

// Function to copy to clipboard

 function copyFunction() {
    var copyText = document.getElementById("password");
    copyText.select();
    copyText.setSelectionRange(0, 99999); 
    document.execCommand("copy");
    alert("Copied to clipboard: " + copyText.value);
  }
