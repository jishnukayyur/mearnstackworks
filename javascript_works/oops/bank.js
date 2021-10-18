class Bank
{
    createAccount(acno,p_name,acc_type,min_bal)
    {
        this.acno=acno
        this.p_name=p_name
        this.acc_type=acc_type
        this.balance=min_bal
    }
    deposit(amount)
    {
        this.balance+=amount
        console.log(`your account ${this.acno} has been credited with ${amount}rs current balace is ${this.balance}rs`);
    }
    withdrwal(amount)
    {
        if(this.balance>amount)
        {
            this.balance-=amount
            console.log(`your account ${this.acno} has been debited with ${amount}rs current balace is ${this.balance}rs`);
        }
        else
        {
            console.log("transaction error : insufficient balance");
        }
    }
}

var obj1=new Bank()
obj1.createAccount(1000,"ram","savings",3000)
obj1.deposit(5000)
obj1.withdrwal(10000)