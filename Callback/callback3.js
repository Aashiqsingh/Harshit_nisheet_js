const wordHandler = (option)=>{
    return option.name + " file with size "+option.size
}

const pngHandler = (option)=>{
    return option.name + " file with size "+option.size
}

const jpgHandler = (option)=>{
    return option.name + " file with size "+option.size
}

const Handler = (file,cb)=>{

    var x = cb({name:file,size:"1000kb"})
    console.log(x)
}

var File = "abc.jpg"

if(File.endsWith(".word")){
    Handler(File,wordHandler)
}
else if(File.endsWith(".png")){
    Handler(File,pngHandler)
}
else if(File.endsWith(".jpg")){
    Handler(File,jpgHandler)
}
else{
    console.log("Unsupported file type")
}