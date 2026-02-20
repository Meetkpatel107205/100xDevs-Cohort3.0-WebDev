// Also tell the user if they are legal to vote or not.
const users = [{
    name: "Gaurav",
    age: 12
},{
    name: "Meet",
    age: 20
}];

function isVote(users)
{
    for(let i=0; i < users.length; i++)
    {
        if(users[i].age>=18)
        {
            console.log(`${users[i].name} is eligible for voting`);
        }
        else
        {
            console.log(`${users[i].name} is not eligible for voting`);
        }
    }
}

isVote(users);