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
        if (fs.existsSync("./projects.json")) {
          let list = fs.readFile("./projects.json", "utf-8", (err, data) => {
            if (err) {
              console.log(err);
              process.exit();
            } else {
              let list = JSON.parse(data);
              list.push(answers);
              fs.writeFile(
                "./projects.json",
                JSON.stringify(list),
                "utf-8",
                () => {
                  console.log("added successfully");
                }
              );
            }
          });
        } else {
          fs.writeFile(
            "./projects.json",
            JSON.stringify([answers]),
            "utf-8",
            () => {
              console.log("added successfully");
            }
          );
        }
      });
  });

program
  .command("list")
  .alias("l")
  .description("list all projects")
  .action(() => {
    if (fs.existsSync("./projects.json")) {
      fs.readFile("./projects.json", "utf-8", (err, content) => {
        if (err) {
          console.log(err);
          process.exit();
        } else {
          console.table(JSON.parse(content));
        }
      });
    }
  });
program.parse(process.argv);
