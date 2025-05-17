#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { sum, substract, multiply, division } from "./math.js";

const OPERATORS = {
  sum: "+",
  substract: "-",
  multiply: "*",
  division: "/"
};

const calculate = (a, b, operator) => {
  switch(operator) {
    case OPERATORS.sum: return sum(a, b);
    case OPERATORS.substract: return substract(a, b);
    case OPERATORS.multiply: return multiply(a, b);
    case OPERATORS.division: return division(a, b);
    default: return NaN;
  }
};

const playGame = () => {
  console.log('Welcome to the Brain Calc Game!');
  console.log('What is the result of the expression?');
  
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  for (let i = 0; i < 3; i++) {
    const a = Math.floor(Math.random() * 10);
    const b = Math.floor(Math.random() * 10);
    const operators = Object.values(OPERATORS);
    const operator = operators[Math.floor(Math.random() * operators.length)];

    console.log(`Question: ${a} ${operator} ${b}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = calculate(a, b, operator);

    if (parseInt(userAnswer) === correctAnswer) {
      console.log('Correct!\n');
    } else {
      console.log(`'${userAnswer}' is wrong answer. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!\n`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!\n`);
};

playGame();