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
const mod = require('./modules');
const sanitizeHtml = require('sanitize-html');
let x = mod.alphabet;
x();
let testData1 = 'This is a safe string';
let testData2 = 'This is a <strong>unsafe</strong> string, because it contains HTML';
function printUnsafe(fromUser) {
    // Hoppsan! Om fromUser innehåller HTML, så ska den inte skrivas ut
    console.log(sanitizeHtml(fromUser, {
        allowedTags: [],
        allowedAttributes: {}
    }));
}
printUnsafe(testData2);
