import { Command } from "commander";
import inquirer from "inquirer";
import fs from "fs";
const program = new Command();

program
  .name("sayed-cli-helper")
  .description("cli to make your coding easier")
  .version("1.0.0");

program
  .command("add")
  .alias("a")
  .description("add a project")
  .action(() => {
    inquirer
      .prompt([
        {
          type: "input",
          name: "project",
          message: "name of project",
        },
        {
          type: "number",
          name: "fee",
          message: "project fee",
        },
      ])
      .then((answers) => {
        fs.writeFile(
          "./projects.json",
          JSON.stringify(answers),
          "utf-8",
          () => {
            console.log("====================================");
            console.log("added successfully");
            console.log("====================================");
          }
        );
      });
  });

program
  .command("list")
  .alias("l")
  .description("list all projects")
  .action(() => {
    console.log("====================================");
    console.log("all projects");
    console.log("====================================");
  });
program.parse(process.argv);
