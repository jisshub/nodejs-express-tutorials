// eventEmitter

// requre eventemitter 
const EventEmitter = require('events');

// create an an eventEmiyter instance
const emitter = new EventEmitter;

// attach on() fire a function while emit the event
emitter.on("newEvent", (ArrayNew) => {
    ArrayNew.forEach(element => {
        console.log(element);
    });
});

// emit the event
emitter.emit("newEvent", ["jissmon", 'ajith']);


