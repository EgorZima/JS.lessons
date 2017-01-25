
// Write a single function that can be invoked by either

function sum(a,b) {
    if(arguments.length === 1) {
        return function(b) {
            return a + b
        }
    }
    return a + b
}

console.log( sum(2,3) ); //5
console.log( sum(2)(3) ); //5