import arg from "arg";
import passwordGenerator from ".";
// import inquirer from "inquirer";

const parseArguments = (rawArgs) => {
  const args = arg(
    {
      "--symbols": Boolean,
      "-s": "--symbols",
    },
    {
      argv: rawArgs.slice(2),
    }
  );

  return {
    includeSymbols: args["--symbols"] || false,
    length: Number(args._[0]) || 12,
  };
};

// const promptMissing = async (options) => {
//   const questions = [];

//   if (!options.length)
//     questions.push({
//       type: "number",
//       name: "length",
//       message: "Please enter length of your password: ",
//       default: 12,
//     });

//   const answers = await inquirer.prompt(questions);

//   return {
//     ...options,
//     length: answers.length,
//   };
// };

const cli = async (args) => {
  const options = parseArguments(args);
  // const options = await promptMissing(parseArguments(args));

  console.log(passwordGenerator(options));
};

export { cli };
