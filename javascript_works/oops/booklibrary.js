class library{
    Books = {
        halfgirlfriend:{book_name:"halfgirlfriend",author:"chethan bagath",price:300,avl_copies:300,copies_sold:200},
        randamoozham:{book_name:"randamoozham",author:"mt",price:350,avl_copies:250,copies_sold:200},
        the_alchemist:{book_name:"the alchemist",author:"paulo",price:400,avl_copies:250,copies_sold:200},

    }
    findBook(book_name)
    {
        this.book_name=book_name
        for(let book in this.Books)
        {
            if(book[book_name]==this.book_name)
            {
                console.log(book[0]);
            }
        }
        
    }
    filterBooks()
    {
        
    }

}
var book=new library()
book.findBook("randamoozham")
book.filterBooks()