/**

Question:
=========

Instead of transforming every line as in the previous "INPUT OUTPUT" example,
for this challenge, convert even-numbered lines to upper-case and odd-numbered
lines to lower-case. Consider the first line to be odd-numbered. For example
given this input:

    One
    Two
    Three
    Four

Your program should output:

    one
    TWO
    three
    FOUR

You can use the `split` module to split input by newlines. For example:

    var split = require('split');
    process.stdin
        .pipe(split())
        .pipe(through(function (line) {
            console.dir(line.toString());
        }))
    ;

Will buffer and split chunks on newlines before you get them. For example, for
the `split.js` we just wrote we will get separate events for each line even
though the data probably all arrives on the same chunk:

    $ echo -e 'one\ntwo\nthree' | node split.js
    'one'
    'two'
    'three'

Your own program should use `split` in this way, but you should transform the
input and pipe the output through to `process.stdout`.

Make sure to `npm install split through` in the directory where your solution
file lives.

 */

var through = require('through');
var split = require('split');

process.stdin
    .pipe(split('\r')) // buffer w/ each line separated by "\n"
    .pipe(through(function (buf) {
        // do some stuff
        var a = buf.toString().split('\n');
        var res = [];

        for (var i=0; i < a.length; i++) {
            if (i % 2 !== 0)
                res.push(a[i].toUpperCase());
            else
                res.push(a[i].toLowerCase());
        }

        this.queue(res.join('\n'));
    }))
    .pipe(process.stdout);


/**
 * official solution
 */

var through = require('through');
var split = require('split');
    
var lineCount = 0;
var tr = through(function (buf) {
    var line = buf.toString();

    this.queue(lineCount % 2 === 0
        ? line.toLowerCase() + '\n'
        : line.toUpperCase() + '\n'
    );
    lineCount ++;
});

process.stdin.pipe(split()).pipe(tr).pipe(process.stdout);
