var arr1=[10,20,21,22],arr2=[11,12,20,21];
// var op=[];
// for(let num of arr1)
// {
//     for(let number of arr2)
//     {
//         if(number==num)
//         {
//             op.push(num)
//         }
//     }
// }
// console.log(op);

arr1.sort((i,j)=>i-j);
arr2.sort((i,j)=>i-j);
var pos1=0,pos2=0;
while ((pos1<arr1.length)&(pos2<arr2.length)) {
    if(arr1[pos1]==arr2[pos2])
        {
            console.log(arr1[pos1]);
            pos1++;
            pos2++;
        }
    else if(arr1[pos1]<arr2[pos2])
        {
            pos1++;
        }
    else if(arr1[pos1]>arr2[pos2])
    {
        pos2++
    }
    
}