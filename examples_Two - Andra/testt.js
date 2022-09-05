
const object = {
    property : 2
};
console.log(object?.property)

// object?.property = 1 // invalid left - hand error

const potentiallyNull = {};
const prop = potentiallyNull?.a;
console.log(prop);

console.log(object.property2 ?? 'work')