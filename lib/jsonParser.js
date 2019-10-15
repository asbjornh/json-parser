// Generated from json.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var jsonListener = require('./jsonListener').jsonListener;
var jsonVisitor = require('./jsonVisitor').jsonVisitor;

var grammarFileName = "json.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0010Y\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0003\u0002\u0003",
    "\u0002\u0003\u0003\u0003\u0003\u0005\u0003\u001b\n\u0003\u0003\u0003",
    "\u0003\u0003\u0007\u0003\u001f\n\u0003\f\u0003\u000e\u0003\"\u000b\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0005\u00062\n\u0006\u0003\u0007\u0003\u0007",
    "\u0005\u00076\n\u0007\u0003\u0007\u0003\u0007\u0007\u0007:\n\u0007\f",
    "\u0007\u000e\u0007=\u000b\u0007\u0003\u0007\u0003\u0007\u0003\b\u0006",
    "\bB\n\b\r\b\u000e\bC\u0003\b\u0006\bG\n\b\r\b\u000e\bH\u0003\b\u0003",
    "\b\u0006\bM\n\b\r\b\u000e\bN\u0005\bQ\n\b\u0003\t\u0003\t\u0003\n\u0003",
    "\n\u0003\u000b\u0003\u000b\u0003\u000b\u0002\u0002\f\u0002\u0004\u0006",
    "\b\n\f\u000e\u0010\u0012\u0014\u0002\u0003\u0003\u0002\n\u000b\u0002",
    "[\u0002\u0016\u0003\u0002\u0002\u0002\u0004\u0018\u0003\u0002\u0002",
    "\u0002\u0006%\u0003\u0002\u0002\u0002\b)\u0003\u0002\u0002\u0002\n1",
    "\u0003\u0002\u0002\u0002\f3\u0003\u0002\u0002\u0002\u000eP\u0003\u0002",
    "\u0002\u0002\u0010R\u0003\u0002\u0002\u0002\u0012T\u0003\u0002\u0002",
    "\u0002\u0014V\u0003\u0002\u0002\u0002\u0016\u0017\u0005\u0004\u0003",
    "\u0002\u0017\u0003\u0003\u0002\u0002\u0002\u0018\u001a\u0007\u0003\u0002",
    "\u0002\u0019\u001b\u0005\u0006\u0004\u0002\u001a\u0019\u0003\u0002\u0002",
    "\u0002\u001a\u001b\u0003\u0002\u0002\u0002\u001b \u0003\u0002\u0002",
    "\u0002\u001c\u001d\u0007\u0004\u0002\u0002\u001d\u001f\u0005\u0006\u0004",
    "\u0002\u001e\u001c\u0003\u0002\u0002\u0002\u001f\"\u0003\u0002\u0002",
    "\u0002 \u001e\u0003\u0002\u0002\u0002 !\u0003\u0002\u0002\u0002!#\u0003",
    "\u0002\u0002\u0002\" \u0003\u0002\u0002\u0002#$\u0007\u0005\u0002\u0002",
    "$\u0005\u0003\u0002\u0002\u0002%&\u0005\b\u0005\u0002&\'\u0007\u0006",
    "\u0002\u0002\'(\u0005\n\u0006\u0002(\u0007\u0003\u0002\u0002\u0002)",
    "*\u0005\u0014\u000b\u0002*\t\u0003\u0002\u0002\u0002+2\u0005\u0014\u000b",
    "\u0002,2\u0005\u0010\t\u0002-2\u0005\u000e\b\u0002.2\u0005\u0012\n\u0002",
    "/2\u0005\u0004\u0003\u000202\u0005\f\u0007\u00021+\u0003\u0002\u0002",
    "\u00021,\u0003\u0002\u0002\u00021-\u0003\u0002\u0002\u00021.\u0003\u0002",
    "\u0002\u00021/\u0003\u0002\u0002\u000210\u0003\u0002\u0002\u00022\u000b",
    "\u0003\u0002\u0002\u000235\u0007\u0007\u0002\u000246\u0005\n\u0006\u0002",
    "54\u0003\u0002\u0002\u000256\u0003\u0002\u0002\u00026;\u0003\u0002\u0002",
    "\u000278\u0007\u0004\u0002\u00028:\u0005\n\u0006\u000297\u0003\u0002",
    "\u0002\u0002:=\u0003\u0002\u0002\u0002;9\u0003\u0002\u0002\u0002;<\u0003",
    "\u0002\u0002\u0002<>\u0003\u0002\u0002\u0002=;\u0003\u0002\u0002\u0002",
    ">?\u0007\b\u0002\u0002?\r\u0003\u0002\u0002\u0002@B\u0007\u000e\u0002",
    "\u0002A@\u0003\u0002\u0002\u0002BC\u0003\u0002\u0002\u0002CA\u0003\u0002",
    "\u0002\u0002CD\u0003\u0002\u0002\u0002DQ\u0003\u0002\u0002\u0002EG\u0007",
    "\u000e\u0002\u0002FE\u0003\u0002\u0002\u0002GH\u0003\u0002\u0002\u0002",
    "HF\u0003\u0002\u0002\u0002HI\u0003\u0002\u0002\u0002IJ\u0003\u0002\u0002",
    "\u0002JL\u0007\t\u0002\u0002KM\u0007\u000e\u0002\u0002LK\u0003\u0002",
    "\u0002\u0002MN\u0003\u0002\u0002\u0002NL\u0003\u0002\u0002\u0002NO\u0003",
    "\u0002\u0002\u0002OQ\u0003\u0002\u0002\u0002PA\u0003\u0002\u0002\u0002",
    "PF\u0003\u0002\u0002\u0002Q\u000f\u0003\u0002\u0002\u0002RS\t\u0002",
    "\u0002\u0002S\u0011\u0003\u0002\u0002\u0002TU\u0007\f\u0002\u0002U\u0013",
    "\u0003\u0002\u0002\u0002VW\u0007\r\u0002\u0002W\u0015\u0003\u0002\u0002",
    "\u0002\u000b\u001a 15;CHNP"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'{'", "','", "'}'", "':'", "'['", "']'", "'.'", 
                     "'true'", "'false'", "'null'", null, null, null, "' '" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, "STRING", "DIGIT", "WHITESPACE", "SPACE" ];

var ruleNames =  [ "start", "object", "property", "key", "value", "array", 
                   "number", "bool", "nullLiteral", "string" ];

function jsonParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

jsonParser.prototype = Object.create(antlr4.Parser.prototype);
jsonParser.prototype.constructor = jsonParser;

Object.defineProperty(jsonParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

jsonParser.EOF = antlr4.Token.EOF;
jsonParser.T__0 = 1;
jsonParser.T__1 = 2;
jsonParser.T__2 = 3;
jsonParser.T__3 = 4;
jsonParser.T__4 = 5;
jsonParser.T__5 = 6;
jsonParser.T__6 = 7;
jsonParser.T__7 = 8;
jsonParser.T__8 = 9;
jsonParser.T__9 = 10;
jsonParser.STRING = 11;
jsonParser.DIGIT = 12;
jsonParser.WHITESPACE = 13;
jsonParser.SPACE = 14;

jsonParser.RULE_start = 0;
jsonParser.RULE_object = 1;
jsonParser.RULE_property = 2;
jsonParser.RULE_key = 3;
jsonParser.RULE_value = 4;
jsonParser.RULE_array = 5;
jsonParser.RULE_number = 6;
jsonParser.RULE_bool = 7;
jsonParser.RULE_nullLiteral = 8;
jsonParser.RULE_string = 9;


function StartContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = jsonParser.RULE_start;
    return this;
}

StartContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StartContext.prototype.constructor = StartContext;

StartContext.prototype.object = function() {
    return this.getTypedRuleContext(ObjectContext,0);
};

StartContext.prototype.enterRule = function(listener) {
    if(listener instanceof jsonListener ) {
        listener.enterStart(this);
	}
};

StartContext.prototype.exitRule = function(listener) {
    if(listener instanceof jsonListener ) {
        listener.exitStart(this);
	}
};

StartContext.prototype.accept = function(visitor) {
    if ( visitor instanceof jsonVisitor ) {
        return visitor.visitStart(this);
    } else {
        return visitor.visitChildren(this);
    }
};




jsonParser.StartContext = StartContext;

jsonParser.prototype.start = function() {

    var localctx = new StartContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, jsonParser.RULE_start);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 20;
        this.object();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ObjectContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = jsonParser.RULE_object;
    return this;
}

ObjectContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ObjectContext.prototype.constructor = ObjectContext;

ObjectContext.prototype.property = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(PropertyContext);
    } else {
        return this.getTypedRuleContext(PropertyContext,i);
    }
};

ObjectContext.prototype.enterRule = function(listener) {
    if(listener instanceof jsonListener ) {
        listener.enterObject(this);
	}
};

ObjectContext.prototype.exitRule = function(listener) {
    if(listener instanceof jsonListener ) {
        listener.exitObject(this);
	}
};

ObjectContext.prototype.accept = function(visitor) {
    if ( visitor instanceof jsonVisitor ) {
        return visitor.visitObject(this);
    } else {
        return visitor.visitChildren(this);
    }
};




jsonParser.ObjectContext = ObjectContext;

jsonParser.prototype.object = function() {

    var localctx = new ObjectContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, jsonParser.RULE_object);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 22;
        this.match(jsonParser.T__0);
        this.state = 24;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===jsonParser.STRING) {
            this.state = 23;
            this.property();
        }

        this.state = 30;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===jsonParser.T__1) {
            this.state = 26;
            this.match(jsonParser.T__1);
            this.state = 27;
            this.property();
            this.state = 32;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 33;
        this.match(jsonParser.T__2);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function PropertyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = jsonParser.RULE_property;
    return this;
}

PropertyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PropertyContext.prototype.constructor = PropertyContext;

PropertyContext.prototype.key = function() {
    return this.getTypedRuleContext(KeyContext,0);
};

PropertyContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};

PropertyContext.prototype.enterRule = function(listener) {
    if(listener instanceof jsonListener ) {
        listener.enterProperty(this);
	}
};

PropertyContext.prototype.exitRule = function(listener) {
    if(listener instanceof jsonListener ) {
        listener.exitProperty(this);
	}
};

PropertyContext.prototype.accept = function(visitor) {
    if ( visitor instanceof jsonVisitor ) {
        return visitor.visitProperty(this);
    } else {
        return visitor.visitChildren(this);
    }
};




jsonParser.PropertyContext = PropertyContext;

jsonParser.prototype.property = function() {

    var localctx = new PropertyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, jsonParser.RULE_property);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 35;
        this.key();
        this.state = 36;
        this.match(jsonParser.T__3);
        this.state = 37;
        this.value();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function KeyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = jsonParser.RULE_key;
    return this;
}

KeyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
KeyContext.prototype.constructor = KeyContext;

KeyContext.prototype.string = function() {
    return this.getTypedRuleContext(StringContext,0);
};

KeyContext.prototype.enterRule = function(listener) {
    if(listener instanceof jsonListener ) {
        listener.enterKey(this);
	}
};

KeyContext.prototype.exitRule = function(listener) {
    if(listener instanceof jsonListener ) {
        listener.exitKey(this);
	}
};

KeyContext.prototype.accept = function(visitor) {
    if ( visitor instanceof jsonVisitor ) {
        return visitor.visitKey(this);
    } else {
        return visitor.visitChildren(this);
    }
};




jsonParser.KeyContext = KeyContext;

jsonParser.prototype.key = function() {

    var localctx = new KeyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, jsonParser.RULE_key);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 39;
        this.string();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = jsonParser.RULE_value;
    return this;
}

ValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValueContext.prototype.constructor = ValueContext;

ValueContext.prototype.string = function() {
    return this.getTypedRuleContext(StringContext,0);
};

ValueContext.prototype.bool = function() {
    return this.getTypedRuleContext(BoolContext,0);
};

ValueContext.prototype.number = function() {
    return this.getTypedRuleContext(NumberContext,0);
};

ValueContext.prototype.nullLiteral = function() {
    return this.getTypedRuleContext(NullLiteralContext,0);
};

ValueContext.prototype.object = function() {
    return this.getTypedRuleContext(ObjectContext,0);
};

ValueContext.prototype.array = function() {
    return this.getTypedRuleContext(ArrayContext,0);
};

ValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof jsonListener ) {
        listener.enterValue(this);
	}
};

ValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof jsonListener ) {
        listener.exitValue(this);
	}
};

ValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof jsonVisitor ) {
        return visitor.visitValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};




jsonParser.ValueContext = ValueContext;

jsonParser.prototype.value = function() {

    var localctx = new ValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, jsonParser.RULE_value);
    try {
        this.state = 47;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case jsonParser.STRING:
            this.enterOuterAlt(localctx, 1);
            this.state = 41;
            this.string();
            break;
        case jsonParser.T__7:
        case jsonParser.T__8:
            this.enterOuterAlt(localctx, 2);
            this.state = 42;
            this.bool();
            break;
        case jsonParser.DIGIT:
            this.enterOuterAlt(localctx, 3);
            this.state = 43;
            this.number();
            break;
        case jsonParser.T__9:
            this.enterOuterAlt(localctx, 4);
            this.state = 44;
            this.nullLiteral();
            break;
        case jsonParser.T__0:
            this.enterOuterAlt(localctx, 5);
            this.state = 45;
            this.object();
            break;
        case jsonParser.T__4:
            this.enterOuterAlt(localctx, 6);
            this.state = 46;
            this.array();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ArrayContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = jsonParser.RULE_array;
    return this;
}

ArrayContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArrayContext.prototype.constructor = ArrayContext;

ArrayContext.prototype.value = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ValueContext);
    } else {
        return this.getTypedRuleContext(ValueContext,i);
    }
};

ArrayContext.prototype.enterRule = function(listener) {
    if(listener instanceof jsonListener ) {
        listener.enterArray(this);
	}
};

ArrayContext.prototype.exitRule = function(listener) {
    if(listener instanceof jsonListener ) {
        listener.exitArray(this);
	}
};

ArrayContext.prototype.accept = function(visitor) {
    if ( visitor instanceof jsonVisitor ) {
        return visitor.visitArray(this);
    } else {
        return visitor.visitChildren(this);
    }
};




jsonParser.ArrayContext = ArrayContext;

jsonParser.prototype.array = function() {

    var localctx = new ArrayContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, jsonParser.RULE_array);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 49;
        this.match(jsonParser.T__4);
        this.state = 51;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << jsonParser.T__0) | (1 << jsonParser.T__4) | (1 << jsonParser.T__7) | (1 << jsonParser.T__8) | (1 << jsonParser.T__9) | (1 << jsonParser.STRING) | (1 << jsonParser.DIGIT))) !== 0)) {
            this.state = 50;
            this.value();
        }

        this.state = 57;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===jsonParser.T__1) {
            this.state = 53;
            this.match(jsonParser.T__1);
            this.state = 54;
            this.value();
            this.state = 59;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 60;
        this.match(jsonParser.T__5);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function NumberContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = jsonParser.RULE_number;
    return this;
}

NumberContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NumberContext.prototype.constructor = NumberContext;

NumberContext.prototype.DIGIT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(jsonParser.DIGIT);
    } else {
        return this.getToken(jsonParser.DIGIT, i);
    }
};


NumberContext.prototype.enterRule = function(listener) {
    if(listener instanceof jsonListener ) {
        listener.enterNumber(this);
	}
};

NumberContext.prototype.exitRule = function(listener) {
    if(listener instanceof jsonListener ) {
        listener.exitNumber(this);
	}
};

NumberContext.prototype.accept = function(visitor) {
    if ( visitor instanceof jsonVisitor ) {
        return visitor.visitNumber(this);
    } else {
        return visitor.visitChildren(this);
    }
};




jsonParser.NumberContext = NumberContext;

jsonParser.prototype.number = function() {

    var localctx = new NumberContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, jsonParser.RULE_number);
    var _la = 0; // Token type
    try {
        this.state = 78;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 63; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 62;
                this.match(jsonParser.DIGIT);
                this.state = 65; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while(_la===jsonParser.DIGIT);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 68; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 67;
                this.match(jsonParser.DIGIT);
                this.state = 70; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while(_la===jsonParser.DIGIT);
            this.state = 72;
            this.match(jsonParser.T__6);
            this.state = 74; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 73;
                this.match(jsonParser.DIGIT);
                this.state = 76; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while(_la===jsonParser.DIGIT);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function BoolContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = jsonParser.RULE_bool;
    return this;
}

BoolContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BoolContext.prototype.constructor = BoolContext;


BoolContext.prototype.enterRule = function(listener) {
    if(listener instanceof jsonListener ) {
        listener.enterBool(this);
	}
};

BoolContext.prototype.exitRule = function(listener) {
    if(listener instanceof jsonListener ) {
        listener.exitBool(this);
	}
};

BoolContext.prototype.accept = function(visitor) {
    if ( visitor instanceof jsonVisitor ) {
        return visitor.visitBool(this);
    } else {
        return visitor.visitChildren(this);
    }
};




jsonParser.BoolContext = BoolContext;

jsonParser.prototype.bool = function() {

    var localctx = new BoolContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, jsonParser.RULE_bool);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 80;
        _la = this._input.LA(1);
        if(!(_la===jsonParser.T__7 || _la===jsonParser.T__8)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function NullLiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = jsonParser.RULE_nullLiteral;
    return this;
}

NullLiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NullLiteralContext.prototype.constructor = NullLiteralContext;


NullLiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof jsonListener ) {
        listener.enterNullLiteral(this);
	}
};

NullLiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof jsonListener ) {
        listener.exitNullLiteral(this);
	}
};

NullLiteralContext.prototype.accept = function(visitor) {
    if ( visitor instanceof jsonVisitor ) {
        return visitor.visitNullLiteral(this);
    } else {
        return visitor.visitChildren(this);
    }
};




jsonParser.NullLiteralContext = NullLiteralContext;

jsonParser.prototype.nullLiteral = function() {

    var localctx = new NullLiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, jsonParser.RULE_nullLiteral);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 82;
        this.match(jsonParser.T__9);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function StringContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = jsonParser.RULE_string;
    return this;
}

StringContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StringContext.prototype.constructor = StringContext;

StringContext.prototype.STRING = function() {
    return this.getToken(jsonParser.STRING, 0);
};

StringContext.prototype.enterRule = function(listener) {
    if(listener instanceof jsonListener ) {
        listener.enterString(this);
	}
};

StringContext.prototype.exitRule = function(listener) {
    if(listener instanceof jsonListener ) {
        listener.exitString(this);
	}
};

StringContext.prototype.accept = function(visitor) {
    if ( visitor instanceof jsonVisitor ) {
        return visitor.visitString(this);
    } else {
        return visitor.visitChildren(this);
    }
};




jsonParser.StringContext = StringContext;

jsonParser.prototype.string = function() {

    var localctx = new StringContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, jsonParser.RULE_string);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 84;
        this.match(jsonParser.STRING);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.jsonParser = jsonParser;
