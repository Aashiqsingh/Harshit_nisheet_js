var user = ["ram","usera","rahul","sameer","purvaesh","nisheeth","harsahit"];

// var flag = false;

// for(let i=0;i<user.length;i++){

//     if(user[i].length < 9){

//         flag = true;
//         break;
//     }
// }

// console.log(flag);

// var x = user.every((u)=>{
//     return u.length > 3;
// })
// console.log(x);

var x = user.every((u)=> u.includes("a"))
console.log(x);


