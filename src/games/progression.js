import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const GAME_DESCRIPTION = 'What number is missing in the progression?';

const PROGRESSION_MIN_LENGTH = 5;
const PROGRESSION_MAX_LENGTH = 10;

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
};

const generateRound = () => {
  const start = getRandomNumber(1, 50);
  const step = getRandomNumber(1, 10);
  const length = getRandomNumber(PROGRESSION_MIN_LENGTH, PROGRESSION_MAX_LENGTH);

  const progression = generateProgression(start, step, length);
  const hiddenIndex = getRandomNumber(0, length - 1);
  const correctAnswer = String(progression[hiddenIndex]);

  progression[hiddenIndex] = '..';
  const question = progression.join(' ');

  return [question, correctAnswer];
};

const startGame = () => {
  runGame(GAME_DESCRIPTION, generateRound);
};

export default startGame;
