#! /usr/bin/env node
//atm machine
console.log("Dear Custmer Wel come to Imtiaz Generated ATM");
import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 3321;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "please insert your Pin Code",
        type: "number",
    },
]);
if (pinAnswer.pin === myPin) {
    console.log("correct pin number!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["fast cash", "withdraw", "check balance"],
        },
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number",
            },
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Insufficient funds. Please try a smaller amount.");
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`Your remaining balance is ${myBalance}`);
        }
    }
    else if (operationAns.operation === "fast cash") {
        let fastCashAns = await inquirer.prompt([
            {
                name: "fastCash",
                message: "please select an operation",
                type: "list",
                choices: ["1000", "2000", "3000", "5000", "10000"],
            },
        ]);
        let selectedAmount = parseInt(fastCashAns.fastCash);
        if (selectedAmount > myBalance) {
            console.log("insuficinet balance. Please try a smaller amount.");
        }
        else {
            myBalance -= selectedAmount;
            console.log(`Your remaining balance is ${myBalance}`);
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log(`your account balance is ${myBalance}`);
    }
}
else {
    console.log("Incorrect Pin Code");
}
console.log("Thank you from Imtiaz Genearted ATM");
