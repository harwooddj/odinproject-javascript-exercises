const palindromes = function (phrase) {
    forw = phrase.split('').filter(c => c.match(/^[a-zA-Z0-9]+$/) !== null).join().toLowerCase();
    rev = phrase.split('').filter(c => c.match(/^[a-zA-Z0-9]+$/) !== null).reverse().join().toLowerCase();
    return forw === rev;
};

// Do not edit below this line
module.exports = palindromes;
