function magic_multiply(x, y){
    if (typeof x === 'string' || typeof y === 'string') {
        if (typeof y === 'string'){
            return "Error: Can not multiply by string"
        }
        else {
            var repeat = "";
            for (var index = y; index > 0; index--){
                repeat += x;
            };
            return repeat;
        };
    }
    if (x === 0 && y === 0){
        return "All inputs 0"
    };
    if (Array.isArray(x) || Array.isArray(y)){
        if (Array.isArray(x)){
            for (let index = 0; index < x.length; index++) {
                var element = x[index];
                element *= y;
                x[index] = element;
            }
            return x;
        };
        if (Array.isArray(y)){
            for (let index = 0; index < y.length; index++) {
                var element = y[index];
                element *= x;
                y[index] = element;
            }
            return y;
        };
    };
    x = x * y;
    return x;
};
let test1 = magic_multiply(5, 2);
console.log(test1);
// => 10
let test2 = magic_multiply(0, 0);
console.log(test2);
// => "All inputs 0"
let test3 = magic_multiply([1, 2, 3], 2);
console.log(test3);
// => [2, 4, 6]
let test4 = magic_multiply(7, "three");
console.log(test4);
// => "Error: Can not multiply by string"
let test5 = magic_multiply("Brendo", 4);
console.log(test5);
// => "BrendoBrendoBrendoBrendo"