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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const mod = require('./modules')
const sanitizeHtml = require('sanitize-html');
var sorted = require('is-sorted')



let x = mod.alphabet
let y = mod.fun



fs.readFile(path.join(__dirname + '/personData.json'), function(err: any, data: any) {
    if (err) throw err;
    console.log(JSON.parse(data))})


  const createReader = fs.createReadStream(__dirname + '/personData.json');
  
    createReader.on('data', (data:any) => {
        console.log(JSON.parse(data))})


/*
const questions = [
    "Name?",
    "Email"
]

const answers: any = [] 

let ask = (i: any) => {
process.stdout.write(`\n\n ${questions[i]} \n \n`)
}
ask(0)


process.stdin.on('data', function(data: any) {

    answers.push(data.toString().trim())

    if (answers.length < questions.length) {
        ask(answers.length);
        
    }

    else {
    fs.writeFileSync(__dirname + '/persData.json',`{
     "name":  "${answers[0].toString()}",
     "email":  "${answers[1].toString()}"
    }` )
        process.exit()
    }

})

*/

const quest = "What is your name?"


const answ: any = []

let askName = () => {
    process.stdout.write(`\n \n ${quest}`)
    process.stdout.write(" > ")
}

process.stdin.on('data', function(data) {
    answ.push(data.toString().trim())

        process.exit();
   
})

process.on('exit', function() {
    process.stdout.write('\n \n ')

    process.stdout.write(`welcome ${answ}`)

    process.stdout.write('\n \n ')

})

x();
y()



let testData1 = 'This is a safe String';
let testData2 = 'This is a <strong>unsafe</strong> string, because it contains HTML';
console.log(sorted([3, 2, 1]))
console.log('test')



function printUnsafe(fromUser: string) {
    // Hoppsan! Om fromUser innehåller HTML, så ska den inte skrivas ut
    console.log(sanitizeHtml(fromUser, {
        allowedTags: [],
       allowedAttributes: {}
    }));
}
printUnsafe(testData2)

askName()