import arg from "arg";
import help from "./help";
import passwordGenerator from ".";
// import inquirer from "inquirer";

const parseArguments = (rawArgs) => {
  let returnObj = new Object();

  try {
    const args = arg(
      {
        "--help": Boolean,
        "--symbols": Boolean,
        "-s": "--symbols",
        "-h": "--help",
      },
      {
        argv: rawArgs.slice(2),
      }
    );

    returnObj = args["--help"]
      ? {
          help: true,
        }
      : {
          includeSymbols: args["--symbols"] || false,
          length: Number(args._[0]) || 12,
        };
  } catch (error) {
    returnObj = {
      error: "Unexpected arguments encountered",
    };
  }

  return returnObj;
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

  if (options.error || options.help) help(options.error);
  else console.log(passwordGenerator(options));
};

export { cli };
