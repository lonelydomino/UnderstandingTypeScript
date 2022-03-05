// console.log('code goes here!!!')
// function add(n1: number, n2: number) {
//     // if(typeof n1 !== 'number' && typeof n2 !== 'number'){
//     //     throw new Error('Incorrect input')
//     // }
//     return n1 + n2
// }
// const number1 = 5
// const number2 = 2.8
// const result = add(number1, number2)
// console.log(result)
// const person: {
//     name: string,
//     age: number
// } = {
//     name: "Milo",
//     age: 32
// }
// const person: {
//     name: string,
//     age: number,
//     hobbies: string[],
//     role: [number, string]
// } = {
//     name: "Milo",
//     age: 32,
//     hobbies: ["videogames", 'reading'],
//     role: [2, 'author']
// }
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 1] = "ADMIN";
    Role[Role["READ_ONLY"] = 2] = "READ_ONLY";
    Role[Role["AUTHOR"] = 3] = "AUTHOR";
})(Role || (Role = {})); //assigns labels to numbers
var person = {
    name: "Milo",
    age: 32,
    hobbies: ["videogames", 'reading'],
    role: Role.ADMIN
};
var favoriteActivities;
console.log(person.name);
