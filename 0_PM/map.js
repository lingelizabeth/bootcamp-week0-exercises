const assert = require('assert')

/**
 * Complete the implementation of the following functions so that
 * the output is [0, 3, 6, 9, 12].
 */

// TODO
const triple = el => { //should take in arg?
    //console.log(this);
    return el*3;
};

// TODO
Array.prototype.map = function(fun) {
    const newlist = [];
    this.forEach(num => function(){newlist.push(fun(num))} );
    return newlist;
};

const arr = [0, 1, 2, 3, 4];
const solution = [0, 3, 6, 9, 12];

assert(arr.map(triple).every((v, i) => v === solution[i]))
