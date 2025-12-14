
/* interface User{
    name:string,
    age:number
}


function sumofAges(user1:User,user2:User){
    return user1.age + user2.age
}

const age = sumofAges({
    name:"eswar",
    age:23
},{
    name:"lav",
    age:21
})
console.log("age together is " + age) */

/* 
interface User{
    id:number,
    name:string,
    age:number,
    email:string,
    password:string
}

//if you want to update(db) name,age,password you cant write fn(name,age,password) db call what if there is more than 5 params so use PICK

type updatedParams = Pick<User,"age"|"name"|"password">

function UpdateUser(updatedprops:updatedParams){
    //hit the db to update user
}
 
UpdateUser({age:21,name:"ram",password:"hello"}) // the problem is what if user want Upate only name and age???? this has to optional right so we use PARTIAL

type updatedParamsPartial = Partial<updatedParams>
function UpdateUserPartial(updatePartial:updatedParamsPartial){
    //hit the db
}
UpdateUserPartial({name:"hello"}) //now i dont need to pass age/password they are optional thanks to Partial



//READ ONLY



const user = {
    name:"eswar",
    age:22
}

user.name = "ram" //user is constant right how changing????
console.log(user.name)

const a = [1,2,3,4]
a[2] = 22; //working 

const namea = 21;
namea = 33 //being constant

const names = "hello"
names = "heel" //being constant

//the answer is a cant be changed but items in a can change 
a [3,35,5] //being constant doesnt working

// to enforce constant to internal values 

//READONLY

type User2 = {
    readonly email:string,
    readonly name:string
}

const user2:User2 = {
    email:"adfsasdf@gmail.com",
    name:"hello"
}
user2.email = "newmail@mgmail" // being constant as itsa read only property 


type User3 = {
    password:string,
    say:string
}

const user3:Readonly<User3> = {
    password:"broo",
    say:"hello"
}
//to avoid readonly everywhere you can say
//now whole class i read only

user3.say = "new name" // read only
 */


//RECORD AND MAP


/* type Users = {
    [key:string]:{
        id:string,
        username:string
    }
} */
type User = {
    id:string,
    username:string
}
type Users = {
    [key:string]:User
}


//type easySyntax = Record<string,User> //key is a stirng value is User type
const users:Users = {
    "id@1":{
        id:"id@1",
        username:"harkirat"
    },
    "id@2":{
        id:"id@2",
        username:"roy"
    }
}

//more simples object (giving types to objects)


type UsersAge = {
    [key:string]:number
}

const simpleUserAge:UsersAge = {
    "id@1":21,
    "id@2":22,
    "id@44":34
}

//this is ugly so use RECORDS

type simplerSyntax = Record<string,number> //soo simple for objects





//lets code somehting 
type realUser = Record<string,{name:string,age:number,email:string}>
const RealUser = {
    "id11":{
        name:"ram",
        age:22,
        email:"asefaf@"
    },
    "id22":{
        name:"hell",
        age:44,
        email:"hell@"
    }
}

RealUser["id22"].name = "amma" 

// works but ugly syntax so use Maps
//like c++ we can do maps 
//just another syntax to create key value pairs

const usr = new Map()
usr.set("id@1",{name:"ram",age:22})
usr.set("id@2",{name:"hello",simpel:true,age:43})

const user2  = usr.get("id@2")
usr.delete("@id1")
console.log(user2)


// to enfore types in Map

type Userss = {
    name:string,
    age:number,
    password:string
}

const userrss = new Map<string,Userss>()

userrss.set("id@22",{name:"rey",age:22,password:"bro"}) //type safety enforced


//exclude

type EventType = "click" | "scroll" | "mousemove"
type excludeEvent = Exclude<EventType,"scroll"> //only picks click mousemove excludes scroll


const handleEvent = (event:excludeEvent)=>{
    console.log(`handling even ${event}`)
}
handleEvent("click")