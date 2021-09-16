var n=4,flag=0;
for(let i=2;i<n;i++)
{
    if(n%i==0)
    {
        flag+=1;
        break;
    }
}
console.log(flag==0?"prime":"not prime");