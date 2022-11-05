const palindromes = function (userString) {
    let lowerCaseString = userString.toLowerCase() ;
    let onlyLettersString = lowerCaseString.replace(/[^a-z]/mg, "");
    let userArray = onlyLettersString.split('') ;
    var value = "";
    
    // verify if the letters-only array is a palindrome...
    for (let i = 0 ; i < userArray.length ; i++) {
        if (userArray[i] != userArray[(userArray.length)-i-1]) {
            value = "false" ;
            break ;
        }
        else {
            value = "true" ;
            continue;
        }
    }
    if (value === "true") {
        return true ;
    }
    else if (value === "false") {
        return false;
    }
}

palindromes('ZZZZ car, a man, a maracaz.')

// Do not edit below this line
module.exports = palindromes;
