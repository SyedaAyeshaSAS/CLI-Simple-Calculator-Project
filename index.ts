import inquirer from "inquirer";
let answers = await inquirer.prompt([
    { message:"Enter Your First Number",type:"number" , name:"firstNumber"},
    { message:"Enter Your Second Number",type:"number" , name:"secondtNumber"},
    { 
        message:"Select One Operator To Perform Operation",
        type:"list" ,
        name:"Operator",
        choices:["Addition","Subtraction","Multiplication","Division"],
    },
])
if(answers.Operator === "Addition"){
    console.log(answers.firstNumber + answers.secondtNumber)
}
else if(answers.Operator === "Subtraction"){
    console.log(answers.firstNumber - answers.secondtNumber)
}
else if(answers.Operator === "Multiplication"){
    console.log(answers.firstNumber * answers.secondtNumber)
}
else if(answers.Operator === "Division"){
    console.log(answers.firstNumber / answers.secondtNumber)
}
else{
    console.log("invalid input")
};