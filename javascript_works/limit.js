var n=3,low=8,upper=27;
for(let i=1;i<=upper;i++)
{
    let res=i**n;
    if(res>upper)
    {
        break;
    }
    if(res>=low && res<=upper)
    {
        console.log(i);
    }
    
}