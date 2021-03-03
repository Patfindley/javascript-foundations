class Fairy {
  constructor(name) {
    this.name = name;
    this.dust = 10;
    this.clothes = {dresses: ["Iris"]};
    this.disposition = "Good natured";
    this.humanWards = []
  }
  receiveBelief() {
    this.dust++;
  }
  believe() {
    this.dust += 10;
  }
  makeDresses(flowerType) {
    var newArray = flowerType
      for (var i = 0; i < newArray.length; i++) {
        this.clothes.dresses.push(newArray[i])
      }
  }
  becomeProvoked() {
    this.disposition = "Vengeful";
  }

  replaceInfant(infant) {
    if (this.disposition = "Vengeful") {
      infant.name = infant.name;
      infant.eyes = infant.eyes;
      infant.disposition = "Malicious";
      this.humanWards.push(infant);
     }
     if (this.humanWards.length >= 3) {
       this.disposition = "Good natured";
     };

      return infant;
    }
};

module.exports = Fairy
