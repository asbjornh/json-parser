const JsonVisitor = require("./lib/jsonVisitor.js").jsonVisitor;

class Visitor extends JsonVisitor {
  start(ctx) {
    return this.visit(ctx.object());
  }

  visitChildren(ctx) {
    return ctx.children.map(child => this.visit(child)).filter(t => t);
  }

  visitTerminal(ctx) {
    return null;
  }

  visitObject(ctx) {
    return ctx.children
      .map(c => this.visit(c))
      .filter(c => c)
      .reduce((accum, [key, value]) => ({ ...accum, [key]: value }), {});
  }

  visitProperty(ctx) {
    const key = this.visit(ctx.key());
    const value = this.visit(ctx.value());

    return [key, value];
  }

  visitKey(ctx) {
    return ctx.getText().replace(/"/g, "");
  }

  visitValue(ctx) {
    return ctx.string()
      ? ctx.getText().replace(/"/g, "")
      : ctx.number()
      ? parseFloat(ctx.getText())
      : ctx.bool()
      ? ctx.getText() === "true"
      : ctx.nullLiteral()
      ? null
      : ctx.array()
      ? this.visit(ctx.array())
      : ctx.object()
      ? this.visit(ctx.object())
      : (() => {
          throw new Error("Bad value for property");
        })();
  }
}

module.exports = function(tree) {
  return new Visitor().start(tree);
};
