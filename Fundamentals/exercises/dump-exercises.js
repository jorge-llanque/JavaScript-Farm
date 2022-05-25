// Calculate if a number is odd or even
const message = {
    INVALID_NUMBER: 'Is not a valid number',
    ODD_NUMBER: 'Is Odd number',
    EVEN_NUMBER: 'Is Even number'
}
function isOddOrEven(number){
    let log = (typeof(number) !== 'number' || !Number.isInteger(number))  && message.INVALID_NUMBER;
    
    if(!log){
        log = (number % 2 === 0) ? message.EVEN_NUMBER : message.ODD_NUMBER;
    }
    
    return log;
}
console.log(isOddOrEven(0))

// Calculate if a word is a palindrome
function isPalindrome(word){
    let log = typeof(word) !== 'string' && 'is not a valid word';

    if(!log){
        word = word.toUpperCase();
        for (let i = 0; i <= word.length / 2; i++) {
            log = 'is palindrome';
            if(word[i] !== word[word.length - (i + 1)]){
                log = 'is not a palindrome'
                break;
            }
        }
    }
    return log;
}
console.log(isPalindrome('HANNAh'))


