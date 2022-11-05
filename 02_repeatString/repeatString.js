const repeatString = function(string, num) {
    let repeatedString = '';
    let i = num ;
    if (i>=0) {
        for (i ; i > 0 ; i-- ) {
        repeatedString += string;
            }
        return repeatedString;
    }
    else {
        return "ERROR"
    }
};



// Do not edit below this line
module.exports = repeatString;
