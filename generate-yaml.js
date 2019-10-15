const chalk = require("chalk");
const JsonVisitor = require("./lib/jsonVisitor.js").jsonVisitor;

class Visitor extends JsonVisitor {
  constructor() {
    super();
    this.indentLevel = 0;
  }

  start(ctx) {
    return chalk.cyan(this.visit(ctx.object()).join(""));
  }

  visitChildren(ctx) {
    return ctx.children.map(child => this.visit(child)).filter(t => t);
  }

  visitTerminal(ctx) {
    return "";
  }

  visitObject(ctx) {
    return ctx.children.map(c => this.visit(c)).filter(s => s);
  }

  visitProperty(ctx) {
    const key = this.visit(ctx.key());
    const value = this.visit(ctx.value());

    return `${chalk.red(key)}: ${value}`;
  }

  visitKey(ctx) {
    return ctx.getText().replace(/"/g, "");
  }

  visitBool(ctx) {
    return chalk.yellow(ctx.getText());
  }

  visitValue(ctx) {
    if (ctx.string()) {
      return chalk.green(ctx.getText().replace(/"/g, "")) + "\n";
    } else if (ctx.number() || ctx.bool() || ctx.nullLiteral()) {
      return chalk.yellow(ctx.getText()) + "\n";
    }

    this.indentLevel += 2;
    const indent = " ".repeat(this.indentLevel);

    const output = ctx.array()
      ? this.visit(ctx.array()).map(t => `${indent}- ` + t.replace(/^\n +/, ""))
      : ctx.object()
      ? this.visit(ctx.object()).map(t => indent + t)
      : (() => {
          throw new Error("Bad value for property");
        })();

    this.indentLevel -= 2;
    return "\n" + output.join("");
  }
}

module.exports = function(tree) {
  return new Visitor().start(tree);
};
