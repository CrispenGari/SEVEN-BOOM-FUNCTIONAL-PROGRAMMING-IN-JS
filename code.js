/*
SEVEN BOOM!
Create a function that takes an array of numbers and return
Boom! if the number 7 appears in the array otherwise returns there's 
no 7 in the array.
Expected result:
sevenBoom([1, 2, 3, 4, 5, 6, 7]) -> Boom!
sevenBoom([8, 6, 3, 100]) -> There's no 7 in the array
sevenBoom([2,55,60,97,86]) -> Boom!
*/
function check7(arr){
 var found =false;
   arr.forEach(element => {
     while(element>0){
         if(element==7 || element%10==7){
             found= !found;
             break;
         }
         element =Number.parseInt(element/10);
     }
   });
   return found;
}
const sevenBoom =(arr, funct)=>{
    if(funct(arr)){
        console.log("Boom!")
    }else{
        console.log("There's no 7 in the array")
    }
}
sevenBoom([2,55,60,77,86], check7)





