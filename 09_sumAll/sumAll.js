const sumAll = function(firts, last) {
    let total = 0
    while(firts <= last){
            total += firts;
            firts++;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
