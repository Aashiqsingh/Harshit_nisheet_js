const wordHandler = (option)=>{
    return option.name + " file with size "+option.size
}

const pngHandler = (option)=>{
    return option.name + " file with size "+option.size
}

const jpgHandler = (option)=>{
    return option.name + " file with size "+option.size
}

// const Handler = (file,cb)=>{

//     return cb({name:file,size:"1000kb"})
// }

const Handler = (file,cb)=> cb({name:file,size:"10000kb"})

var File = "abc.png"
var flag;

if(File.endsWith(".word")){
    flag = Handler(File,wordHandler)
}
else if(File.endsWith(".png")){
    flag = Handler(File,pngHandler)
}
else if(File.endsWith(".jpg")){
    flag = Handler(File,jpgHandler)
}
else{
    console.log("Unsupported file type")
}

console.log(flag);


// alert("Display")
confirm("Are you single")