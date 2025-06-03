#!/usr/bin/env node
import readlineSync from 'readline-sync'

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const calculateGCD = (a, b) => {
  while (b !== 0) {
    const temp = b
    b = a % b
    a = temp
  }
  return a
}

const playGCDGame = () => {
  console.log('Welcome to the Brain Games!')
  const userName = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${userName}!`)
  console.log('Find the greatest common divisor of given numbers.')

  const roundsCount = 3

  for (let i = 0; i < roundsCount; i += 1) {
    const num1 = getRandomInt(1, 100)
    const num2 = getRandomInt(1, 100)
    const correctAnswer = calculateGCD(num1, num2).toString()

    console.log(`Question: ${num1} ${num2}`)
    const userAnswer = readlineSync.question('Your answer: ')

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${userName}!`)
      return
    }

    console.log('Correct!')
  }

  console.log(`Congratulations, ${userName}!`)
}

playGCDGame()
