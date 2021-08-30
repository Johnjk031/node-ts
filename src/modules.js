let alphabet = () => {
    console.log(['alpha', 'beta', 'gamma'])
}

function fun() {
    console.log('This is a function in a module');
}

module.exports = { alphabet, fun }