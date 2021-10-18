class Employee{
    constructor(eid,e_name,salary,desig)
    {
        this.eid=eid
        this.e_name=e_name
        this.salary=salary
        this.desig=desig
    }
}
var emp1=new Employee(1000,"ram",25000,"developer")
var emp2=new Employee(1001,"ravi",23000,"developer")
var emp3=new Employee(1002,"raju",26000,"ba")

var employees=[];
employees.push(emp1,emp2,emp3)

//employees.filter(emp=>emp.desig="developer").forEach(developer=>console.log(developer))

employees.sort((emp1,emp2)=>emp1.salary-emp2.salary)
console.log(employees);