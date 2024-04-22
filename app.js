#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1,
    EUR: 0.91,
    PKR: 280,
    GBP: 0.76,
    INR: 74.57,
    KWD: 3.26,
    IRR: 42075.00,
    TRY: 32,
    OMR: 2.60,
};
let User_answer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter From currency",
        type: "list",
        choices: ["USD", "EUR", "PKR", "GBP", "INR", "KWD", "IRR", "TRY", "OMR"],
    },
    {
        name: "to",
        message: "Enter To currency",
        type: "list",
        choices: ["USD", "EUR", "PKR", "GBP", "INR", "KWD", "IRR", "TRY", "OMR"],
    },
    {
        name: "Amount",
        message: "Enter From currency",
        type: "number",
    },
]);
let fromAmount = currency[User_answer.from];
let toAmount = currency[User_answer.to];
let amount = User_answer.Amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
