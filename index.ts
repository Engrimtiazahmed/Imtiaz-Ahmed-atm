#! /usr/bin/env node
//atm machine
console.log("\n Dear Custmer Wel come to Imtiaz Generated ATM \n");

import inquirer from "inquirer";


let myBalance = 20000;
let myPin = 3321;


let pinAnswer = await inquirer.prompt(
    {
        message: "Enter Your Pin Code:",
        name: "pin",
        type: "number",
    }
);
if (pinAnswer.pin === myPin) {
  console.log("Correct Pin code!!! \n");
  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      message: "select on of the option: \n",
      type: "list",
      choices: ["fast cash", "with draw", "check Balance"],
    },
  ]);

  if (operationAns.operation === "fast cash") {
    let fastAmountAns = await inquirer.prompt([
      {
        message: "select your amount: \n",
        name: "fastAmount",
        type: "list",
        choices: ["1000", "2000", "3000", "5000", "10000"],
      },
    ]);

    myBalance -= fastAmountAns.fastAmount;
    console.log("Your remaining balance is: \n" + myBalance);
  }

  if (operationAns.operation === "with draw") {
    let amountAns = await inquirer.prompt([
      {
        message: "Enter your amount: \n",
        name: "amount",
        type: "number",
      },
    ]);
    if (amountAns.amount > myBalance) {
      console.log("\n your current balance is Insufficient \n");
    } else {
      myBalance -= amountAns.amount;
      console.log(`\n Your remaining balance is: ${myBalance} \n` );
    }
  } else if (operationAns.operation === "check Balance") {
    console.log(`\n Your Current Balance is : ${myBalance} \n`);
  }
} else {
  console.log("Incorrect Pin code !!!! \n");
}


console.log("Thank you from Imtiaz Genearted ATM \n");




