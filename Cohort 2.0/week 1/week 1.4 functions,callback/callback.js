//basically passing functions as arguments
//we are calling one function in another fn we know it

/*function square(n){
    return n*n
}
function sumOfSquares(a,b){
    const value1=squre(a);
    const value2=squre(b); 

}
console.log(sumOfSquares(10,20));
if we add function cube,... to it it violates dry(repeated logic)*/

function square(n){
    return n*n;
}
function cube(n){
    return n*n*n;
}
function sumOfSomething(a,b,fn){
   const  value1=fn(a);
   const value2=fn(b);
   return value1+value2
}
console.log(sumOfSomething(2,3,square));//squre is just like a variable/argument
console.log(sumOfSomething(2,3,cube));
