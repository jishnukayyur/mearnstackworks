var low=4,upper=27;
for(let i=low;i<=upper;i++)
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
    if(i>1 && flag==0)
    {
        console.log(i);
    }
}