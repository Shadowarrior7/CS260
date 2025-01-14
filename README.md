# CS260

## Elevator Pitch
Have you ever just wanted to guess at random numbers and improve your guessing skills? Do you want to compete with friends? Well then this is the app for you! Guess daily numbers and achieve the high[...]

## Design
![Design](design.png)

## Key Features
- Score board, changed every day
- A counter for number of attempts at guessing the number
- A high and low indicator for each guess that will indicate if your guess is too high or low
- A practice option with another number generator that will help you practice
- Log out button
- Hint for the number of digits the daily number is: might change
- Also features a time and date so you can tell when each person completed the challenge, might facilitate competition for how fast someone can guess the number and the lowest amount of attempts

## Technologies
- **HTML**: structures application. 3 HTML pages, login, home, and practice
- **CSS**: apply styling and color so that the website is not bland
- **React**: provides login, and routing components
- **Service**: back-end endpoints,
  1. login
  2. check if guess matches random number
  3. submit a score once number is guessed
  4. retrieving Date and time at time.google.com
- **DB Login**: stores the login credentials and keeps updated which users have already completed the daily number.
- **WebSocket**: as each player guesses the daily number, the score board will be updated for all users
