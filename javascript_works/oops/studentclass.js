class student{
    constructor(roll_no,cource,stud_name)
    {
        this.roll_no=roll_no
        this.cource=cource
        this.stud_name=stud_name
    }
    printStudent()
    {
        console.log(this.roll_no,this.cource,this.stud_name);
    }
}

var student1=new student(14,"mearnstack","jishnu")
//student1.setStudent(14,"mearnstack","jishnu")
student1.printStudent()

// var student2=new student()
// student2.setStudent(15,"java","vishnu")
// student2.printStudent()
// console.log(student2.stud_name);