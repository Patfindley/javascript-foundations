class Golfer {
  constructor(bol) {
    this.name = bol.name;
    this.handicap = bol.handicap;
    this.frustration = 0;
    this.confidence = 0
  }

  calculateAvg(par) {
    var average = par + this.handicap;
    return `I usually shoot a ${average} on average.`;
  }

  playRound(courseName) {
    if (courseName.difficulty === "moderate") {
      this.frustration = 100;
    }

    if (courseName.difficulty === "hard") {
      this.frustration = 500;
    }
  }

  hitTheRange() {
    this.confidence += 10;
  }

  marvel(courseName) {
    return `I love the ${courseName.features.join(" and ")} on this course!`
  }

  whatYaShoot(num) {
    this.frustration = 0;
    if (num > 0) {
      this.frustration += 20;
      return "Doh!";
    } else if (num === 0) {
      this.frustration += 10;
      return "Booyah!";
    } else if (num < 0) {
      return "I AM THE GREATEST GOLFER ALIVE!";
    }

}
}

module.exports = Golfer;
