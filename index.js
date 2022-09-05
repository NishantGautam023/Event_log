const logEvents = require('./logEvents');
const EventEmiiter = require('events');

class MyEmitter extends EventEmiiter {} // From DOCS;

const myEmitter = new MyEmitter();

myEmitter.on('log', (msg) => {
  logEvents(msg);
});

setTimeout(() => {
  myEmitter.emit('log', 'log event emitted!!');
}, 2000);
