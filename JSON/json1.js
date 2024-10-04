// var student = {
//     name: "Pallavi maam",
//     age:24,
//     email:"pallavi@gmail."
// }

// console.log(student);
// console.log(student.name);
// console.log(student.email);

// console.log(typeof student);


var product =  {
    name:"Iphone",
    price:97000,
    isStock:true,
    color:["red","green","white","skyblue"],
    details:{
        ram:"2TB",
        storage:"64GB",
        camera:"12MP"
    }
}

console.log(product);
console.log(product.price);

console.log(product.details);
console.log(product.details.storage);

console.log(product.color);
console.log(product.color[1]);
console.log(product.color[2]);


for(let i=0;i<product.color.length;i++){
    console.log(product.color[i].toUpperCase());
    
}






