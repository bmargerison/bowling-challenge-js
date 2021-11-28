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
      ind != 9 ? this.roll_count += frame.rolls.length : frame.rolls[0] === '10' ? this.roll_count++ : this.roll_count += 2
      ind === 9 ? this.score += parseInt(frame.rolls[0]) : this.score += frame.rolls.reduce((sum, a) => sum + parseInt(a), 0)
      ind === 9 && parseInt(frame.rolls[0]) != 10 ? this.score += parseInt(frame.rolls[1]) : undefined
      parseInt(frame.rolls[0]) === 10 ? this.strike_bonus() : undefined
      rolls.length >= 2 && parseInt(frame.rolls[0]) + parseInt(frame.rolls[1]) === 10 ? this.spare_bonus() : undefined
   }
   console.log(`your current score is ${this.score}`)
  }

  strike_bonus() {
    for (const [ind, roll] of rolls.entries()) {
      if (this.roll_count === ind+1) {
        if (rolls.length >= ind+3) {
          this.score += parseInt(rolls[ind+1]) + parseInt(rolls[ind+2])
        } else {
          console.log('strike bonus pending...')
        }
      }
    }
  }

  spare_bonus() {
    for (const [ind, roll] of rolls.entries()) {
      console.log(this.roll_count)
      console.log(ind)
      if (this.roll_count === ind+1) {
        if (rolls.length >= ind+2) {
          this.score += parseInt(rolls[ind+1])
          console.log(`you added 9 for frame ${ind+1}`)
        } else {
          console.log('spare bonus pending...')
        }
      }
    }
  }

}

module.exports = Scorecard