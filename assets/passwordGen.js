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


// Create random generator

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

//  // Bonus to copy to clipboard

//  function copyFunction() {
//     /* Get the text field */
//     var copyText = document.getElementById("password");
  
//     /* Select the text field */
//     copyText.select();
//     copyText.setSelectionRange(0, 99999); /*For mobile devices*/
  
//     /* Copy the text inside the text field */
//     document.execCommand("copy");
  
//     /* Alert the copied text */
//     // alert("Copied the text: " + copyText.value);
//   }
