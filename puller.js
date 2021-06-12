const EventEmitter = require('events');

class Puller extends EventEmitter {
  constructor(url) {
    super();
    this.url = url;
  }

  pull() {
    this.interval = setInterval(() => {
      this.emit('data', {
        data: 'pobrane',
        url: this.url
      });
    }, 1000);
  }
}

module.exports = Puller;
