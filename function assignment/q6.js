function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn(...args);
        } else {
            return function (...moreArgs) {
                return curried(...args, ...moreArgs);
            };
        }
    };
}


function add(a, b) {
    return a + b;
}

const curriedAdd = curry(add);

console.log(curriedAdd(2)(3));        
console.log(curriedAdd(2, 3));        
console.log(curriedAdd(2)(3)(4));     
console.log(curriedAdd(2, 3, 4));      
