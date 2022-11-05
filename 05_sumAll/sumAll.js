const sumAll = function(first, second) {
    let sum = 0;
    let smallerNumber = 0;
    let biggerNumber = 0;
    if ((Number.isInteger(first) === false || Number.isInteger(second) === false) || (first < 0 || second < 0)) {
        return "ERROR";
    }
    else {
        if (second > first) {
            biggerNumber = second ;
            smallerNumber = first;
        }
        else if (first > second) {
            biggerNumber = first;
            smallerNumber = second;
        }
        else if (first === second) {
            sum = first;
            return sum;
        }
        else {
            return "ERROR";
        }
        for (i = smallerNumber ; i <= biggerNumber ; i++) {
            sum += i;
        }
        return sum;
    }

    

    // if (Number.isInteger(first) === true && Number.isInteger(second) === true) {
    //     for (i = first ; i <= second ; i++) {
    //         sum += i;
    //     }
    //     return sum;
    // }
    // else {
    //     return "Error";
    // }
};

// Do not edit below this line
module.exports = sumAll;
