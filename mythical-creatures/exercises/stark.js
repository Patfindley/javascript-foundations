const Direwolf = require('../exercises/direwolf');

class Stark {
  constructor(starkFam) {
    this.name = starkFam.name;
    this.location = starkFam.area || "Winterfell";
    this.safe = false;
  }
  sayHouseWords() {
    if (this.safe === true) {
      return `The North Remembers`;
  } else {
    return `Winter is Coming`;
  }
  }
};

module.exports = Stark;
