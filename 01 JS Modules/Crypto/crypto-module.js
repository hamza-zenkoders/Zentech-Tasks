import crypto from 'crypto';

// Create Hash
const hash = crypto.createHash('sha256');

hash.update('Password');
console.log('Hash : ', hash.digest('hex'));


// Create Keyed-Hash using HMAC
const secret = 'matilda';

const keyedHash = crypto.createHmac('sha256', secret).update('Password').digest('hex');
console.log('Hash : ', keyedHash);


// Generate random data
const buf = crypto.randomBytes(16);

console.log('Random String : ', buf.toString('hex'));