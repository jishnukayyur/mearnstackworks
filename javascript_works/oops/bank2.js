class Bank{
    session={}
    accounts = {
        1001: {
            acno: 1001, password: "userone", balance: 5000, transactions:
                [
                    { to: 1002, amount: 500 },
                    { to: 1003, amount: 600 },
                    { to: 1004, amount: 700 }
                ]
        },
        1002: {
            acno: 1002, password: "usertwo", balance: 7000,
            transactions:
                [
                    { to: 1001, amount: 500 },
                    { to: 1003, amount: 600 },
                    { to: 1004, amount: 700 }
                ]
        },
        1003: {
            acno: 1003, password: "userthree", balance: 8000,
            transactions:
                [
                    { to: 1001, amount: 500 },
                    { to: 1002, amount: 600 },
                    { to: 1004, amount: 700 }
                ]
        },
        1004: {
            acno: 1001, password: "userone", balance: 9000,
            transactions:
                [
                    { to: 1001, amount: 500 },
                    { to: 1003, amount: 600 },
                    { to: 1004, amount: 700 }
                ]
        },
    
    }
    validateAccountNumber(acno)
    {
        return acno in this.accounts?true:false
    }
    getAccountDetails(){
        return this.accounts
    }

    authenticate(acno,password){
        if(this.validateAccountNumber(acno))
        {
            let pwd=this.accounts[acno].password;
            if(pwd==password)
            {
                this.session["user"]=acno
                return 1
            }
            else
            {
                return 0
            }
        }
        else
        {
            return -1;
        }
    }

    balanceEnquiry()
    {
        let user=this.session["user"]
        return this.accounts[user].balance
        
    }

    fundtransfer(to_accno,amount)
    {
         if(this.validateAccountNumber(to_accno))
         {
             let user=this.session["user"]
             let balance=this.balanceEnquiry()
            if(balance>amount)
            {
                this.accounts[user].balance-=amount;
                this.accounts[to_accno].balance+=amount
                this.accounts[user].transactions.push({to:to_accno,amount:amount})
                console.log(this.accounts[user]);
            }
            else
            {
                console.log("failed insufficient balance")
            }
         }
         else
         {
             console.log("invalid account number");
         }
    }

    paymentHistory()
    {
        let user=this.session["user"]
        console.log(this.accounts[user].transactions);
    }
    getTransactions()
    {
        let transaction_history=[];
        for(let account in this.accounts)
        {
            transaction_history.push(this.accounts[account].transactions)
        }
        return transaction_history
    }
    creditTransactions()
    {
        let transactions=this.getTransactions()
        for(let trans of transactions)
        {
            for(let tran of trans)
            {
                if(tran.to==this.session["user"])
                {
                    console.log(tran);
                }
            }
        }
    }
}


var obj=new Bank()
//console.log(obj.getAccountDetails());
var user=obj.authenticate(1002,"usertwo")
//console.log(user==1?"log in success":user==-1?"invalid username":"invalid password");
//obj.balanceEnquiry()
//console.log(obj.balanceEnquiry());
//obj.fundtransfer(1001,2000)
//obj.paymentHistory()
obj.creditTransactions()