var employees = [
    {
        id:1,
        name:"rahul",
        age:30,
        designation: "devloper",
        salary:46789,
        gender: "male",
        isMarried: true,
        child : 2
    },
    {
        id:2,
        name:"ramesh",
        age:25,
        designation: "manager",
        salary:65432,
        gender: "male",
        isMarried: false,
        child : 0
    },
    {
        id:3,
        name:"suresh",
        age:35,
        designation: "HR",
        salary:70000,
        gender: "male",
        isMarried: true,
        child : 1
    },
    {
        id:4,
        name:"priya",
        age:23,
        designation: "junior-devloper",
        salary:32000,
        gender: "female",
        isMarried: false,
        child : 0
    },
    {
        id:5,
        name:"divya",
        age:29,
        designation: "HR",
        salary:75000,
        gender: "female",
        isMarried: true,
        child : 2
    }
]

var x = employees.filter((emp)=>emp.designation === "HR").map((emp)=>{
    // return {
    //     id:emp.id,
    //     name:emp.name,
    //     age:emp.age,
    //     designation:emp.designation,
    //     salary:emp.salary + 5000,
    //     gender:emp.gender,
    // }
    return emp.salary + 5000
})
console.log(x);



// var x = employees.filter((emp)=> emp.gender === "male" && emp.child < 1).map((emp)=>emp.name)
// console.log(x);

// var sum = 0;
// var x = employees.filter((emp)=> emp.id == 3 || emp.id ==4).forEach((emp)=> sum += emp.salary)
// console.log(sum);

// var x = employees.filter((emp)=> emp.id == 3 || emp.id ==4).reduce((sum,emp)=> sum+emp.salary,0)
// console.log(x);



// var x = employees.reduce((sum,emp)=> sum+emp.salary,0);
// console.log(x);

// reduce : it will return only one value

// var x = employees.reduce((sum,emp)=>{
//     return sum + emp.salary
// },0)

// console.log(x);






// var sum = 0;
// employees.forEach((emp)=>{
    
//     sum = sum + emp.salary
// })
// console.log(sum);





// var x = employees.filter((emp)=> emp.child > 0)
// console.log(x);



// var a= employees.filter((employee)=>{
//     return employee.child>0
//   })
//   console.log(a);
  

// var x = employees.filter((emp)=> emp.child > 0)
// console.log(x);

// var x = employees.filter((emp)=> emp.designation === "HR" && emp.gender === "female")
// console.log(x);

// employees.forEach((emp)=>{
//     console.log(emp.name);
    
// })