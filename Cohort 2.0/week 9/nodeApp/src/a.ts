//let x: number = 1;
//console.log(x)

//write fn greet by name

/* 

//learning :  'implicit any' is when TypeScript implicitly assigns the any type to a variable or parameter. It's bad, and the noImplicitAny setting is bundled as part of strict mode for that reason

function Greet(firstName:string){
console.log("hello "+firstName)
}

Greet(545) */

/* //type inference even is you dont mention :number as return type typscpt can infer it as numbe+number is number
function sum(a:number,b:number):number {
    return a+b
}
const result = sum(3,4)
 */



/* function isLegal(age:number){
    return age>18
}
//type inference : no return type but tsc know isLegal returns boolean
console.log(isLegal(5)) */


/* // callbacks: create function which takes another function as input and runs after 1sec
function runAfter1Sec(fn2:()=>void){
    setTimeout(fn2,1000)
}

function fn2(){
    console.log("hello i am running in fn1")
}

runAfter1Sec(fn2)
 */
//zod vs typescript the big diff is zod check while run time (in browser ) but ts at compile time
//const greet = (name:string)=>`hello ${name}`


/* function isLegal(a:{
firstName:string,
age:number,
email:string
}){
    return a.age>18
}

isLegal({
    firstName:"eswar",
    age:20,
    email:"ggmail@.com"
}) */
/* 
interface User{
    firstName:string,
    age:number,
    email:string
    username?:string //optional
}

function isLegal(user:User){
    if(user.age>18) return true
    else return false
}

isLegal({
    firstName:"hello",
    age:23,
    email:"hello"
}) */


/* //structure of person who ever implements it manager/employe they shoudl have name age greet
interface Person{
    name:string,
    age:number,
    greet(phrase:string):void
}
//if there no implements then employee dont type check name age greet or greet 
//if that class the type of person(implement person /extend person) if you shoudl add name age greet if not type check and error
class Employee implements Person {
    name:string
    age:number
    constructor(n:string,a:number){
        this.name = n
        this.age = a
    }
    greet(phrase:string):void{
        console.log(`hello ${phrase} ${this.name}`)
    }
}
const e = new Employee("eswar",22)
console.log(e.name) */


/*  

    type User = {
    name:string,
    age:number
}

interface User2 {
    name:string,
    age:number
}

//type doesnt have support class implementation thats it mostly use interface for some cases user type
 */

// you can do fn idchk(id:number | string) but use type

/* type idArg = string | number
function idcheck(id:idArg){
    
}

idcheck(1)
idcheck("") */

//popular interview question :what is the difference between type and interface
//exp ans: interface you can extend in a class but cant used for union and intersection but type cant extend in class but has support for intersections and union

/* type Employee = {
    name:string,
    startDate:Date
}

interface Manager{
    name:string,
    department:string
}

// type techLead = Employee & Manager

// //so now techlead has name dept date

// const t:techLead = {
//     name:"hello",
//     startDate : new Date(),
//     department: "hr"
// }
// console.log(t) */


// function max(arr:number[]):number{
//     let max = 0
//     let i = 0
//     while(i<arr.length){
//         if(arr[i]>max) max = arr[i]
//         i++
//     }
//     return max
// }

// const a = max([1,2,3,4])
// console.log(a)


//enum enumartion

type keyInput = "up" | "down" | "right" | "left" //up and down constants right
function doSomething(keyPress:keyInput){
    if(keyPress=="up"){

    }
    else{

    }
}

doSomething("up")
doSomething("aadd") //work if keypress:string 
doSomething('asdasdf') //not up or down so we use types here type keyInput = "up"|"down"


enum Direction{
    Up, //0 in js  ( Up:"up ") you can do this and one moer thing Up=10 down will be 11...
    Down, //1
    Right, //2
    Left //3
}

function doSomething2(keyPress:Direction){
    if(keyPress==Direction.Up)
    {
        //do something
    }
    else{}
}

doSomething2(Direction.Up)


//use case of enum in express
enum responseStatus{
    notFound=404,
    success=200,
    error=500
}
app.get("/",(req:any,res:any)=>{
    if(!req.query.userId){
        //return res.status(404).json({})
        return res.status(responseStatus.error).json({"user not found"})
    }
})

type Arr = number | string
//funtion firstElem(arr:number[]|string[])
function firstElement(arr:Arr[]){
    return arr[1]
}

/// even though hello is str but first elemtn take arr type and return array so it bascly thinks value as Arr type so whats the solution???
const value = firstElementt("hello","hello")
console.log(value.toUpperCase) //
type ss = Array<number,string>
function firstEle(arr:ss)

firstElementt([1,2,3])



function identity<T>(arg:T):T{
    return arg
}

let output = identity<string>("hello")
let output2 = identity<number>(2)

output.toUpperCase //now works


function firstElm<T>(arr: T[]){
        return arr[0]
}
interface User{
    name:string,
    id:number
}
const el1 = firstElm<string>(["eswar","sargram"])
const el2 = firstElm<number>([1,2,3])
const el3 = firstElm<User>([{name:"L",id:8}]) //array of user objects

// //type numberArr = number[]

// type city = string|number
// //let city:string|number


// const apple:{color:string,sweeet:boolean} = {
//     color:"red",
//     sweeet:true
// }

// apple.color

// //:string,:number annotaion
// //:string[] shorthand notation
// //cities : Array<string> generic type notation
// let cities:string[] = ['hyd','banglore','vizag']

// cities[2] = 2

// //diff shorthand vs WebGLRenderingContext
// let cities2:string[]|number[] = ["hyderabad","zm"]

// cities2[2,35,4] //acepts only string

// let cities3:Array<string | number> = ["hyd",22,"goa"] //no complaints 

// let user:Array<any> = ['ramesh',22,true]

// //user[2]= "hello" works so generics are so good

//   //tuples
// //only two defined so only two accepted in the same pattern
//   let user2:[string,boolean] = ["hello",true]
// user2 = ["ram",true,22] //not allowed only 2 
// user2 = ["ram","hello"] //not allow must be boolean 


//void a fn which not return anything 
// function fn(name:string):void{
//     return  true //fn type is void no return expected
// } 
// //null //no value empty 
// let a:null
// a="a" wont work
// let b:undefined
// b="string" wont work 
// //declared but no value

/* class Employee{
    names:string
    dept:string
    age:number

    constructor(names:string,dept:string,age:number){
        this.names = names
        this.dept = dept
        this.age= age

    }
    employdetails(){
        console.log(`emp name is ${this.names}`)
    }
} */
/* 
const emp1 = new Employee("ramesh","eng",21)
emp1.employdetails()
 */


interface Student {
    name:string
    age:number
    height?:string
}

const std1:Student = {
    name:"hel",
    age:22,
    height:"190"
}

console.log(`student height is ${std1.height}`)

//if we want to extend student to use in some other interface say player (student + types of player)

interface Player extends Student{
    subjects:string,
    verified:boolean,
    goal:string
}
const p1: Player = {
    name:"asdf",
    age:22,
    subjects:"da",
    verified:true,
    goal:"coding"
}

//type alias

type dataTypecustom = string | number |boolean;

interface Product{
    name:dataTypecustom 
    age:dataTypecustom
}
now nam can be anythin


