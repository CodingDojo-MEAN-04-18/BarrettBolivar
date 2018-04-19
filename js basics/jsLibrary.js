//Can we make this into a method of an object?
function each(arr, callback) {
    // loop through the array
    for(var i = 0; i < arr.length; i++) {
      callback(arr[i]); // invoking the callback many times... delegation!
    }
};
var _ = {
    map: function(list, iteratee) {
        for(var i = 0; i < list.length; i++) {
            list[i] = iteratee(list[i]);
        };
        return list;
    },
    reduce: function(list, iteratee, memo) { 
        var reducedVal = 0;
        var ind = 0;
        if (memo === undefined){
            memo = list[0];
            ind++;
        };
        while (ind < list.length){
            reducedVal += iteratee(memo, list[ind])
            ind++;
        };
        return reducedVal;
    },
    find: function(list, predicate) {   
        for (var i = 0; i < list.length; i++){
            if (predicate(list[i])){
                return list[i];
                break;
            };
        };
        return false;
    },
    filter: function(list, predicate) { 
        var newArr= [];
        for (var i = 0; i < list.length; i++){
            if (predicate(list[i])){
                newArr.push(list[i]);
            };
        };
        if (newArr){
            return newArr;
        }else {
            return false;
        }
    },
    reject: function(list, predicate) { 
        var newArr= [];
        for (var i = 0; i < list.length; i++){
            if (!predicate(list[i])){
                newArr.push(list[i]);
            };
        };
        if (newArr){
            return newArr;
        }else {
            return false;
        }
    },
};
 // you just created a library with 5 methods!

/* doesItWork = _.map([1, 2, 3], function(num){ return num * 3; });
console.log(doesItWork); */

/* var sum = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0);
console.log(sum);*/

/* var even = _.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(even); */

/* var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(evens); */

var odds = _.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(odds);
