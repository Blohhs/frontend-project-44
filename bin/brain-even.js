#!/usr/bin/env node

import readlineSync from 'readline-sync'

const isEven = num => num % 2 === 0

const playEvenGame = () => {
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!\nAnswer "yes" if the number is even, otherwise answer "no".`)

  for (let i = 0; i < 3; i++) {
    const num = Math.floor(Math.random() * 100)
    const answer = isEven(num) ? 'yes' : 'no'

    console.log(`Question: ${num}`)
    const userAnswer = readlineSync.question('Your answer: ')

    if (userAnswer !== answer) {
      console.log(`'${userAnswer}' is wrong answer. Correct answer was '${answer}'.\nLet's try again, ${name}!`)
      return
    }
    console.log('Correct!')
  }

  console.log(`Congratulations, ${name}!`)
}

playEvenGame()
