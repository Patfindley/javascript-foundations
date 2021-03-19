class Being {
  constructor(name, species) {
     this.isAlive = true;
     this.name = name;
     this.species = species;
     this.credits = 0;
  }

  addCredits(num) {
    this.credits += num;
  }

  updateCredits(num) {
    this.credits += num;
  }
}

module.exports = Being;
