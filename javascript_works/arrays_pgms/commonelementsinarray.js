var arr1=[10,20,21,22],arr2=[11,12,20,21];
var op=[];
for(let num of arr1)
{
    for(let number of arr2)
    {
        if(number==num)
        {
            op.push(num)
        }
    }
}
console.log(op);