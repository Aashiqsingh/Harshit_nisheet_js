var user = ["ram","user","rahul","sameer","purvesh","nisheeth","harshit"];

// var flag = true;

// for(let i=0;i<user.length;i++){

//     if(user[i].length > 6){
//         flag = false;
//         break;
//     }
    
// }

// console.log(flag);


// user[i]

// var x = user.some((u)=>{
//     return u.length > 7;
// })
// console.log(x);


var x = user.some((u)=> u.startsWith("z"))
console.log(x);


