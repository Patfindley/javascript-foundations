class Gear {
  constructor(type, quantity) {
    this.type = type;
    this.quantity = quantity;
  }

  checkForValidity() {
    console.log(this);
    if (this.type === 'ammunition') {
    return 'Great, we\'ll need lots of ' + this.type + '!'
    }
    else {
    return 'I don\`t think a ' + this.type + ' will help us.'
    }

  }
}

module.exports = Gear;
