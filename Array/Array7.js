var language = ["hindi","english","marathi","gujarati","french","bengali","urdu"];



const deleteLang = (langName)=> language.filter((lang)=> lang != langName)

console.log(deleteLang("french"));




// var x = deleteLang("french")

// console.log(x);



// const deleteLang = (langName)=>{

//     return language.filter((lang) => lang != langName)
// }

// var x = deleteLang("marathi")
// console.log(x); 





// const deleteLang = (langName)=>{


//     return language.filter((lang)=>{
//         return lang!== langName;
//     })
// }
// var x = deleteLang("marathi");
// console.log(x);




// const deleteLang = (langName)=>{


//     var x = language.filter((lang)=>{
//         return lang!== langName;
//     })

//     return x;

// }


// var deleteData = "gujarati"


// var x = deleteLang(deleteData)
// console.log(x);
