
//   function getNames(users) { return users.map(users => users.name)}
let getName = (users) => users.map((user) => user.name)

const users = [
    {
        id: 001,
        name: 'Alice',
        startDate: '2021-01-03',
    },
    {
        id: 002,
        name: 'Bob',
        startDate: '2020-02-01',
    },
    {
        id: 003,
        name: 'Claire',
        startDate: '2019-03-01',
    },
];
console.log((getName(users))); // ['Alice', 'Bob', 'Claire']