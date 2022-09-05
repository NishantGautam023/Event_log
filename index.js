const logEvents = require('./logEvents');
const EventEmiiter = require('events');

class MyEmitter extends EventEmiiter {} // From DOCS;
// https://nodejs.org/dist/latest-v16.x/docs/api/events.html#class-eventemitter

const myEmitter = new MyEmitter();

myEmitter.on('log', (msg) => {
  logEvents(msg);
});

setTimeout(() => {
  // Emit event
  myEmitter.emit('log', 'log event emitted!!');
}, 2000);
