const submitHandler = (event) =>{
    event.preventDefault();

    var name = document.getElementById("name")
    // console.log(name.value);

    var gender = document.getElementsByName("gender")
    var gen = ""

    if(gender[0].checked == true){

        gen = "Male";
    }
    else if(gender[1].checked == true){
        gen = "Female";
    }
    else if(gender[2].checked == true){
        gen = "Other";
    }

    var age = document.getElementById("age")

    console.log("Name = ",name.value);
    console.log("Gender = ",gen);
    console.log("Age = ",age.value);
    

    if(gen == "Male"){
        if(age.value > 18){
            console.log("You are eligible for vote..");
            
        }
        else{
            console.log("You are not eligible for vote..");
        }
    }
    else if(gen == "Female"){
        if(age.value > 21){
            console.log("You are eligible for vote..");
        }
        else{
            console.log("You are not eligible for vote..");
        }
    }
    else{
        if(age.value > 25){
            console.log("You are eligible for vote..");
        }
        else{
            console.log("You are not eligible for vote..");
        }
    }



    // console.log(gen);
    
    
}


function txt(){
    // alert("Hello World!");

    var name = document.getElementById("name")
    // console.log(name.value);
    if(name.value.length < 4){
        alert("Please fill properly..")
    }
}