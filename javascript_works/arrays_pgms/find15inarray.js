//linear searching

var arr=[10,11,12,13,14,11];
let flag=0;
for(let num of arr)
{
    if(num==15)
    {
        flag+=1;
        break;
    }
}
console.log(flag==0?"element not found":"element found");