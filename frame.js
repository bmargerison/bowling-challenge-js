const rl = require('readline-sync');
const { Roll, rolls } = require('./roll');

const frames = []

class Frame {

  constructor() {
    this.rolls = [];
  }

  run_frame() {
    this.rolls.push(this.first_roll());
    frames.length != 9 && parseInt(this.rolls[0]) === 10 ? undefined : this.rolls.push(this.second_roll());
    frames.length === 9 && this.rolls.reduce((sum, a) => sum + parseInt(a), 0) ? this.rolls.push(this.third_roll()) : undefined;
    for (const roll of this.rolls) {
      rolls.push(roll)
    }
  }

  first_roll() {
    let roll = new Roll().roll();
    parseInt(roll) === 10 ? console.log('STRIKE!') : undefined;
    return roll;
  }

  second_roll() {
    console.log('second roll');
    let roll = new Roll().roll();
    parseInt(roll) + parseInt(this.rolls[0]) === 10 ? console.log('Spare') : undefined;
    if (parseInt(roll) + parseInt(this.rolls[0]) > 10 && frames.length != 9) {
      console.log('sum of both rolls is greater than 10. play second roll again');
      this.second_roll();
    }
    parseInt(roll) === 10 ? console.log('STRIKE!') : undefined;
    return roll;
  }

  third_roll() {
    console.log('third roll');
    let roll = new Roll().roll();
    parseInt(roll) === 10 ? console.log('STRIKE!') : undefined;
    return roll
  }

}

module.exports.Frame = Frame;
module.exports.frames = frames;