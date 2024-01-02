const {readfileSyn, writefileSyn, readFileSync, writeFileSync} = require('fs')


const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/sub-folder/text.txt','utf8')

console.log(first, second)

writeFileSync('./content/first.txt', `here is the result ${first} and ${second}`,{flag:'a'})