// Code your solutions in this file
const names = ["Guadalupe", "Ollie", "Aki"]
function writeCards(names) {
    let newNames = []
    for (let i = 0; i <names.length; i++) {
        newNames.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }
    return newNames;
}
console.log(names);

function countDown() {
    let i = 10
    while (i>=0) {
        console.log(i);
        i--;
    }
}
console.log(countDown(i));