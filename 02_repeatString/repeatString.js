const repeatString = function(text, number) {
    let joinedText = '';
    if(text === '' || number === 0  ){
        return ''
    }else if(number < 0){
        return 'ERROR';
    }else{
        for(let i=0;i<number;i++){
            joinedText+=text;
        };
        return joinedText;
    };
};

// Do not edit below this line
module.exports = repeatString;
