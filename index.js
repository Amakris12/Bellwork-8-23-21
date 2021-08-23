//MAP
1.

// Write a function capitalize that takes a string and uses .map to return the same string in all caps.
// ex. capitalize('whoop') // => 'WHOOP'
// ex. capitalize('oh hey gurl') // => "OH HEY GURL"
var capitalize = function(string){
    return string.split(" ").map((word)=>{
        let temp = word.split("");
        let two = temp.join("");
        return two.toUpperCase()
    })
}
console.log(capitalize('andrew andrew'))

2.
// Now write a new function called swapCase that takes a string of words and uses .map and your newly written capitalize()
// function to return a string where every other word is in all caps.
// Hint: look up Array.prototype.map on MDN and see what arguments the .map callback can take.
// ex: swapCase('hey girl, lets javascript together sometime') // => "HEY gurl, LETS javascript TOGETHER sometime"
var swapCase = function(string){
    for(let i = 1; i <string.length;i++){
        return string.split(" ").map((word)=>{
            let temp = word.split("");
            let two = temp.join("");
            return two.toUpperCase(+1)
        })
    }
}
console.log(swapCase('hey girl, lets javascript together sometime'))




























3.
// Write a function shiftLetters that takes a string and uses .map to return an encoded string with each letter shifted down the
// alphabet by one. Hint: Use Look up the JS functions String.fromCharCode() and String.CharCodeAt() and see if you can use
// Ascii code to acomplish this.
// ex. shiftLetters('hello') // => 'ifmmp'
// ex. (shiftLetters('abcxyz') // => "bcdyz{"
var shiftLetters = function(string){
    for(let i = 0; i < alphabet.length; i++){
        return string.split(" ").map((word)=>{
            var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
            let temp = word.split("");
            let drop = alphabet[i-1]
            return drop
        })
    }
}
console.log(shiftLetters('andrew'))


//CharAt number 3
//FromCharCode  CharCodeAt Number2