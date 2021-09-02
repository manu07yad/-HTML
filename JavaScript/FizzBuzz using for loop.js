var array=[];
function fizzBuzz()
{
 for(var count=1;count<101; count++)
{

if(count % 3 === 0 && count % 5===0)
{
    array.push("FizzBuzz");
}
else if(count % 3 === 0 )
{
    array.push("Fizz");
}
else if(count % 5 === 0 )
{
    array.push("Buzz");
}
else
{
    array.push(count);
}
}

console.log(array);

}
