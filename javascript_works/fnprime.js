function primeNo(low,upp)
{
    for(let i=low;i<=upp;i++)
{
    let flag=0;
    for(let j=2;j<i;j++)
    {
        if(i%j==0)
        {
            flag=1;
            break;
        }
        
    }
    if(flag==0)
    {
        console.log(i);
    }
}
}
console.log(primeNo(4,27));