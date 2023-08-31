let random = Math.random();
if (random < 0.5) {
    console.log(`number is under 0.5`)
    console.log(random)
} else {
    console.log(`number is equal to &/or greater than 0.5`)
}
console.log(random)

// if (random >= 0.5) {
//     console.log(`number is over 0.5`)
//     console.log(random)
// }

// /const dayOfWeek = prompt(`Enter a Day of the Week`).toLowerCase();

// if (dayOfWeek === `monday`) {
//     console.log(`UGGHHH I HATE MONDAYS`)
// }
// else if (dayOfWeek === `saturday`) {
//     console.log(`Yay I love Saturdays`)
// }
// else if (dayOfWeek === 'friday') {
//     console.log("FRIDAYS ARE DECENT, ESPECIALLY AFTER WORK!")
// }
// else { console.log(`MEH`) }

const password = prompt(`Enter a new password`);
if (password.length >= 6) {
    // Password cannot include space
    if (password.indexOf(' ') === -1) {
        console.log("Valid Password!");
    } else {
        console.log("Password cannot contain spaces!")
    }
} else {
    console.log("PASSWORD TOO SHORT! Must be 6+ characters")
}

