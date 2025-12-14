/*let str1="listen"
let str2="silent"
let str3=str1.toLowerCase().split('').sort().join()
let str4=str1.toLowerCase().split('').sort().join()
if(str3==str4){
    console.log("anagrams")
    return true
}
else{
    return false
}

FIRST SUBMITTED CODE

/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

function isAnagram(str1, str2) {
    let str3=str1.split('').sort().join();
    let str4=str2.split('').sort().join();
    if(str3==str4){
      return true;
    } 
    return false;
  }
  module.exports = isAnagram;



let str0="kirat"
let f={};
for(let i=0;i<str0.length;i++){
    //if(f[i]!=str1[i]){ wrong
       // f+=str[i];
       if(f[str0[i]]==undefined){
            f[str0[i]]=1;
        }
        else{
            f[str0[i]]+=1;
        }
        
    }
console.log(f)*/
function isAnagram(str1,str2) {
    if(freq(str1)==freq(str2)){
      return true;
    }
    return false;
  }
function freq(str0){
    let f={};
    for(i=0;i<str0.length;i++){
      if(f[str0[i]]==undefined){
        f[str0[i]]=1;
      }
      else{
        f[str0[i]]++;
      }}
      return f;
  }
    console.log(isAnagram("listen","silent"))



    function isAnagram(str1,str1){
      str1 = str1.split("").sorted().join()
      str2 = str2.split("").sorted().join()


    }