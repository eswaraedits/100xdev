function sum(num1,num2){
    let result=num1+num2;
    return result;
}
function displayResultPassive(data){
    console.log("sum's result is :"+data)
}
//you are allowed to call one function after this 
//how will you displayResult of a sum
 
const ans=sum(1,9);
displayResult(ans)

function sum(num1,num2,fnToCall){

    let result=num1+num2;
    fnToCall(result);
}
function displayResult(data){
    console.log("Result of the sum is " + data);
}
function displayResultPassive(data){
    console.log("sum's result is :"+data)
}
//passing the function as an argument is called callback
sum(1,19,displayResult)
function arithmeticFunction(a,b,arithmeticFinalFunction){


    return arithmeticFinalFunction(a,b);

}
function sum(a,b){
    return a+b;
}
const value=arithmeticFunction(1,9,sum);
console.log(value)
function greet(){
    console.log("hello world")
}
//setTimeout is builtin function(which timesout or stop after certain time) 1st argument is function(call back),2nd is duration to wait(timeout)(2*1000millisec=2seconds)
function greetAlien(){
    console.log("hellow alien")
    }
//setTimeout(greetAlien,2*1000);
//setintervel is for every intervel the function is called
function greetgirl(){
    console.log("hey girl");
}
setInterval(greetgirl,2*1000);

A callback function is a function that is passed to another function as an argument and is executed when the outer function is completed.




function a(n){
    return n*n
}
function b(n){
    return n*n*n;
}
function num(a,b,fn){
    var a= fn(a)
    var b= fn(b)
    console.log(a+b)
}
num(12,33,fn)