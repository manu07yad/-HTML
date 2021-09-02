var array=[];
var count=1;
function fizzBuzz()
{
if(count % 3 === 0 && count % 5===0){
    array.push("FizzBuzz");
}
else if(count % 3 === 0 ){
    array.push("Fizz");
}
else if(count % 5 === 0 ){
    array.push("Buzz");
}
else{
    array.push(count);
}
count+=1;

console.log(array);

}
