const fibonacci = function(x) {
if (x<=0) {
    return "OOPS";
}
else {
    let array = [1, 1];
    for (let i=0 ; i<x-2 ; i++) {
        array.push(array[(array.length)-1] + array[(array.length)-2])
    }
return array[x-1];
}
};

// Do not edit below this line
module.exports = fibonacci;
