const reverseString = function(userInput) {
    const newArray = userInput.split("");
    let reversedString = '';
    for (i = (newArray.length)-1 ; i >= 0 ; i--) {
        reversedString += newArray[i];
    }
    return reversedString
};

// Do not edit below this line
module.exports = reverseString;
