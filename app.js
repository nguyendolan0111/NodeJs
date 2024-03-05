// GLOBAL - NO WINDOW

// __dirname    - path to current directory
// __filename   - file name
// require      - function to use module
// module       - info about current module (file)
// process      - info about env where the program is being executed

// console.log(__dirname)
// setInterval(()=>{
//     console.log('hello world')
// },1000)


const _ = require('lodash')

const items = [1,[2,[3,[4]]]]

const newItems = _.flattenDeep(items)
console.log(newItems);
