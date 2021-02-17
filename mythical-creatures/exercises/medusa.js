var Person = require('./person');
var Statue = require('./statue');


class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  }
  gazeAtVictim(person) {
    var statue = new Statue(person.name)
    if (this.statues.length < 3) {
      this.statues.push(statue);
    } else {
      var freePerson = new Person(this.statues[0].name)
      freePerson.mood = "relieved"
      this.statues.shift()
      this.statues.push(statue);
      return freePerson
  }
  }
};



module.exports = Medusa
