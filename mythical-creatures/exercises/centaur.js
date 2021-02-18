class Centaur {
  constructor(object) {
    this.name = object.name;
    this.breed = object.type;
    this.soundEffect = "";
    this.cranky = false;
    this.standing = true;
    this.layingDown = false
    this.crankMeter = 0
  }
  shootBow() {
    this.crankMeter++
    if (this.crankMeter >= 3 || this.layingDown === true) {
      this.cranky = true;
      return "NO!"
    } else {
      return "Twang!!!";
    }
  }
  run() {
    this.crankMeter++
    if (this.crankMeter >= 3 || this.layingDown === true) {
      this.cranky = true
      return "NO!"
    } else {
    return this.soundEffect = `Clop clop clop clop!!!`
  }
  }
  sleep() {
    if (this.layingDown === true) {
      this.crankMeter = 0;
      this.cranky = false;
      return "ZZZZ";
  } else {
    return "NO!";
  }
};
  layDown() {
    this.standing = false;
    this.layingDown = true;
  };
  standUp() {
    this.standing = true;
    this.layingDown = false;
  };
  drinkPotion() {
    if (this.standing === true) {
      this.crankMeter = 0;
      this.cranky = false;
    } else {
      return `Not while I'm laying down!`
    }
  }
};


module.exports = Centaur;
