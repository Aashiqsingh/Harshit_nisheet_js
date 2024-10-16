function submitHandler(e){

    e.preventDefault(); // prevent form from reloading the page
    // alert("Form submitted...")


    var name = document.getElementById("name");
    // console.log("Name = ",name.value);

    var email = document.getElementById("email");
    // console.log("Email = ",email.value);
    var nameErr = document.getElementById("nameErr");
    var emailErr = document.getElementById("emailErr");

    if(name.value == ""){
        nameErr.innerHTML = "Name is required.."
        
    }
    else if(name.value.length < 3){
        nameErr.innerHTML = "name must be at least 3 characters.."
    }

    if(email.value == ""){
        emailErr.innerHTML = "Email is required.."
    }

    // var user = {
    //     name:name.value,
    //     email:email.value
    // }
    
    // console.log(user);
    
    console.log("form submitted...");
    
}