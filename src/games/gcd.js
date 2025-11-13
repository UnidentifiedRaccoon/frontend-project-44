import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const GAME_DESCRIPTION = 'Find the greatest common divisor of given numbers.';

const calculateGcd = (a, b) => {
  let num1 = a;
  let num2 = b;
  while (num2 !== 0) {
    const temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }
  return num1;
};

const generateRound = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const question = `${number1} ${number2}`;
  const correctAnswer = String(calculateGcd(number1, number2));
  return [question, correctAnswer];
};

const startGame = () => {
  runGame(GAME_DESCRIPTION, generateRound);
};

export default startGame;
