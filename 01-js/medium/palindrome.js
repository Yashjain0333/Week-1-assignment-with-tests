/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
    var n = str.length;
    let s = "";
    const remove = [' ', '.', ',', ':', '!', '?']
    for(var i = 0; i < n; i++) {
        if(remove.includes(str[i]))
            continue;
        else
            s += str[i].toLowerCase();
    }
    n = s.length;
    for(var i = 0; i < n / 2; i++) {
        if(s[i] != s[n - 1 -i])
            return false;
    }
    return true;
}

module.exports = isPalindrome;
