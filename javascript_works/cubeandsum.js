var n=123,sum=0,rem=0;
while(n!=0){
    rem=Math.floor(n%10);
    sum=sum+(rem**3)
    n=Math.floor(n/10);
}
console.log(`sum= ${sum}`);