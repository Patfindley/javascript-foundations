const Stark = require('../exercises/stark');

class Direwolf {
  constructor(name, home, size) {
    this.name = name;
    this.home = home || "Beyond the Wall";
    this.size = size || "Massive";
    this.huntsWhiteWalkers = true;
    this.starksToProtect = [];
  }
  protect(starkFam) {
  if (this.home === starkFam.location && this.starksToProtect.length < 2) {
     this.starksToProtect.push(starkFam);
     starkFam.safe = true;
     this.huntsWhiteWalkers = false;
  }
  }
  leave(starkFam) {
    for (var i = 0; 0 > this.starksToProtect.length; i++) {
      if (this.starksToProtect[i].includes(starkFam)) {
        this.starksToProtect.splice(i, 1);
      }
    }
  };
};

module.exports = Direwolf;
