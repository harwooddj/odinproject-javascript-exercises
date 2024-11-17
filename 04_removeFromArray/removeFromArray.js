const removeFromArray = function(arr) {
    mainArr = arguments[0];
    for(i=1;i<arguments.length;i++){
        mainArr = mainArr.filter(x => x !== arguments[i]);
    };
    return mainArr;
};

// Do not edit below this line
module.exports = removeFromArray;
