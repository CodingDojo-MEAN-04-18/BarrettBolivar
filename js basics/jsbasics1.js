x= [];
x.push('coding', 'dojo','rocks');
console.log(x);
x.pop();
console.log(x);

const y = [];
y.push(88);
console.log(y);

var z = [9, 10, 6, 5, -1, 20, 13, 2];
for (let ind = 0; ind < z.length; ind++) {
    console.log(z[ind]);
}
for (let ind = 0; ind < z.length -1; ind++) {
    console.log(z[ind]);
}

var names = ['Kadie', 'Joe', 'Fritz', 'Pierre', 'Alphonso'];
console.log(names.length);
console.log(names.length - 1);

function yell(string){
    var string1 = string.toUpperCase()
    console.log(string1);
}
yell("Hey");
// found at w3 schools