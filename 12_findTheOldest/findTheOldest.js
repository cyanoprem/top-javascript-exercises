const findTheOldest = function(people) {
    people.forEach(assignYear);
    
    function assignYear (person) {
        if (person.yearOfDeath == undefined) {
        person['yearOfDeath'] = 2022;
        }
    }
    
    people.sort((a, b) => (b.yearOfDeath-b.yearOfBirth) - (a.yearOfDeath-a.yearOfBirth));
    return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
