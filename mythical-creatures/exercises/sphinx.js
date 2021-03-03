class Sphinx {
  constructor(riddles) {
    this.riddles = [];
    this.heroesEaten = 0;
  }
  collectRiddle(input) {
    if (this.riddles.length >= 3) {
      this.riddles.shift();
      this.riddles.push(input);
    } else {
    this.riddles.push(input);
    }
  }

  attemptAnswer(guess) {
    for (var i = 0; i < this.riddles.length; i++) {
      if (this.riddles[i].answer === guess) {
        this.riddles.splice(i, 1);
        if (this.riddles.length) {
          return `That wasn't that hard, I bet you don't get the next one`
      } else {
          return `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS "${guess}"???`
        }
      }
    }
    this.heroesEaten++;
  }
}

module.exports = Sphinx;
