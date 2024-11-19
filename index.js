const { Command } = require("commander");
const program = new Command();
program
  .name("sayed-cli-helper")
  .description("cli to make your coding easier")
  .version("1.0.0");

program
  .command("add")
  .alias("a")
  .description("add a project")
  .argument("<title>", "add project title")
  .option("--price <price>", "add project price")
  .action((param, opt) => {
    console.log(param);
    console.log(opt);
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
