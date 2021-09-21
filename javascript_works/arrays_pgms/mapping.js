var array=[2,3,4,6,5,7,8]
var op=[]
for(let num of array)
{
    // if(num<5)
    // {
    //     op.push((num-1))
    // }
    // else if(num>5)
    // {
    //     op.push((num+1))
    // }
    // else
    // {
    //     op.push(num)
    // }
    num<5?op.push(num-1):num>5?op.push(num+1):op.push(num)
}
console.log(op);