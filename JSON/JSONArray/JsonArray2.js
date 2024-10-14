var company = [
    {
        name:"Google",
        employees:[
            {
                id:1,
                name:"rahul",
                gender:"Male",
                age:"30",
                salary:45000,
                isMarried:true,
                department:"IT",
                child:2
            },
            {
                id:2,
                name:"aman",
                gender:"Male",
                age:"35",
                salary:50000,
                isMarried:false,
                department:"Finance",
                child:0
            },
            {
                id:3,
                name:"priya",
                gender:"female",
                age:"26",
                salary:55000,
                isMarried:false,
                department:"IT",
                child:0
            },
            {
                id:4,
                name:"Shristi",
                gender:"female",
                age:"30",
                salary:45900,
                isMarried:true,
                department:"HR",
                child:1
            }
        ]
    },
    {
        name:"Tata",
        employees:[
            {
                id:11,
                name:"tejas",
                gender:"Male",
                age:"40",
                salary:65000,
                isMarried:true,
                department:"Devloper",
                child:0
            },
            {
                id:12,
                name:"priya",
                gender:"female",
                age:"28",
                salary:55000,
                isMarried:true,
                department:"Finance",
                child:0
            },
            {
                id:13,
                name:"manoj",
                gender:"Male",
                age:"35",
                salary:60000,
                isMarried:true,
                department:"HR",
                child:1
            },
            {
                id:14,
                name:"payal",
                gender:"female",
                age:"45",
                salary:70000,
                isMarried:true,
                department:"Mechanical",
                child:3
            }
        ]
    }
]



// var sum = 0;
// var x = company.map((comp)=> comp.employees.reduce((sum,emp)=> sum + emp.salary,0)).reduce((sum,emp)=> sum+emp,0)
// console.log(x);





// var x = company.find((comp)=>{
//     return comp.name === "Tata"
// }).employees.filter((emp)=>{
//     return emp.child > 0
// })
// console.log(x);





// var x = company.filter((comp)=> comp.name === "Google").map((emp)=> emp.employees.reduce((sum,emp)=> sum + emp.salary,0))
// console.log(x);

// var x = company.find((comp)=> comp.name === "Google")
// console.log(x);



// var x = company.find((comp)=> comp.name === "Google").employees.reduce((sum,emp)=> sum+emp.salary,0)
// console.log(x);



// var x = company.map((comp)=> comp.employees.filter((emp)=> emp.gender === "female").map((emp)=> emp.name))
// console.log(x);



// var x = company.find((comp)=> comp.name === "Google").employees.filter((emp)=> emp.salary >= 50000)
// console.log(x);








// var x = company.find((comp)=> comp.name === "Google").employees.filter((emp)=> emp.salary >= 50000)
// console.log(x);




// var x = company.find((comp)=> comp.name === "Google").employees
// console.log(x);






// var x = company.map((comp)=> {
//     return comp.employees
// })
// console.log(x);




// console.log(company);


// for(let i=0;i<company.length;i++){
//     console.log(company[i].name);
    
// }

// company.forEach((comp)=>{
//     console.log(comp.name);
    
// })
