const sumAll = function(...args) {
    args.sort()
    if (args.some(arg => isNaN(arg)) || args.some(arg => arg<0) || args.some(arg => !Number.isInteger(arg)))  {
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
