const findTheOldest = function(arr) {
    let lifespanArray = arr.map(person => {
       return {name: person.name, lifespan: person.yearOfDeath ? person.yearOfDeath - person.yearOfBirth : new Date().getFullYear() - person.yearOfBirth}
    })
    let maxArray = lifespanArray.reduce((max, current) => max.lifespan > current.lifespan ? max : current)
    console.log(lifespanArray, maxArray);
    return maxArray;
};

// Do not edit below this line
module.exports = findTheOldest;
