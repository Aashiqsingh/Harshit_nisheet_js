var language = ["hindi","english","marathi","gujarati","french","bengali","urdu"];



var x = language.filter((lang)=>{
    return lang != "french"
})

console.log(x);

console.log(language);







// var fname = "bengali";


// var x = language.filter((lang)=> lang != fname)
// console.log(x);











// filter : it will return new Array with modified data 

// for(let i=0;i<language.length;i++){

//     if(language[i].length > 6)
//     {
//         console.log(language[i]);
        
//     }
// }

// var deleteData = language.filter((lang)=>{
//     return lang != "marathi"
// })

// console.log(deleteData);






// var filterData = language.filter((lang)=> lang.includes("jar"))
// console.log(filterData);





// var x = language.map((lang)=>{
//     return lang.length > 6;
// })
// console.log(x);



// var x = language.filter((lang)=>{
//     return lang.length > 6;
// })
// console.log(x);


// var x = language.filter((lang)=>{


//     return lang.startsWith('m')
// })
// console.log(x.join(" "));
