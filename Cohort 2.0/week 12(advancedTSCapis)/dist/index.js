"use strict";
function sumofAges(user1, user2) {
    return user1.age + user2.age;
}
const age = sumofAges({
    name: "eswar",
    age: 23
}, {
    name: "lav",
    age: 21
});
console.log("age together is " + age);
