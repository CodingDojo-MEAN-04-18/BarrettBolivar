//Challenge 1 : Print all of the students and their cohort.
function print_all(obj) {
    for (const student of students) {
        console.log(`name: ${ student.name }, cohort: ${ student.cohort }`)
    };
}

let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];
print_all(students);

// Challenge 2
function print_all2(usersObj){
    for (let key in usersObj) {
        console.log(key.toUpperCase());
        for (let i = 0; i < users[key].length; i++) {
            let place = i + 1;
            let fname = users[key][i].first_name;
            let lname = users[key][i].last_name;
            let tlength = fname.length + lname.length;
            console.log(`${place} - ${lname}, ${fname} - ${tlength}`);
        }
    };
}
let users = {
    employees: [
        { 'first_name':  'Miguel', 'last_name' : 'Jones' },
        { 'first_name' : 'Ernie', 'last_name' : 'Bertson' },
        { 'first_name' : 'Nora', 'last_name' : 'Lu' },
        { 'first_name' : 'Sally', 'last_name' : 'Barkyoumb '}
    ],
    managers: [
        { 'first_name' : 'Lillian', 'last_name' : 'Chambers' },
        { 'first_name' : 'Gordon', 'last_name' : 'Poe '}
    ]
};
print_all2(users);