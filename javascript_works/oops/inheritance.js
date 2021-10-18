class Parent{
    m1()
    {
        console.log("inside parent");
    }
 }
 class Child extends Parent{
     m2()
     {
         super.m1()
         console.log("inside m2");
     }
 }
 class Subchild extends Child{
     m3()
     {
         console.log("inside m3");
     }
 }
 
 var sb=new Subchild()
 sb.m1()
 sb.m2()
 sb.m3()
 
 var ch=new Child()
 ch.m1()
 ch.m2()
 
 var ab=new Parent()
 ch.m1()