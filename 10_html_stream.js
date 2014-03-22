/**

  #####################################################################
  ##                       ~~  HTML STREAM  ~~                       ##
  #####################################################################

Your program will get some html written to stdin. Convert all the inner html to
upper-case for elements with a class name of "loud".

You can use `trumpet` and `through` to solve this adventure.

With `trumpet` you can create a transform stream from a css selector:

    var trumpet = require('trumpet');
    var fs = require('fs');
    var tr = trumpet();
    fs.createReadStream('input.html').pipe(tr);
    
    var stream = tr.select('.beep').createStream();

Now `stream` outputs all the inner html content at `'.beep'` and the data you
write to `stream` will appear as the new inner html content.

Make sure to `npm install trumpet through` in the directory where your solution
file lives.

To verify your program, run: `stream-adventure verify program.js`.

 */

var trumpet = require('trumpet');
var through = require('through');
var tr = trumpet();

// read-write stream
// get content to be adjusted
// tweak it via through
// pass it back to stream
var stream = tr.select('.loud').createStream(); // content to be adjusted
stream.pipe(through(function(buf) {
  this.queue(buf.toString().toUpperCase())
})).pipe(stream)

process.stdin.pipe(tr).pipe(process.stdout);


/**
 * official solution
 */
var trumpet = require('trumpet');
var through = require('through');
var tr = trumpet();
    
var loud = tr.select('.loud').createStream();
loud.pipe(through(function (buf) {
  this.queue(buf.toString().toUpperCase());
})).pipe(loud);
    
process.stdin.pipe(tr).pipe(process.stdout);

