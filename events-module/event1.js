 // require EventEmitter from evens modeule.
const EventEmitter = require('events');

// create an Event Emitetr object
const emitter = new EventEmitter();

// invoke on() - on EventEmitter object
emitter.on('event', (msg) => {
    console.log(msg);
    
});

// when event emitter object emits an event. - pass msg as second argument
//  - function attached to that event is fired.
emitter.emit('event', "event was emitted");

 

