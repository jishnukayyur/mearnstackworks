var employees=[
    [1000,"ram",15000,"hr",1990,2000],
    [1001,"ravi",25000,"hr",1889,2005],
    [1002,"akhil",30000,"developer",2000,2010],
    [1003,"nikil",35000,"developer",2010,2015],
    [1004,"ajesh",35000,"mrkt",1991,2010],
    [1005,"tom",40000,"ba",1990,2015],
    [1006,"jack",32000,"ba",2001,2010],
]

var employee_names=employees.map(emp=>emp[1])
console.log(employee_names);

//print number of employees
    //console.log(employees.length);

//print no of develeopers 
    // var count=0;
    // for(let emp of employees)
    // {
    //     if(emp[3]=="developer")
    //     {
    //         count++;
    //     }
    // }
    // console.log(count);

//print experience of employee
//outlires => 

    // for(let employee of employees)
    // {
    //     console.log("exp =",employee[5]-employee[4]);
    // }

//highest salary

    // var high_salary=0
    // for(let employee of employees)
    // {
    //     if(high_salary<employee[2])
    //     {
    //         high_salary=employee[2]
    //     }
    // }
    // console.log("max salary= ",high_salary);


//lowest salary
// var lowest_salary=employees[0][2]
// for(let employee of employees)
// {
//     if(lowest_salary>employee[2])
//     {
//         lowest_salary=employee[2]
//     }
// }
// console.log("lowest salary= ",lowest_salary);


//print all employee names whose name starts with a
//