const chalk = require("chalk");
const JsonVisitor = require("./lib/jsonVisitor.js").jsonVisitor;

const trace = x => {
  console.log(x);
  return x;
};

class Visitor extends JsonVisitor {
  constructor() {
    super();
    this.indentLevel = 2;
  }

  start(ctx) {
    return chalk.cyan(
      this.visit(ctx.object())
        .map(s => `  ${s}`)
        .join("")
        .replace(/^[ ]+(\{|\[)/g, "$1")
        .replace(/\:[ ]+(\{|\[)/g, ": $1")
        .replace(/[ ]+,/g, ",")
    );
  }

  visitChildren(ctx) {
    return ctx.children.map(child => this.visit(child)).filter(t => t);
  }

  visitTerminal(ctx) {
    const symbol = ctx.getText();
    switch (symbol) {
      case "{":
      case "[":
      case ",":
        return symbol + "\n";
      case "}":
      case "]":
        return "\n" + " ".repeat(this.indentLevel - 2) + symbol;
      default:
        return symbol;
    }
  }

  visitObject(ctx) {
    return ctx.children.map(c => this.visit(c));
  }

  visitProperty(ctx) {
    const key = ctx.key().getText();
    const value = this.visit(ctx.value());

    return `"${chalk.yellow(key.replace(/"/g, ""))}": ${value}`;
  }

  visitValue(ctx) {
    if (ctx.string()) {
      return '"' + chalk.green(ctx.getText().replace(/"/g, "")) + '"';
    } else if (ctx.number() || ctx.bool() || ctx.nullLiteral()) {
      return chalk.keyword("orange")(ctx.getText());
    }

    this.indentLevel += 2;
    const indent = " ".repeat(this.indentLevel);

    const output = ctx.array()
      ? this.visit(ctx.array())
          .map(s => s.replace(/^[ ]+/, ""))
          .map(t => indent + t)
      : ctx.object()
      ? this.visit(ctx.object()).map(t => indent + t)
      : (() => {
          throw new Error("Bad value for property");
        })();

    this.indentLevel -= 2;
    return output.join("");
  }
}

module.exports = function(tree) {
  return new Visitor().start(tree);
};
