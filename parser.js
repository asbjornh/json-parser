const antlr4 = require("antlr4");
const Lexer = require("./lib/jsonLexer.js").jsonLexer;
const Parser = require("./lib/jsonParser.js").jsonParser;

module.exports = input => {
  const chars = new antlr4.InputStream(input);
  const lexer = new Lexer(chars);

  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new Parser(tokens);
  const tree = parser.start();

  // const string = tree.toStringTree(parser.ruleNames);
  // console.log(string.replace(/[{}:,\[\]]/g, ""));

  return tree;
};
