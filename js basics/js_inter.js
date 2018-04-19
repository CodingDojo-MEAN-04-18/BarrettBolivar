function starString(n){
    var starstr = "";
    for (var i = 0; i < n; i++){
        starstr += "*";
    };
    return starstr;
}
let stars = starString(8)
console.log(stars);

function drawStars(arr){
    var new_arr =[];
    for (var index = 0; index < arr.length; index++){
        if (typeof arr[index] === "number"){
            t = arr[index];
            z = starString(t);
            new_arr[index] = z;
        } else {
            var count = 0;
            var total = "";
            var string = arr[index];
            console.log(string.length);
            var char = arr[index].charAt(0);
            char = char.toLowerCase();
            while (count < string.length){
                total += char
                count++;
            }
            new_arr[index] = total;
        }
    };
    return new_arr;
}
let x = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"];
console.log(drawStars(x));

