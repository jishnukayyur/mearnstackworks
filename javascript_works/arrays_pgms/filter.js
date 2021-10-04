var arr=[2,3,4,5,6,7]

//print odd number
    // var odd_no=arr.filter(num=>num%2!=0)
    // console.log(odd_no);

//squares of even numbers

    // var even_square=arr.filter(num=>num%2==0).map(num=>num**2)
    // console.log(even_square);

//to find the total of the array
    // var total=arr.reduce((num1,num2)=>num1+num2)
    // console.log("total = ",total);

//max element in the array

    // var max=arr.reduce((num1,num2)=>num1>num2?num1:num2)
    // console.log(max);

//min element in the array

    var min=arr.reduce((num1,num2)=>num1<num2?num1:num2)
    console.log(min);