var a=2,b=3,c=7;
if((a>b&&a<c)||(a>c&&a<b))
{
    console.log(`${a} is second largest number`);
}
else if((b>a&&b<c)||b>c&&b<a)
{
    console.log(`${b} is second largest number`);
}
else{
    console.log(`${c} is second largest number`);
}