const args = [
  {
    query: "<length>",
    name: "Length",
    description: "Length of the password to generate",
  },
  {
    query: "-s, --symbols",
    name: "Symbols",
    description: "Include symbols in the password",
  },
  {
    query: "-h, --help",
    name: "Help",
    description: "Display help",
  },
];

const help = (customMessage) => {
  if (customMessage) console.error(customMessage, "\n");

  args.forEach((e) =>
    console.log(`${e.query}\t\t${e.name}\t\t${e.description}`)
  );
};

export default help;
