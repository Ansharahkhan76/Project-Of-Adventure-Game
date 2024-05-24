// importing Packages
import inquirer from 'inquirer';
import chalk from 'chalk';
console.log(chalk.bold.red.italic(`\n\t\t Welcome To My Project "Adventure Game"\n\t\t\t ${chalk.italic.bold.green("---Ansharah Khan---")}`));
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
class Oppenent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
let player = await inquirer.prompt({
    type: "input",
    name: "name",
    message: "What is your name: "
});
let oppenent = await inquirer.prompt({
    type: "list",
    name: "select",
    message: "Select Your Oppenent",
    choices: ["Skeleton", "Assassin", "Zombie"]
});
let P1 = new Player(player.name);
let O1 = new Oppenent(oppenent.select);
if (oppenent.select === "Skeleton") {
    console.log(chalk.green.italic(`You've chosen ${chalk.blue(P1.name)} to battle against ${chalk.blue(O1.name)}!`));
    let ask = await inquirer.prompt({
        type: "list",
        name: "opt",
        message: "Select your Option",
        choices: ["Attack", "Drink Portion", "Run for save your life..."]
    });
    if (ask.opt === "Attack") {
        let num = Math.floor(Math.random() * 2);
        console.log(chalk.yellow.italic(num));
        if (num <= 0) {
            //console.log(chalk.red.italic(`${O1.name} has attacked you!`)
            if (P1.fuel <= 0) {
                console.log(chalk.italic.yellow(`You Lost! Better Luck Next Time`));
            }
            else if (O1.fuel < P1.fuel) {
                console.log(chalk.italic.yellow(`Yay Congratulations! ${P1.name} Killed ${O1.name}`));
            }
            console.log(chalk.italic.red(`${P1.name} Fuel is ${O1.fuel}`));
            console.log(chalk.italic.green(`${O1.name} Fuel is ${P1.fuel}`));
        }
        if (num > 0) {
            P1.fuelDecrease();
            P1.fuelDecrease();
            console.log(chalk.italic.red(`${P1.name} Fuel is ${P1.fuel}`));
            console.log(chalk.italic.green(`${O1.name} Fuel is ${O1.fuel}`));
        }
        else if (O1.fuel < P1.fuel) {
            console.log(chalk.italic.yellow(`Yay Congratulations! ${P1.name} Killed ${O1.name}`));
        }
    }
    if (ask.opt === "Drink Portion") {
        console.log(chalk.yellow.italic(`Your Drink Health Portion your Fuel is ${chalk.italic.blue(P1.fuel)}`));
    }
    if (ask.opt === "Run for save your life...") {
        console.log(chalk.red.italic(`Congratulation You Win!`));
    }
}
// Assassin
if (oppenent.select === "Assassin") {
    console.log(chalk.green.italic(`You've chosen ${chalk.blue(P1.name)} to battle against ${chalk.blue(O1.name)}!`));
    let ask = await inquirer.prompt({
        type: "list",
        name: "opt",
        message: "Select your Option",
        choices: ["Attack", "Drink Portion", "Run for save your life..."]
    });
    if (ask.opt === "Attack") {
        let num = Math.floor(Math.random() * 2);
        console.log(chalk.yellow.italic(num));
        if (num <= 0) {
            //console.log(chalk.red.italic(`${O1.name} has attacked you!`)
            if (P1.fuel <= 0) {
                console.log(chalk.italic.yellow(`You Lost! Better Luck Next Time`));
            }
            else if (O1.fuel < P1.fuel) {
                console.log(chalk.italic.yellow(`Yay Congratulations! ${P1.name} Killed ${O1.name}`));
            }
            console.log(chalk.italic.red(`${P1.name} Fuel is ${O1.fuel}`));
            console.log(chalk.italic.green(`${O1.name} Fuel is ${P1.fuel}`));
        }
        if (num > 0) {
            P1.fuelDecrease();
            P1.fuelDecrease();
            console.log(chalk.italic.red(`${P1.name} Fuel is ${P1.fuel}`));
            console.log(chalk.italic.green(`${O1.name} Fuel is ${O1.fuel}`));
        }
        else if (O1.fuel < P1.fuel) {
            console.log(chalk.italic.yellow(`Yay Congratulations! ${P1.name} Killed ${O1.name}`));
        }
    }
    if (ask.opt === "Drink Portion") {
        console.log(chalk.yellow.italic(`Your Drink Health Portion your Fuel is ${chalk.italic.blue(P1.fuel)}`));
    }
    if (ask.opt === "Run for save your life...") {
        console.log(chalk.red.italic(`Congratulation You Win!`));
    }
}
// Zombie
if (oppenent.select === "Zombie") {
    console.log(chalk.green.italic(`You've chosen ${chalk.blue(P1.name)} to battle against ${chalk.blue(O1.name)}!`));
    let ask = await inquirer.prompt({
        type: "list",
        name: "opt",
        message: "Select your Option",
        choices: ["Attack", "Drink Portion", "Run for save your life..."]
    });
    if (ask.opt === "Attack") {
        let num = Math.floor(Math.random() * 2);
        console.log(chalk.yellow.italic(num));
        if (num <= 0) {
            //console.log(chalk.red.italic(`${O1.name} has attacked you!`)
            if (P1.fuel <= 0) {
                console.log(chalk.italic.yellow(`You Lost! Better Luck Next Time`));
            }
            else if (O1.fuel < P1.fuel) {
                console.log(chalk.italic.yellow(`Yay Congratulations! ${P1.name} Killed ${O1.name}`));
            }
            console.log(chalk.italic.red(`${P1.name} Fuel is ${O1.fuel}`));
            console.log(chalk.italic.green(`${O1.name} Fuel is ${P1.fuel}`));
        }
        if (num > 0) {
            P1.fuelDecrease();
            P1.fuelDecrease();
            console.log(chalk.italic.red(`${P1.name} Fuel is ${P1.fuel}`));
            console.log(chalk.italic.green(`${O1.name} Fuel is ${O1.fuel}`));
        }
        else if (O1.fuel < P1.fuel) {
            console.log(chalk.italic.yellow(`Yay Congratulations! ${P1.name} Killed ${O1.name}`));
        }
    }
    if (ask.opt === "Drink Portion") {
        console.log(chalk.yellow.italic(`Your Drink Health Portion your Fuel is ${chalk.italic.blue(P1.fuel)}`));
    }
    if (ask.opt === "Run for save your life...") {
        console.log(chalk.red.italic(`Congratulation You Win!`));
    }
}
