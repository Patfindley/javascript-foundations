class Settler {
  constructor(settler) {
    this.name = settler.name;
    this.age = settler.age;
    this.nationality = settler.nationality || "unknown";
    this.status = "healthy";
    this.ailments = [];
  }

  experienceDistress(distress) {
    if (this.status === "dead") {
      return
    } else {
    this.ailments.push(distress);
    if (this.ailments.length === 1) {
    this.status = "fair";
    } else if (this.ailments.length === 2) {
    this.status = "poor";
    } else if (this.ailments.length === 3) {
    this.status = "dead";
      }
    }
  }

  heal() {
    if (this.status === "dead") {
      return 'Sorry, we can\'t heal a corpse. Will needs a proper burial!'
    } else {
    this.ailments = [];
    this.status = "healthy";
    }
  }

};

module.exports = Settler;
