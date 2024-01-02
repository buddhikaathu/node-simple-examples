const os = require('os');

const user = os.userInfo();
console.log(`the sysyem uptime is ${os.uptime()}`);

const currentos={
    name : os.type(),
    relese:os.release(),
    totalmemory : os.totalmem(),
    freememory : os.freemem(),
}

console.log(currentos)