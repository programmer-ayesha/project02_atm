import inquirer from "inquirer";
async function startATMConversation() {
    console.log("Welcom To Meezan Bank");
    const answer = await inquirer.prompt([
        {
            type: "input",
            name: "userid",
            message: "kindly enter your user id"
        },
        {
            type: "number",
            name: "userpassword",
            message: "enter your password"
        },
        {
            type: "list",
            name: "accounttype",
            choices: ["current account", "saving account"],
            message: "select your acount"
        },
        {
            type: "list",
            name: "transactiontype",
            choices: ["FastCash WithDraw", "Normal WithDraw"],
            message: "select your  transaction type"
        },
        {
            type: "list",
            name: "amount",
            choices: [5000, 15000, 20000],
            message: "select your amount withdraw amount ($)",
            when(answer) {
                return answer.transactiontype === "FastCash WithDraw";
            },
        },
        {
            type: "number",
            name: "amount",
            message: "enter your withdraw amount",
            when(answer) {
                return answer.transactiontype === "Normal WithDraw";
            }
        }
    ]);
    if (answer.userid && answer.userpassword) {
        console.log("processing your request ...");
        const balance = Math.floor(Math.random() * 100000000);
        console.log("your current balance is :", balance.toLocaleString());
        const enteramount = answer.amount;
        if (balance >= enteramount) {
            let remainingbalace = balance - enteramount;
            console.log("transaction successfull you'r remaining balance is", remainingbalace.toLocaleString());
        }
        else {
            console.log("insuffincient, please try again with lower amount");
        }
        ;
    }
    ;
}
;
startATMConversation();
