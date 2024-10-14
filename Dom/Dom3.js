// var a = 1;



var colors = ["red","green","blue","yellow","black","purple","grey"]
function txt(){

    // console.log("hello world..");
    // console.log(a++);
    
    var randomIndex = Math.floor(Math.random() * colors.length);

    console.log(randomIndex);

    var mydiv = document.getElementById("mydiv");
    mydiv.style.backgroundColor = colors[randomIndex]
    


    
}