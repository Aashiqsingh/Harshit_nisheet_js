function funC(){

    var txt = document.getElementById("txt")
    // console.log(txt.value);

    var output = document.getElementById("output");

    if(txt.value.length < 4){
        // alert("Name shoulb be at least 4 characters..")
        // console.log("Name shoulb be at least 4 characters..");
        
        output.innerHTML = "*Name shoulb be at least 4 characters.."
        output.style.color = "red"
        txt.style.outline = "2px solid red";
    }
    else{
        output.innerHTML = ""
        txt.style.outline = "2px solid green"
    }
    
}