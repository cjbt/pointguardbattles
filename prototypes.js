

class GameObject {
  constructor(gameAttributes) {
    this.createdAt = gameAttributes.createdAt;
    this.dimensions = gameAttributes.dimensions;
  }

  destroy() {
    return `${this.name} was removed from the game`;
  }
}


class CharacterStats extends GameObject {
  constructor(CharStatAttributes) {
    super(CharStatAttributes);
    this.healthPoints = CharStatAttributes.healthPoints;
    this.name = CharStatAttributes.name;
  }
}

class Humanoid extends CharacterStats {
  constructor(humanoidAttributes) {
    super(humanoidAttributes);
    this.team = humanoidAttributes.team;
    this.weapons = humanoidAttributes.weapons;
    this.language = humanoidAttributes.language;
    this.score = humanoidAttributes.score;
    this.fgm = humanoidAttributes.fgm;
    this.fga = humanoidAttributes.fga;
  }

  greet() {
    return `${this.name} offers a greeting in ${this.language}.`;
  }
}


// parent
class Villain extends Humanoid {
  constructor(villainAttributes) {
    super(villainAttributes);
  }
  flopAndOne() {
    if (Math.floor(Math.random() * 10) + 1 < 6) {
      this.score += 2;
      document.getElementById(
        "playbyplay"
      ).innerHTML = `<p>*Whistles* Harden down the lane and flails to the ground DRAMATICALLY while being far away from his opponents. Knocks down 2 free throws.</p>`;
      document.getElementById("hardenscore").innerHTML = this.score;
      // increases field goal made in play by play
      this.fgm++;
      document.getElementById("beardfgm").innerHTML = this.fgm;
  
      // increases field goal attempts in play by play
      this.fga++;
      document.getElementById("beardfga").innerHTML = this.fga;
    } else {
      document.getElementById(
        "playbyplay"
      ).innerHTML = `<p style="color: red;">Harden just did not sell his flop very well.</p>`;
  
      // does not increase fga due to nba rules
    }
  };

  stepBackCrossoverJumber() {
    if (Math.floor(Math.random() * 10) + 1 < 6) {
      this.score += 3;
      document.getElementById(
        "playbyplay"
      ).innerHTML = `<p>Iso Harden with the step back three!</p>`;
      document.getElementById("hardenscore").innerHTML = this.score;
  
      // increases field goal made in play by play
      this.fgm++;
      document.getElementById("beardfgm").innerHTML = this.fgm;
  
      // increases field goal attempts in play by play
      this.fga++;
      document.getElementById("beardfga").innerHTML = this.fga;
    } else {
      document.getElementById(
        "playbyplay"
      ).innerHTML = `<p style="color: red;">Harden turns the ball over! </p>`;
  
      // increases field goal attempts in play by play
      this.fga++;
      document.getElementById("beardfga").innerHTML = this.fga;
    }
  };
  tomohawkDunk() {
    if (Math.floor(Math.random() * 10) + 1 < 6) {
      this.score += 3;
      document.getElementById(
        "playbyplay"
      ).innerHTML = `<p>Harden breaks away and slams it with a Tomohawk DUNK AND ONE! 3 points!</p>`;
      document.getElementById("hardenscore").innerHTML = this.score;
  
      // increases field goal made in play by play
      this.fgm++;
      document.getElementById("beardfgm").innerHTML = this.fgm;
  
      // increases field goal attempts in play by play
      this.fga++;
      document.getElementById("beardfga").innerHTML = this.fga;
    } else {
      document.getElementById(
        "playbyplay"
      ).innerHTML = `<p style="color: red;">Harden gets BLOCKED!</p>`;
  
      // increases field goal attempts in play by play
      this.fga++;
      document.getElementById("beardfga").innerHTML = this.fga;
    }
  };
}


class Hero extends Humanoid {
  constructor(heroAttributes){
    super(heroAttributes);
  }
  pullUpFromHalfCourt() {
    if (Math.floor(Math.random() * 10) + 1 < 6) {
      this.score += 3;
      document.getElementById(
        "playbyplay"
      ).innerHTML = `<p>Curry, walking pass half-court... Shoots out of nowhere and scores! 3 points!</p>`;
      document.getElementById("curryscore").innerHTML = this.score;
  
      // increases field goal made in play by play
      this.fgm++;
      document.getElementById("stephfgm").innerHTML = this.fgm;
  
      // increases field goal attempts in play by play
      this.fga++;
      document.getElementById("stephfga").innerHTML = this.fga;
    } else {
      document.getElementById(
        "playbyplay"
      ).innerHTML = `<p style="color: red;">Not a good look, it was a bad shot.</p>`;
  
      // increases field goal attempts in play by play
      this.fga++;
      document.getElementById("stephfga").innerHTML = this.fga;
    }
  };
  stepBackJumper() {
    if (Math.floor(Math.random() * 10) + 1 < 6) {
      this.score += 3;
      document.getElementById(
        "playbyplay"
      ).innerHTML = `<p>Step back jumper... GOOD! AND ONE! 3 points! </p>`;
      document.getElementById("curryscore").innerHTML = this.score;
  
      // increases field goal made in play by play
      this.fgm++;
      document.getElementById("stephfgm").innerHTML = this.fgm;
  
      // increases field goal attempts in play by play
      this.fga++;
      document.getElementById("stephfga").innerHTML = this.fga;
    } else {
      document.getElementById(
        "playbyplay"
      ).innerHTML = `<p style="color: red;">Curry shoots, and no good. </p>`;
  
      // increases field goal attempts in play by play
      this.fga++;
      document.getElementById("stephfga").innerHTML = this.fga;
    }
  };

  floater() {
    if (Math.floor(Math.random() * 10) + 1 < 6) {
      this.score += 2;
      document.getElementById(
        "playbyplay"
      ).innerHTML = `<p>Curry the Chef, cookin then lays it in! 2 points!</p>`;
      document.getElementById("curryscore").innerHTML = this.score;
  
      // increases field goal made in play by play
      this.fgm++;
      document.getElementById("stephfgm").innerHTML = this.fgm;
  
      // increases field goal attempts in play by play
      this.fga++;
      document.getElementById("stephfga").innerHTML = this.fga;
    } else {
      document.getElementById(
        "playbyplay"
      ).innerHTML = `<p style="color: red;">Curry gets blocked!</p>`;
  
      // increases field goal attempts in play by play
      this.fga++;
      document.getElementById("stephfga").innerHTML = this.fga;
    }
  };
}


const theBeard = new Villain({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2
  },
  score: 0,
  fgm: 0,
  fga: 0,
  name: "James Harden",
  team: "Houston Rockets",
  weapons: ["Step Back Crossover Jumper"],
  language: "Common Tongue"
});

const chefCurry = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 1
  },
  score: 0,
  fgm: 0,
  fga: 0,
  name: "Steph Curry",
  team: "Golden State Warriors",
  weapons: ["Pull Up From Halfcourt"],
  language: "Common Tongue"
});
