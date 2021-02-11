var Person = require('./person');
var Statue = require('./statue');


class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  }
  gazeAtVictim(name) {
    this.statues.push(name)
  }
};



module.exports = Medusa
