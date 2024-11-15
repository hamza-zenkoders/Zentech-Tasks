import os from 'os';

console.log('Architecture : ', os.arch());
console.log('type : ', os.type());
console.log('Uptime : ', os.uptime());
console.log('Host Name : ', os.hostname());
console.log('Platform : ', os.platform());
console.log('Release : ', os.release());
console.log('Free Memory : ', os.freemem());
console.log('Total Memory : ', os.totalmem());
console.log('User Name : ', os.userInfo().username);
console.log('Home Directory : ', os.userInfo().homedir);
console.log('CPUs : ', os.cpus().length);
console.log('CPU Model : ', os.cpus()[0].model);