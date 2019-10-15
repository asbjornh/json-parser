// Generated from json.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by jsonParser.
function jsonListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

jsonListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
jsonListener.prototype.constructor = jsonListener;

// Enter a parse tree produced by jsonParser#start.
jsonListener.prototype.enterStart = function(ctx) {
};

// Exit a parse tree produced by jsonParser#start.
jsonListener.prototype.exitStart = function(ctx) {
};


// Enter a parse tree produced by jsonParser#object.
jsonListener.prototype.enterObject = function(ctx) {
};

// Exit a parse tree produced by jsonParser#object.
jsonListener.prototype.exitObject = function(ctx) {
};


// Enter a parse tree produced by jsonParser#property.
jsonListener.prototype.enterProperty = function(ctx) {
};

// Exit a parse tree produced by jsonParser#property.
jsonListener.prototype.exitProperty = function(ctx) {
};


// Enter a parse tree produced by jsonParser#key.
jsonListener.prototype.enterKey = function(ctx) {
};

// Exit a parse tree produced by jsonParser#key.
jsonListener.prototype.exitKey = function(ctx) {
};


// Enter a parse tree produced by jsonParser#value.
jsonListener.prototype.enterValue = function(ctx) {
};

// Exit a parse tree produced by jsonParser#value.
jsonListener.prototype.exitValue = function(ctx) {
};


// Enter a parse tree produced by jsonParser#array.
jsonListener.prototype.enterArray = function(ctx) {
};

// Exit a parse tree produced by jsonParser#array.
jsonListener.prototype.exitArray = function(ctx) {
};


// Enter a parse tree produced by jsonParser#number.
jsonListener.prototype.enterNumber = function(ctx) {
};

// Exit a parse tree produced by jsonParser#number.
jsonListener.prototype.exitNumber = function(ctx) {
};


// Enter a parse tree produced by jsonParser#bool.
jsonListener.prototype.enterBool = function(ctx) {
};

// Exit a parse tree produced by jsonParser#bool.
jsonListener.prototype.exitBool = function(ctx) {
};


// Enter a parse tree produced by jsonParser#nullLiteral.
jsonListener.prototype.enterNullLiteral = function(ctx) {
};

// Exit a parse tree produced by jsonParser#nullLiteral.
jsonListener.prototype.exitNullLiteral = function(ctx) {
};


// Enter a parse tree produced by jsonParser#string.
jsonListener.prototype.enterString = function(ctx) {
};

// Exit a parse tree produced by jsonParser#string.
jsonListener.prototype.exitString = function(ctx) {
};



exports.jsonListener = jsonListener;