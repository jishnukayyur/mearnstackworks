var products=[
    [100,"oreo",40,50],
    [101,"fifty-fifty",20,60],
    [102,"borbourne",40,0],
    [103,"treat",30,10],
    [104,"arrowroot",30,0],
    [105,"moms-magic",45,10],

]

//print prdct rs>30

    products.filter(item=>item[2]>30).forEach(name=>console.log(name))

//can i purchase item fore <10 rs

    // var is_available=products.some(item=>item[2]<30)
    // console.log(is_available);

//search item

    // var search_item=products.find(item=>item[1]=="treat")
    // console.log(search_item);

//highest price

    // var high=products.reduce((item1,item2)=>item1[2]>item2[2]?item1:item2)
    // console.log(high);

//low cost prdct

    // var low=products.reduce((item1,item2)=>item1[2]<item2[2]?item1:item2)
    // console.log(low);

//sort the prdcts stock wise

    // products.sort((item1,item2)=>item2[3]-item1[3])

//sort the prdcts price wise

    //products.sort((item1,item2)=>item2[2]-item1[2])

// print number of items in shop

    // console.log("number of items = ",products.length);

// print number of available items

    // let avl_stock=0;
    // for(let item of products)
    // {
    //     if(item[3]>0)
    //     {
    //         avl_stock++;
    //     }
    // }
    // console.log(avl_stock);

// print all product names only

    // var product_name=products.map(name=>name[1])
    // console.log(product_name);

//print all avilable prdct

    // var avl_items=products.filter(item=>item[3]>0)
    // console.log(avl_items);

//print out of stock item names

    // var out_stck=products.filter(item=>item[3]==0).map(item=>item[1])
    // console.log(out_stck);

//add offer 5rs for all product whose stock>50

    // var offer=products.filter(item=>item[3]>50).map(item=>[item[1],item[2]-5])
    // console.log(offer);



