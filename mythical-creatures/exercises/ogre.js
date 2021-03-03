

class Ogre {
  constructor(ogre) {
    this.name = ogre.name;
    this.home = ogre.abode || "Swamp";
    this.swings = 0
  }
  encounter(target) {
    target.encounterCounter++
    if (target.noticesOgre()) {
      this.swingAt();
      if (this.swings >= 2) {
        target.knockedOut = true;
      }
    }
  }

  swingAt(target) {
      this.swings++;
  }

  apologize(target) {
    target.knockedOut = false;
  }
};



module.exports = Ogre;
