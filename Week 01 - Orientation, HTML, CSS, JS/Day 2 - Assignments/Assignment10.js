// Create a function that takes an array of objects as input, and returns the users whose age > 18 and are male

const users=[{
    name:"Gaurav",
    age:22,
    gender:"male"
},{
    name:"Ananya",
    age:21,
    gender:"female"
},{
    name:"Modi Ji",
    age:17,
    gender:"male"
},{
    name:"Meet",
    age:20,
    gender:"male"
}];

// Method - 1 :-

function maleAndAbove18(users){
    return users.age >= 18 && users.gender=="male"
}

function filterMaleAndAbove18(users){
    let arr = users.filter(maleAndAbove18);
    return arr;
}

// Method - 2 :-

// function maleAndAbove18(users)
// {
    // const filteredUsers = [];
    
    // for(let i = 0; i < users.length; i++)
    // {
    //   if(users[i].age >= 18 && users[i].geneder === "male")
    //   {
    //     filteredUsers.push(users[i]);
    //   }
    // }

//   return filteredUsers;
// }

// Method - 3 :-

// function maleAndAbove18(users)
// {
//     const filteredUsers = users.filter((user) => user.age >= 18 && user.geneder === "male")

//     return filteredUsers;
// }

console.log(filterMaleAndAbove18(users));