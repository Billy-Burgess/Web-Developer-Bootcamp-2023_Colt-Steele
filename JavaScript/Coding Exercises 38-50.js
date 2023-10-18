// 38 Return Value Practice:
function multiply(num1, num2) {
    return num1 * num2;
}

// 39 isShortsWeather Function:
function isShortsWeather(temperature) {
    if (temperature >= 75) {
        return true;
    } else {
        return false;
    }
}

// 40 Last Element Exercise:
function lastElement(arr) {
    if (arr.length === 0) {
        return null;
    } else {
        return arr[arr.length - 1];
    }
}

// 41 Capitalize Exercise:
function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
}

// 42 Sum Array Exercise:
function sumArray(nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    return sum;
}

// 43 Days Of The Week Exercise:
function returnDay(num) {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    if (num < 1 || num > 7) {
        return null;
    } else {
        return days[num - 1];
    }
}

// 44 Function Expression Exercise:
let square = function (num) {
    return num * num;
}

// 45 Methods Exercise:
let square = {
    area(side) {
        return side * side;
    },
    perimeter(side) {
        return side * 4;
    }
}

console.log(square.area(10));
console.log(square.perimeter(10));

// 46 Egg Laying Exercise:
let hen = {
    name: 'Helen',
    eggCount: 0,
    layAnEgg() {
        this.eggCount++;
        return 'EGG';
    }
};

// 47 Map Practice:
// DO NOT ALTER THE FOLLOWING CODE:
const fullNames = [{ first: 'Albus', last: 'Dumbledore' }, { first: 'Harry', last: 'Potter' }, { first: 'Hermione', last: 'Granger' }, { first: 'Ron', last: 'Weasley' }, { first: 'Rubeus', last: 'Hagrid' }, { first: 'Minerva', last: 'McGonagall' }, { first: 'Severus', last: 'Snape' }];

// Write your code here
const firstNames = fullNames.map(function (t) {
    return t.first;
})

// 48 Arrow Function Exercise:
const greet = (name) => {
    return `Hey ${name}!`;
}

// 49 Filter Exercise:
function validUserNames(usernames) {
    // your code here
    return usernames.filter(name => name.length < 10);
}

// 50 Some/Every Exercise:
function allEvens(num) {
    return num.every(function (num) {
        return num % 2 === 0;
    });
}