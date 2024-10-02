const assert = require('assert');
const http = require('http');

const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/',
    method: 'GET'
};

const req = http.request(options, (res) => {
    assert.strictEqual(res.statusCode, 200);
    console.log('Test passed: received status code 200');
});

req.on('error', (e) => {
    console.error(`Problem with request: ${e.message}`);
});

req.end();
