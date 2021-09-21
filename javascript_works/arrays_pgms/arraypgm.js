var expenses=[12000,13000,14000,15000,11000,25000]
var high=expenses[0];
for(let exp of expenses)
{
    if(high<exp)
    {
        high=exp;
    }
}
console.log(`highest expense= ${high}`);
var min=expenses[0];
for(let exp of expenses)
{
    if(min>exp)
    {
        min=exp;
    }
}
console.log(`highest expense= ${min}`);
for(exp of expenses)
{
    if(exp>15000)
    {
        console.log(exp);
    }
}

