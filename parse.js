const chalk = require("chalk");
const fs = require("fs");
const parse = require("./parser");
const generateYaml = require("./generate-yaml");
const generatePrettyJson = require("./generate-pretty-json");
const generateObject = require("./generate-object");
const printColumns = require("./print-columns");

const input = fs.readFileSync(process.argv[2], "utf8");
const code = generateYaml(parse(input));
const json = generatePrettyJson(parse(input));
const obj = generateObject(parse(input));

console.log();
console.log(chalk.inverse(" Javascript \n"));
console.log(obj);
console.log();
printColumns(
  chalk.inverse(" JSON \n\n") + json,
  chalk.inverse(" YAML \n\n") + code
);
console.log();
