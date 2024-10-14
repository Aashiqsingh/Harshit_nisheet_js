// console.log(document.getElementById("output").innerHTML)

// var output = document.getElementById("output")
// console.log(output.innerHTML);
// output.style.color = "red"
// output.style.backgroundColor = "green"


function changeTxt(){

    var output = document.getElementById("output")
    output.style.color = "red";
    output.innerHTML = "Royal technosoft pvt ltd."
}

function changeClr(){
    var anchor = document.getElementById("anchor")
    anchor.href = "https://netflix.com";
    anchor.innerHTML = "NetFlix";
    // anchor.setAttribute("target","_blank");
    anchor.target = "_blank";
}