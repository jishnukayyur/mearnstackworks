var n=153,rev=0,rem=0;
while(n!=0){
    rem=Math.floor(n%10);
    rev=rev*10+rem;
    n=Math.floor(n/10);
}
console.log(`reverse of the number= ${rev}`);