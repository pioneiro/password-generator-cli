import { customAlphabet } from "nanoid";

const passwordGenerator = (options = { includeSymbol: false, length: 12 }) => {
  const { includeSymbols, length } = options;

  const alphabet = `0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz${
    includeSymbols ? "!@#$%^&?" : ""
  }`;

  const generator = customAlphabet(alphabet, length);

  return generator();
};

export default passwordGenerator;
