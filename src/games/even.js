import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const GAME_DESCRIPTION = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const question = getRandomNumber(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const startGame = () => {
  runGame(GAME_DESCRIPTION, generateRound);
};

export default startGame;
