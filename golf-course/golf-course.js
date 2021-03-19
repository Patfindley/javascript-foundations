class GolfCourse {
  constructor(name, difficulty, openings, features) {
    this.name = name;
    this.difficulty = difficulty;
    this.openings = openings;
    this.features = features;
    this.currentlyPlaying = [];
  }
  checkInGroup(group) {
    this.openings -= group.length;
    for (var i = 0; i < group.length; i++) {
      this.currentlyPlaying.unshift(group[i].name);
    }
    console.log("currently playing>>",this.currentlyPlaying.length, "openings>>", this.openings );
}
}

module.exports = GolfCourse;
