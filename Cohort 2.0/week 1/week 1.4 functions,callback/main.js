//set of tasks or calc a value it should take input and perform some logic and return output
//functions helps to avoid repeatition so no DRY(don't reapeat yourself)
function findsum(n){
    let ans=0;
for(let i=1;i<n;i++){
    ans=ans+i;
}
return ans
}
console.log(findsum(100));

//FIND THE SUM OF EVEN NUMBERS
function FindEvenSum(n){
    let sum=0;
    for(let i=1;i<n;i++){
        if(i%2==0){
            sum=sum+i;
        }
    }
    return sum;
}
console.log(FindEvenSum(100));
