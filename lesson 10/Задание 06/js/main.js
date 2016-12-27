function spotType(type) {
    return typeof type
}

console.log( spotType(1234) )
console.log( spotType('eagf') )
console.log( spotType(false) )
console.log( spotType({}) )
console.log( spotType(undefined) )
console.log( spotType(Array) )