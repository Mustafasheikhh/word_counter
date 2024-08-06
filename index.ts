#! /usr/bin/env node
import inquirer from "inquirer";

const answers:{
    sentence:string
} = await inquirer.prompt([{
    name:"sentence",
    type:"input",
    message:"Enter your sentence to word count:"
}]);

const word = answers.sentence.trim().split(" ")
console.log(word);  
console.log(`Your sentence word count is ${word.length}`);    