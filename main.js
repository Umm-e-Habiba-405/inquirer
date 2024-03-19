import chalk from "chalk";
import inquirer from "inquirer";
let answers = await inquirer.prompt([{
        name: "age",
        type: "number",
        message: "Enter Your age:"
    }
]);
console.log(chalk.green("InshAllah, in " + (60 - answers.age) + " Years you will be 60 years old "));
