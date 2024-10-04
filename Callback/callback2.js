function science (name , per){

    return name + " admision confirm in science sctream with per "+per

}
function commerce(name , per){
    return name + " admision confirm in commerce sctream with per "+per
}

function art(name , per){
    return name + " admision confirm in art sctream with per "+per
}


// cb -- callback 
function addmission(fname,percentage,cb){
    var x = cb(fname,percentage)
    console.log(x);
    
}

var per = 74;

if(per > 90){
    addmission("rahul",per,science)
}
else if(per > 70){
    addmission("rohan",per,commerce)
}
else if(per > 50){
    addmission("ram",per,art)
}
else{
    console.log("sorry, you are not eligible for admission")
}