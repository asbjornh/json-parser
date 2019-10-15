// Generated from json.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');



var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u0010O\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0003\u0002",
    "\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0005",
    "\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\b",
    "\u0003\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\f\u0003\f\u0006\f@\n\f\r\f\u000e\fA\u0003\f",
    "\u0003\f\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0002\u0002\u0010\u0003",
    "\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f\t\u0011",
    "\n\u0013\u000b\u0015\f\u0017\r\u0019\u000e\u001b\u000f\u001d\u0010\u0003",
    "\u0002\u0005\u0005\u0002\u000b\f\u000f\u000f$$\u0003\u00022;\u0004\u0002",
    "\u000b\f\u000f\u000f\u0002O\u0002\u0003\u0003\u0002\u0002\u0002\u0002",
    "\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002",
    "\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002",
    "\r\u0003\u0002\u0002\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0002",
    "\u0011\u0003\u0002\u0002\u0002\u0002\u0013\u0003\u0002\u0002\u0002\u0002",
    "\u0015\u0003\u0002\u0002\u0002\u0002\u0017\u0003\u0002\u0002\u0002\u0002",
    "\u0019\u0003\u0002\u0002\u0002\u0002\u001b\u0003\u0002\u0002\u0002\u0002",
    "\u001d\u0003\u0002\u0002\u0002\u0003\u001f\u0003\u0002\u0002\u0002\u0005",
    "!\u0003\u0002\u0002\u0002\u0007#\u0003\u0002\u0002\u0002\t%\u0003\u0002",
    "\u0002\u0002\u000b\'\u0003\u0002\u0002\u0002\r)\u0003\u0002\u0002\u0002",
    "\u000f+\u0003\u0002\u0002\u0002\u0011-\u0003\u0002\u0002\u0002\u0013",
    "2\u0003\u0002\u0002\u0002\u00158\u0003\u0002\u0002\u0002\u0017=\u0003",
    "\u0002\u0002\u0002\u0019E\u0003\u0002\u0002\u0002\u001bG\u0003\u0002",
    "\u0002\u0002\u001dK\u0003\u0002\u0002\u0002\u001f \u0007}\u0002\u0002",
    " \u0004\u0003\u0002\u0002\u0002!\"\u0007.\u0002\u0002\"\u0006\u0003",
    "\u0002\u0002\u0002#$\u0007\u007f\u0002\u0002$\b\u0003\u0002\u0002\u0002",
    "%&\u0007<\u0002\u0002&\n\u0003\u0002\u0002\u0002\'(\u0007]\u0002\u0002",
    "(\f\u0003\u0002\u0002\u0002)*\u0007_\u0002\u0002*\u000e\u0003\u0002",
    "\u0002\u0002+,\u00070\u0002\u0002,\u0010\u0003\u0002\u0002\u0002-.\u0007",
    "v\u0002\u0002./\u0007t\u0002\u0002/0\u0007w\u0002\u000201\u0007g\u0002",
    "\u00021\u0012\u0003\u0002\u0002\u000223\u0007h\u0002\u000234\u0007c",
    "\u0002\u000245\u0007n\u0002\u000256\u0007u\u0002\u000267\u0007g\u0002",
    "\u00027\u0014\u0003\u0002\u0002\u000289\u0007p\u0002\u00029:\u0007w",
    "\u0002\u0002:;\u0007n\u0002\u0002;<\u0007n\u0002\u0002<\u0016\u0003",
    "\u0002\u0002\u0002=?\u0007$\u0002\u0002>@\n\u0002\u0002\u0002?>\u0003",
    "\u0002\u0002\u0002@A\u0003\u0002\u0002\u0002A?\u0003\u0002\u0002\u0002",
    "AB\u0003\u0002\u0002\u0002BC\u0003\u0002\u0002\u0002CD\u0007$\u0002",
    "\u0002D\u0018\u0003\u0002\u0002\u0002EF\t\u0003\u0002\u0002F\u001a\u0003",
    "\u0002\u0002\u0002GH\t\u0004\u0002\u0002HI\u0003\u0002\u0002\u0002I",
    "J\b\u000e\u0002\u0002J\u001c\u0003\u0002\u0002\u0002KL\u0007\"\u0002",
    "\u0002LM\u0003\u0002\u0002\u0002MN\b\u000f\u0002\u0002N\u001e\u0003",
    "\u0002\u0002\u0002\u0004\u0002A\u0003\b\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function jsonLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

jsonLexer.prototype = Object.create(antlr4.Lexer.prototype);
jsonLexer.prototype.constructor = jsonLexer;

Object.defineProperty(jsonLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

jsonLexer.EOF = antlr4.Token.EOF;
jsonLexer.T__0 = 1;
jsonLexer.T__1 = 2;
jsonLexer.T__2 = 3;
jsonLexer.T__3 = 4;
jsonLexer.T__4 = 5;
jsonLexer.T__5 = 6;
jsonLexer.T__6 = 7;
jsonLexer.T__7 = 8;
jsonLexer.T__8 = 9;
jsonLexer.T__9 = 10;
jsonLexer.STRING = 11;
jsonLexer.DIGIT = 12;
jsonLexer.WHITESPACE = 13;
jsonLexer.SPACE = 14;

jsonLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

jsonLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

jsonLexer.prototype.literalNames = [ null, "'{'", "','", "'}'", "':'", "'['", 
                                     "']'", "'.'", "'true'", "'false'", 
                                     "'null'", null, null, null, "' '" ];

jsonLexer.prototype.symbolicNames = [ null, null, null, null, null, null, 
                                      null, null, null, null, null, "STRING", 
                                      "DIGIT", "WHITESPACE", "SPACE" ];

jsonLexer.prototype.ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", 
                                  "T__5", "T__6", "T__7", "T__8", "T__9", 
                                  "STRING", "DIGIT", "WHITESPACE", "SPACE" ];

jsonLexer.prototype.grammarFileName = "json.g4";



exports.jsonLexer = jsonLexer;

