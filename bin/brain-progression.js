#!/usr/bin/env node

import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generateProgression = (start, step, length) => {
  return Array.from({ length }, (_, i) => start + i * step);
};

const hideRandomElement = (array) => {
  const index = getRandomInt(0, array.length - 1);
  const hiddenValue = array[index];
  const hiddenArray = [...array];
  hiddenArray[index] = '..';
  return { hiddenArray, hiddenValue };
};

const welcomeUser = () => {
  return new Promise((resolve) => {
    console.log('Welcome to the Brain Games!');
    rl.question('May I have your name? ', (name) => {
      console.log(`Hello, ${name}!`);
      resolve(name);
    });
  });
};

const askQuestion = (question) => {
  return new Promise((resolve) => {
    console.log(`Question: ${question}`);
    rl.question('Your answer: ', (answer) => {
      resolve(answer);
    });
  });
};

const checkAnswer = (userAnswer, correctAnswer, userName) => {
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    return true;
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${userName}!`);
    return false;
  }
};

const playProgressionGame = async () => {
  const name = await welcomeUser();
  console.log('What number is missing in the progression?');

  let correctAnswers = 0;
  const neededCorrectAnswers = 3;
  const progressionLength = 10;
  const minStep = 1;
  const maxStep = 10;
  const minStart = 1;
  const maxStart = 50;

  while (correctAnswers < neededCorrectAnswers) {
    const start = getRandomInt(minStart, maxStart);
    const step = getRandomInt(minStep, maxStep);
    const progression = generateProgression(start, step, progressionLength);
    
    const { hiddenArray, hiddenValue } = hideRandomElement(progression);
    
    const answer = await askQuestion(hiddenArray.join(' '));
    const isCorrect = checkAnswer(answer, hiddenValue.toString(), name);
    
    if (!isCorrect) {
      rl.close();
      return;
    }
    
    correctAnswers++;
  }

  console.log(`Congratulations, ${name}!`);
  rl.close();
};

playProgressionGame();