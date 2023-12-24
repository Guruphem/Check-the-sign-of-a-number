/*
CHALLENGE:

Write a jasvscript function to determine the sign of a number: postive, negative and zero using multiple conditional ternary operator
*/

function confirmSign(number) {
    return number > 0 ?
        "Positive Number" :
        number < 0 ?
        "Negative Number" :
        "Zero";
}
console.log(confirmSign(-20)); //Negative Number