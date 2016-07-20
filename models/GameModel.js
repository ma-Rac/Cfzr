var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GameSchema = new Schema({
  playerOne: {type: String, required: true},
  playerTwo: {type: String, required: false},
  playerOneScore: {type: Number, required: false},
  playerTwoScore: {type: Number, required: false},
  winner: {type: String, required: false, 'default': 'None'},
  createdAt: {type: Date, 'default': Date.now},
  updatedAt: {type: Date, 'default': Date.now}
});

GameSchema.index({'updatedAt': -1, background: true});

var GameModel = mongoose.model('Game', GameSchema);

module.exports = GameModel;
