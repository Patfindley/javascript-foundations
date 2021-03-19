class Part {
  constructor(type) {
  this.type = type;
  this.broken = false;
  this.breakCount = 0
  }

  break() {
    this.breakCount++
    this.broken = true;
  }

  repair() {
    if (this.breakCount <= 1) {
      this.broken = false;
    } else {
      return 'This ' + this.type + ' has seen better days, we\'ll need a brand new one!'
  }
  }

}

module.exports = Part;
