const whoWon = require('../RPS');
const rpsFunc = require('../RPS');

describe('The RPS function', function(){

    test("should return TIE when both players enter same response", function() {
        let winner = '';
        expect(whoWon('rock', 'rock')).toEqual("TIE!");
    })

    test("should return winner when given rock and paper", function() {
        let winner = '';
        expect(whoWon('rock', 'paper')).toEqual("Player 2 wins!");
    })

    test("should return winner when given paper and scissors", function() {
        let winner = '';
        expect(whoWon('paper', 'scissors')).toEqual("Player 2 wins!");
    })

    test("should return winner when given scissors and rock", function() {
        let winner = '';
        expect(whoWon('scissors', 'rock')).toEqual("Player 2 wins!");
    })

    test("should return an error message when given an answer other than RPS", function() {
        expect(whoWon('scissors', 'apple')).toEqual("You've entered an item that does not belong in this game. Nice try, though.");
    })



});