const { Frame, frames } = require('./frame');
const { Roll, rolls } = require('./roll');


class Scorecard {

  final_score() {
    this.current_score();
    console.log(`your final score is ${this.score}`)
  }
  
  current_score() {
    this.score = 0
    this.roll_count = 0
    for (const [ind, frame] of frames.entries()) {
      ind === 9 ? this.final_frame_score(frame) : this.frame_score(frame)
      frame.rolls[0] === 10 ? this.strike_bonus() : undefined
      rolls.length >= 2 && frame.rolls[0] + frame.rolls[1] === 10 ? this.spare_bonus() : undefined
   }
   console.log(`your current score is ${this.score}`)
  }

  frame_score(frame) {
    this.score += frame.rolls.reduce((sum, a) => sum + a, 0)
    this.roll_count += frame.rolls.length
  }

  final_frame_score(frame) {
    this.score += frame.rolls[0]
    if (frame.rolls[0] === 10) {
      this.roll_count++;
    } else {
      this.roll_count += 2;
      this.score += frame.rolls[1];
    }
  }

  strike_bonus() {
    for (const [ind, roll] of rolls.entries()) {
      if (this.roll_count === ind+1) {
        if (rolls.length >= ind+3) {
          this.score += rolls[ind+1] + rolls[ind+2]
        } else {
          console.log('strike bonus pending...')
        }
      }
    }
  }

  spare_bonus() {
    for (const [ind, roll] of rolls.entries()) {
      if (this.roll_count === ind+1) {
        if (rolls.length >= ind+2) {
          this.score += rolls[ind+1]
        } else {
          console.log('spare bonus pending...')
        }
      }
    }
  }

}

module.exports = Scorecard