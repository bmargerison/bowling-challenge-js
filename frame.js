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
    frames.length === 9 && this.rolls.reduce((sum, a) => sum + a, 0) ? this.rolls.push(this.third_roll()) : undefined;
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
    if (parseInt(roll) + parseInt(this.rolls[0]) > 10) {
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

module.exports = Frame;

frame = new Frame();
frame.run_frame();
console.log(frames);
console.log(frame.rolls);
console.log(rolls);