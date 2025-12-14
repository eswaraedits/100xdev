let person1="harkirat";
let age1=20;
let gender1="male";

let personArrray=["harkirat","raman","kirat"];
console.log(personArrray[0])
const personArray=["harkirat","raman","priya"]
const genderArray=["male","male","female"]
for(let i = 0;i<personArray.length;i++){
    if(genderArray[i]=="male"){
        list=personArray[i];
        console.log(personArray[i])
    }
}

//console.log(list)
const users1={
    firstName:"harkirat",
    gender:"male"
}
console.log(users1["firstName"])
const allusers=[

    {firstName:"harkirat",gender:"male"},
    {firstName:"raman",gender:"male"},
    {firstName:"priya",gender:"female"}
];
for (let i = 0;i<allusers.length;i++){
    if(allusers[i]["gender"]== "male"){
        //console.log(allusers[i].firstName)
        console.log(allusers[i]["firstName"])
    }
}
function findsum(a,b){
    return a+b;
}
z=findsum(3,4)
console.log(z)
console.log(allusers[name]) // this is differnt as it will fetch name variable itstead of the object in array
console.log(allusers["name"]) //works
console.log(allusers.name) //also works 

JSON;

