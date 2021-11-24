const prompt = require('prompt-sync')();

class Roll {
  roll() {
    let current_roll = prompt('please roll: ');
    if (Number(current_roll) > 10) {
      console.log('there are only 10 pins, try again');
      this.roll();
    } else {
      return current_roll
    }
  }
}

let rolls = []

roll = new Roll();
roll.roll()

module.exports = Roll;
module.exports.rolls = rolls;