var arr=[10,11,10,20,21,21]
var duplicate={}
for(let num of arr)
{
    if(num in duplicate)
    {
        console.log(num);
    }
    else
    {
        duplicate[num]=1
    }
}