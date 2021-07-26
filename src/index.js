import { customAlphabet } from "nanoid";
import help from "./help";

const passwordGenerator = (options = { includeSymbol: false, length: 12 }) => {
  try {
    const { includeSymbols, length } = options;

    const alphabet = `0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz${
      includeSymbols ? "!@#$%^&?" : ""
    }`;

    const generator = customAlphabet(alphabet, length);

    console.log(generator());
  } catch (error) {
    console.error(
      "Error generating password, please check your parameters and try again."
    );

    help();
  }
};

export default passwordGenerator;
