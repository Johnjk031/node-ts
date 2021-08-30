"use strict";
/*
let http = require('http')
const fs = require('fs')
const port = 1010
var express = require('express');
var path = require('path');
const server = express()


server.listen(port, function(error: any) {
    if (error) {
        console.log('whoops', error)
    } else {
        console.log('Server is running on localhost:' + port)
    }
})
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var mod = require('./modules');
var sanitizeHtml = require('sanitize-html');
var sorted = require('is-sorted');
var x = mod.alphabet;
x();
var testData1 = 'This is a safe string';
var testData2 = 'This is a <strong>unsafe</strong> string, because it contains HTML';
var sorted = require('is-sorted');
console.log(sorted([3, 2, 1]));
console.log('test');
function printUnsafe(fromUser) {
    // Hoppsan! Om fromUser innehåller HTML, så ska den inte skrivas ut
    console.log(sanitizeHtml(fromUser, {
        allowedTags: [],
        allowedAttributes: {}
    }));
}
printUnsafe(testData2);
