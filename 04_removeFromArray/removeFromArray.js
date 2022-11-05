const removeFromArray = function(array, ...args) {
        for (i = (args.length)-1 ; i >= 0 ; i--) {
            for (j = (array.length)-1 ; j >= 0 ; j--) {
                if (array[j] === args[i]) {
                    array.splice(j, 1);
                    break;
                }
                else {
                    continue;
                }
            }
        }
        return array;
};

// Do not edit below this line
module.exports = removeFromArray;


    // function isArray(arrayName) {
    //     return arrayName.constructor === Array;
    //   }

    // for (arg of args) {
    //     let checkIfArray = isArray(arg);
    //     if (checkIfArray === true) {
    //         continue
    //     }
    //     else if (checkIfArray === false) {
    //         if (arg = )
    //     }
    //     }
    //     }