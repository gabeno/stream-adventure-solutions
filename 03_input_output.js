/**

Question:
=========

Take data from `process.stdin` and pipe it to `process.stdout`.

With `.pipe()`. `process.stdin.pipe()` to be exact.

Don't overthink this.

 */

// start reading from stdin
process.stdin.resume();

// set encoding
process.stdin.setEncoding('utf8');

// stream data to stdout
process.stdin.pipe(process.stdout);


// official solution
process.stdin.pipe(process.stdout);