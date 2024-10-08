const { Command } = require('commander');
import data from "./package.json" with { type: "json" };

// Create the main command
const program = new Command();

// Define the main command
program
  .name(data.name)
  .description(data.description)
  .version(data.version);

// Subcommand for greeting
program
  .command('greet <name>')
  .description('Greet a user')
  .action((name) => {
    console.log(`Hello, ${name}!`);
  });

// Subcommand for farewell
program
  .command('farewell <name>')
  .description('Say farewell to a user')
  .action((name) => {
    console.log(`Goodbye, ${name}!`);
  });

// Parse the command line arguments
program.parse(process.argv);

