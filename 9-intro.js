const {readFileSync, writeFileSync, readFile, writeFile} = require('fs')


readFile('./content/first.txt','utf-8',(err, result)=>{
    if (err) return console.log(err)
    console.log(result)

    const first = result;
    readFile('./content/sub-folder/second.txt','utf8', (error, result) =>{
        if (err) return console.log(err)
        console.log(result)

        const second = result;
        writeFile('./content/writesyn.txt', 
        `buddhika athukorala : ${first}, ${second}`, (err, result) => {
            if(err) return console.log(err)
            console.log(result)
        })

    })
})