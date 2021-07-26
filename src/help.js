const args = [
  {
    command: "<length>",
    name: "Length",
    description: "Length of the password to generate [optional] [default: 12]",
  },
  {
    command: "-s, --symbols",
    name: "Symbols",
    description: "Include symbols in the password [optional] [default: False]",
  },
  {
    command: "-h, --help",
    name: "Help",
    description: "Display help",
  },
];

const help = (customMessage) => {
  if (customMessage) console.error(`\nError: ${customMessage}`);

  console.log(`\nUsage: genpass <length> [options]\n`);

  args.forEach((e) =>
    console.log(`${e.command}\t\t${e.name}\t\t${e.description}`)
  );
};

export default help;
