const removeFromArray = function(array, ...removedNumber){
    return array.filter(element => !removedNumber.includes(element));
}

// Do not edit below this line
module.exports = removeFromArray;
