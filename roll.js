const rl = require("readline-sync");

const rolls = []

class Roll {

  roll() {
    let current_roll = Number(rl.question('please roll: '));
    if (current_roll > 10) {
      console.log('there are only 10 pins, try again');
      this.roll();
    } else {
      return current_roll
    }
  }

}

module.exports.Roll = Roll;
module.exports.rolls = rolls;