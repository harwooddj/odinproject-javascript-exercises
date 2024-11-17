const sumAll = function(...args) {
    if (args.sort().every(arg => isNaN(arg))) {
        return "ERROR";
    }else{
        total=args[0]
        for(i=args[0]+1;i<=args[1];i++){
            total+=i;
        };
        return total;
    };
};

// Do not edit below this line
module.exports = sumAll;
