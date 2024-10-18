const submitHandler = (event)=>{
    event.preventDefault();

    var name = document.getElementById("name").value
    var phone = document.getElementById("phone").value
    var email = document.getElementById("email").value


    // console.log(name.value);
    // console.log(phone.value);

    var phPatter = /^[6-9]{1}[0-9]{9}$/
    var namePatter = /^[A-Z]{1}[a-z]+$/

    var emailPatter = /^[a-z0-9]+[@]{1}[a-z.]+[a-z]+\.[a-z]+$/;

    if(email.match(emailPatter)){
        alert("Email is right")
    }
    else{
        alert("Email is wrong")
    }



    // var nameErr = document.getElementById("nameErr");
    // var phoneErr = document.getElementById("phoneErr");

    // if(name.length == ""){
    //     nameErr.innerHTML = "Name is required"
    // }
    // else if(!(name.match(namePatter))){
    //     nameErr.innerHTML = "Invalid name"
    // }
    
    
}