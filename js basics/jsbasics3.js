function zero_negativity(arr){
    var index = 0;
    while (index < arr.length){
        if(arr[index] < 0){
            return false;
        };
        index++;
    };
    return true;
}
console.log(zero_negativity([1,2,3,4]));
console.log(zero_negativity([1,2,3,-4]));
console.log("---------------------------");

function is_even(num) {
    if (num % 2 == 0){
        return true;
    };
    return false;
}
console.log(is_even(3));
console.log(is_even(4));
console.log("---------------------------");

function how_many_even(arr) {
    var index2 = 0;
    var count = 0;
    while (index2 < arr.length){
        if (arr[index2] % 2 == 0){
            count++;
        };
        index2++;
    };
    return count;
}
console.log(how_many_even([1,2,3,4]));
console.log("---------------------------");

function create_dummy_array(n) {
    var zero = 0;
    var dummy = [];
    while (n > zero){
        var rdm = Math.random()*10;
        rdm = Math.floor(rdm);
        dummy.push(rdm);
        n--;
    };
    return dummy;
}
console.log(create_dummy_array(5));
console.log("---------------------------");

function random_choice(arr) {
    var rndm = Math.random() * arr.length;
    rndm = Math.floor(rndm);
    return arr[rndm];
}
console.log(random_choice([1,2,3,4,5,6,7,8,9]));