class Part {
  constructor(part) {
    this.name = part.name;
    this.type = part.type;
    this.value = part.value;
    this.broken = false;
    this.isValid = false;
  }

  checkForValidity() {
    console.log("name>>", this.name)
  }

}

module.exports = Part;
