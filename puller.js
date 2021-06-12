const EventEmitter = require('events');

class Puller extends EventEmitter {
  constructor(url) {
    super();
    this.url = url;
    this.on('removeListener', () => {
      const number = this.listenerCount('data');
      //this.listenerCount('data'); - check how many listers are assigned

      if (number === 0) {
        clearInterval(this.interval);
      }
    });
  }

  pull() {
    this.interval = setInterval(() => {
      this.emit('data', {
        data: 'pobrane',
        url: this.url
      });
    }, 1000);
  }

  stop(cb) {
    //cb mans callback
    this.removeListener('data', cb);
    // this event fires up ... this.on('removeListener', () in constructor
  }
}

module.exports = Puller;
