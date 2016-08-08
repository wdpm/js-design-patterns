// The objective of this example is to build an interpreter which translates roman numerals to decimal numbers:
// for example, XXXVI = 36.
//
// The Context object maintains the input (the roman numeral) and the resulting output as it is being parsed and interpreted.
// The Expression object represents the nodes in the grammar tree; it supports the interpret method.
//
// When running the program, a simple grammar tree is being built which then processes a roman numeral and translates it
// into a numeric.
var Context = function (input) {
    this.input = input;
    this.output = 0;
};

Context.prototype = {
    startsWith: function (str) {
        return this.input.substr(0, str.length) === str;
    }
};

var Expression = function (name, one, four, five, nine, multiplier) {
    this.name = name;
    this.one = one;//I
    this.four = four;//IV
    this.five = five;//V
    this.nine = nine;//IX
    this.multiplier = multiplier;
};

Expression.prototype = {
    interpret: function (context) {
        if (context.input.length == 0) {
            return;
        }
        else if (context.startsWith(this.nine)) {
            context.output += (9 * this.multiplier);
            context.input = context.input.substr(2);
        }
        else if (context.startsWith(this.four)) {
            context.output += (4 * this.multiplier);
            context.input = context.input.substr(2);
        }
        else if (context.startsWith(this.five)) {
            context.output += (5 * this.multiplier);
            context.input = context.input.substr(1);
        }
        while (context.startsWith(this.one)) {
            context.output += (1 * this.multiplier);
            context.input = context.input.substr(1);
        }
    }
};

function run() {
    var roman = "MCMXXVIII";
    var context = new Context(roman);
    var tree = [];

    tree.push(new Expression("thousand", "M", " ", " ", " ", 1000));
    tree.push(new Expression("hundred", "C", "CD", "D", "CM", 100));
    tree.push(new Expression("ten", "X", "XL", "L", "XC", 10));
    tree.push(new Expression("one", "I", "IV", "V", "IX", 1));

    for (var i = 0, len = tree.length; i < len; i++) {
        tree[i].interpret(context);
    }

    console.log(roman + " = " + context.output);
}

run();
