var body = document.getElementById("body");
function red(){
    body.style.backgroundColor = "red";


    setTimeout(()=>{
        green()
    },3000)

}

function green(){
    body.style.backgroundColor = "green";


    setTimeout(()=>{
        pink()
    },2000)
}
var x
function pink(){
    body.style.backgroundColor = "pink";

     setTimeout(yellow,4000);
}

function yellow(){
    body.style.backgroundColor = "yellow";

    setTimeout(red,3000)
    
}
