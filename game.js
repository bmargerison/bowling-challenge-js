const rl = require('readline-sync');
const { Frame, frames } = require('./frame');
const { Roll, rolls } = require('./roll');
const Scorecard = require('./scorecard');

class Game {

  constructor() {
    this.current_score = 0
    this.scorecard = new Scorecard()
  }

  run_game() {
    let count = 0
    for (let i = 0; i < 10; i++) {
      console.log(`frame ${i+1}`);
      let frame = new Frame();
      frame.run_frame();
      frames.push(frame);
      console.log(frames)
      console.log(rolls)
      this.scorecard.current_score()
    }
    this.scorecard.final_score();
  }
}

let game = new Game()
game.run_game()