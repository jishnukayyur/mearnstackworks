var accounts=[
    [1000,"ram","savings",50000,true],
    [1001,"ravi","current",40000,true],
    [1002,"nikil","savings",5000,false],
    [1003,"jain","current",34000,false],
    [1004,"ajesh","savings",55000,true]
]

// sort the users wrt balance

    accounts.sort((acc1,acc2)=>acc1[3]-acc2[3])
    console.log(accounts);

// print details of acno=1004

    console.log(accounts[4]);

// is there any person with balance < 2000



// print name of users with in_active account

// print details of user with max balance

    var high=accounts.reduce((acc1,acc2)=>acc1[3]>acc2[3]?acc1:acc2)
    console.log(high);

// print details of users with acc_type as savings anad balance > 25000

    var user=accounts.filter(acc=>(acc[2]=="savings")&(acc[3]<25000))
    console.log(user);