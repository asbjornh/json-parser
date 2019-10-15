// Generated from json.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by jsonParser.

function jsonVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

jsonVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
jsonVisitor.prototype.constructor = jsonVisitor;

// Visit a parse tree produced by jsonParser#start.
jsonVisitor.prototype.visitStart = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by jsonParser#object.
jsonVisitor.prototype.visitObject = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by jsonParser#property.
jsonVisitor.prototype.visitProperty = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by jsonParser#key.
jsonVisitor.prototype.visitKey = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by jsonParser#value.
jsonVisitor.prototype.visitValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by jsonParser#array.
jsonVisitor.prototype.visitArray = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by jsonParser#number.
jsonVisitor.prototype.visitNumber = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by jsonParser#bool.
jsonVisitor.prototype.visitBool = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by jsonParser#nullLiteral.
jsonVisitor.prototype.visitNullLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by jsonParser#string.
jsonVisitor.prototype.visitString = function(ctx) {
  return this.visitChildren(ctx);
};



exports.jsonVisitor = jsonVisitor;