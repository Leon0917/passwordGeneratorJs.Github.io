
// Add event listeners

window.onload = function () {
    var generateButton = document.querySelector('#generate');
    generateButton.addEventListener('click', function () {
        document.querySelector('#password').value = generate();

    });
}

// Add function to create random generator

function generate() {
    var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var lowercase = 'abcdefghijklmnopqrstuvwxyz';
    var numbers = '0123456789';
    var specialChar = '!"#$%&\'()*+,-./:;<=>?@^[\\]^_`{|}~';
    var passwordLength = prompt("how long should the password be")


    var all = "";
    if (passwordLength < 8 || passwordLength > 128) {
        alert("Plese enter a number between 8 & 128")
        return "Invalid Password length - Please enter number between 8 and 128"
    }
    else {
        var yesSpecialChar = confirm("Do you want special Characters")
        var yesUppercase = confirm("Do you want uppercase characters")
        var yesLowercase = confirm("Do you want lowercase characters")
        var yesnumbers = confirm("Do you want numberic characters")
        if (!yesSpecialChar && !yesUppercase && !yesLowercase && !yesnumbers) {
            alert("please choose atleast one character")
            return "Please choose atleast one character set"
        }
        else {
            if (yesSpecialChar) {
                all += specialChar
            }
            if (yesUppercase) {
                all += uppercase
            }
            if (yesLowercase) {
                all += lowercase
            }
            if (yesnumbers) {
                all += numbers
            }
            var password = '';

            for (var index = 1; index <= passwordLength; index++) {
                var character = Math.floor(Math.random() * all.length);
                password += all.substring(character, character + 1);
            }

            return password;
        }
    }
}

// Function to copy to clipboard

function copyFunction() {
    var copyText = document.getElementById("password");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Copied to clipboard: " + copyText.value);
}
