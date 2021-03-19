var Snowman = require('./Snowman');

class Human {
  constructor(name) {
    this.name = name;
    this.wantsToBuildASnowman = true;
    this.materials = {snowballs: 0,
                      coal: 0,
                      buttons: 0,
                      carrots: 0}

  }
  gatherMaterials(item, num) {
    if (item === "carrots") {
      this.materials.carrots += num;
    } else if (item === "buttons") {
      this.materials.buttons += num;
    } else if (item === "coal") {
      this.materials.coal += num;
    } else if (item === "snowballs") {
      this.materials.snowballs += num;
    }
  }

  buildASnowman() {
    var snowman = new Snowman({carrots: this.materials.carrots, coal: this.materials.coal , snowballs: this.materials.snowballs});
    console.log(this.materials.snowballs)
    return snowman;
  }

}

module.exports = Human;
