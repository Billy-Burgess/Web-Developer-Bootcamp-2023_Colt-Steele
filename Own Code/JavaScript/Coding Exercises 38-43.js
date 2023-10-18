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