
function demo(){
    console.log("Demo function called...");
    
}



function order(x){

    x()


    console.log("message.....",x);
    
}

// order(10)
// order("ram")
// order(true)
// order({name:"ram",age:1000})

order(demo)
