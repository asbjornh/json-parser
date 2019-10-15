grammar json;
start: object;

object: '{' property? (',' property)* '}';
property: key ':' value;
key: string;
value: string | bool | number | nullLiteral | object | array;

array: '[' value? (',' value)* ']';
number: DIGIT+ | DIGIT+ '.' DIGIT+;
bool: 'true' | 'false';
nullLiteral: 'null';
string: STRING;

STRING: '"' ~["\t\r\n]+ '"';
DIGIT: [0-9];
WHITESPACE: ('\t' | '\r' | '\n') -> skip;
SPACE: ' ' -> skip;
