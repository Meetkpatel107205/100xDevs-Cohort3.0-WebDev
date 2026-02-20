// Write a function that takes a new object as input which has name , age  and gender and greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21)
function greet(user){
    if(user.gender == "Male")
    {
        console.log("Hi Mr. " + user.name + " your age is " + user.age);
    }
    else
    {
        console.log("Hi Mrs. " + user.name + " your age is " + user.age);
    }
}

let user = {
    name: "Meet",
    age: 20,
    gender: "Male",
};

greet(user);