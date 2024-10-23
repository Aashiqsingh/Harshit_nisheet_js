var images = ["dog1.avif","dog2.webp","dog3.jpeg","dog4.webp","dog5.jpg"];

var currentImage = 0;


var prev = document.getElementById("prev");
prev.addEventListener("click",()=>{

                        // (0 - 1 + 5)%5
    currentImage = (currentImage - 1 + images.length)% images.length; 

    console.log(currentImage);
    
    var image = document.getElementById("image");

    image.src = "../Images/" + images[currentImage]
})

var next = document.getElementById("next");
next.addEventListener("click",()=>{
                        // (1 + 1 )%5
    currentImage = (currentImage + 1)% images.length;
    image.src = "../Images/" + images[currentImage]
})