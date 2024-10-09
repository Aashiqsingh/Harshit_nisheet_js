var students = [
    {
        id:1,
        name:"rahul",
        age:"19",
        email:"rahul@gmail.com",
        mobile:8974875844,
    },
    {
        id:2,
        name:"prasanna",
        age:"20",
        email:"prasanna@gmail.com",
        mobile:8974875845,
    },
    {
        id:3,
        name:"ramesh",
        age:"21",
        email:"ramesh@gmail.com",
        mobile:4763874743,
    },
    {
        id:4,
        name:"suresh",
        age:"22",
        email:"suresh@gmail.com",
        mobile:8974875847,
    },
    {
        id:5,
        name:"roshan",
        age:"24",
        email:"roshan@gmail.com",
        mobile:7834587495,
    }
]



students = students.map((stu)=>{
    return stu.name.toUpperCase()
})

console.log(students);




// var x = students.filter((stu)=> stu.age > 20).map((stu)=> stu.name)
// console.log(x);


// var x = students.filter((stu)=>{
//     return stu.age > 20
// }).map((stu)=>{
//     return stu.name;
// })


// console.log(x);





// students.forEach((stu)=>{
//     console.log(stu.name);
    
// })

// var x = students.map((st)=>{
//     return st.name;
// })

// console.log(x);







// console.log(students);

// console.log(students[0]);
// console.log(students[0].name);




