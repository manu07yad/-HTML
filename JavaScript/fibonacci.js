function fibbonacci(n)
{
    var arr=[];
    if(n===0)
    {
        arr.push(0);
    }
    else if(n===1)
    {
        arr.push(0);
        arr.push(1);
    }
    else
    {
        arr.push(0);
        arr.push(1);

        for(i=2;i<n;i++)
        {
            arr.push((arr[arr.length-1])+ (arr[arr.length-2]));
        }
    }
    return arr;
}
