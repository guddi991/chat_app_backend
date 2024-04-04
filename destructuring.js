// object destructuring

const obj = {
    name: "guddi",
    age: "21"
}
// 1 way
console.log(obj.name)


//2nd way = > object destructuring
const { name } = obj;
console.log(name);

// Array destructuring

const arr = ['guddo','22']
const [names] = arr;
// const [names,age] = arr; =>now names at 0 index. age at 1 index
 
console.log(names)

module.exports = {
    arr,
    obj
}
