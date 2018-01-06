// Valid Parentheses

// Write a function called that takes a string of parentheses,
// and determines if the order of the parentheses is valid.
// The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(()) ( (() ()) () )"  =>  true
// Constraints
// 0 <= input.length <= 100


// SOLUTION 1
const START_PAREN ="(";
const CLOSE_PAREN = ")";

function validParentheses(parens) {
    if (parens.length % 2 !==0 || !parens.startsWith("(")) {
        return false;
    }

    const parensArray = parens.split("");
    const temp = [];

    parensArray.forEach(paren => {
        if (paren === START_PAREN) {
            temp.push(paren);
        } else if (paren === CLOSE_PAREN) {
            temp.pop(paren);
        }
    })
    return temp.length === 0;
}

// SOLUTION 2
function validParentheses2(parens){
    var indent = 0;

    for (var i = 0 ; i < parens.length && indent >= 0; i++) {
      indent += (parens[i] === "(") ? 1 : -1;
    }

    return (indent == 0);
  }

console.log(validParentheses("(())"));// true
console.log(validParentheses(")(()))"));// false
console.log(validParentheses(")())((()())()("));//false
console.log(validParentheses("(())((()())())"));//true