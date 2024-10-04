function science(name,per){

    return name + " Your addmisiion confirm in science stream with per "+per
}

function commerce(name,per){
    console.log(name+" your addmisiion confirm in commerce stream with per "+per);
    
}

function art(name,per){
    console.log(name+" your addmisiion confirm in art stream with per "+per);
    
}

var percentage = 92;
var FullName = "Rahul";


if(percentage > 90){
    var x = science(FullName,percentage)
    console.log(x);
    
}
else if(percentage > 70){
    commerce(FullName,percentage)
}
else if(percentage > 50){
    art(FullName,percentage)
}
else{
    console.log(FullName+" your addmisiion is not confirmed");
}