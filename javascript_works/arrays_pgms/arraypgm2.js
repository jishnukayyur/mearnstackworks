var arr=[2,4,6,3]
var op=[]
var arr=[2,4,6,3]
var total=0;
for(let num of arr)
{
    total+=num;
}
var op=[]
for(let num of arr)
{
    let res=total-num;
    op.push(res)
}
console.log(op);