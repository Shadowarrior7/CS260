# Your startup name here

[My Notes](notes.md)

A brief description of the application here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.


> [!NOTE]
>  This is a template for your startup application. You must modify this `README.md` file for each phase of your development. You only need to fill in the section for each deliverable when that deliverable is submitted in Canvas. Without completing the section for a deliverable, the TA will not know what to look for when grading your submission. Feel free to add additional information to each deliverable description, but make sure you at least have the list of rubric items and a description of what you did for each item.

> [!NOTE]
>  If you are not familiar with Markdown then you should review the [documentation](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) before continuing.

## 🚀 Specification Deliverable

> [!NOTE]
>  Fill in this sections as the submission artifact for this deliverable. You can refer to this [example](https://github.com/webprogramming260/startup-example/blob/main/README.md) for inspiration.

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [X] Proper use of Markdown
- [X] A concise and compelling elevator pitch
- [X] Description of key features
- [X] Description of how you will use each technology
- [X] One or more rough sketches of your application. Images must be embedded in this file using Markdown image references.

### Elevator pitch
Have you ever just wanted to guess at random numbers and improve your guessing skills? Do you want to compete with friends? Well then this is the app for you! Guess daily numbers and achieve the high[...]

### Design

![Design image](design.png)


### Key features
- Score board, changed every day
- A counter for number of attempts at guessing the number
- A high and low indicator for each guess that will indicate if your guess is too high or low
- A practice option with another number generator that will help you practice
- Log out button
- Hint for the number of digits the daily number is: might change
- Also features a time and date so you can tell when each person completed the challenge, might facilitate competition for how fast someone can guess the number and the lowest amount of attempts

### Technologies

I am going to use the required technologies in the following ways.

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

## 🚀 AWS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [X] **Server deployed and accessible with custom domain name** - [My server link](https://duncanclans.com).

## 🚀 HTML deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [X] **HTML pages** - added 3 html pages. login, main page, practice
- [X] **Proper HTML element usage** - elements are used correctly and are divided into groups using place holders and div tags
- [X] **Links** - links have been added that take you through the diffrent pages
- [X] **Text** - Text boxes and titles for explinations have been added
- [X] **3rd party API placeholder** - I gave an outline of what this should look like and gave a not in the html to link it to the actual api later
- [ ] **Images** - honestly didnt need any images...
- [X] **Login placeholder** - place holder has been added. note: use the link not the login button
- [X] **DB data placeholder** - it has been noted where this will be added and a place holder for what it should look like has been added
- [X] **WebSocket placeholder** - it has been noted where this will be added and a place holder for what it should look like has been added

## 🚀 CSS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [X] **Header, footer, and main content body** - the website is divided
- [X] **Navigation elements** - you can naviate through all pages through buttons. all except the login fuction with still uses a link the reason for this is that it will be replaced with a login functionality later on, for now the link works best and will be removed when login is active
- [X] **Responsive to window resizing** - website resizes in accourdance with window size. the scores on the home page move to bottom if the windo is too small
- [X] **Application elements** - these have been added
- [X] **Application text content** - text has been update with fonts and color acourdingly
- [X] **Application images** - i have an image on there. it serves no purpose except to complete this point. will REMOVE later

## 🚀 React part 1: Routing deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Bundled using Vite** - I did not complete this part of the deliverable.
- [ ] **Components** - I did not complete this part of the deliverable.
- [ ] **Router** - Routing between login and voting components.

## 🚀 React part 2: Reactivity

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **All functionality implemented or mocked out** - I did not complete this part of the deliverable.
- [ ] **Hooks** - I did not complete this part of the deliverable.

## 🚀 Service deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Node.js/Express HTTP service** - I did not complete this part of the deliverable.
- [ ] **Static middleware for frontend** - I did not complete this part of the deliverable.
- [ ] **Calls to third party endpoints** - I did not complete this part of the deliverable.
- [ ] **Backend service endpoints** - I did not complete this part of the deliverable.
- [ ] **Frontend calls service endpoints** - I did not complete this part of the deliverable.

## 🚀 DB/Login deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **User registration** - I did not complete this part of the deliverable.
- [ ] **User login and logout** - I did not complete this part of the deliverable.
- [ ] **Stores data in MongoDB** - I did not complete this part of the deliverable.
- [ ] **Stores credentials in MongoDB** - I did not complete this part of the deliverable.
- [ ] **Restricts functionality based on authentication** - I did not complete this part of the deliverable.

## 🚀 WebSocket deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Backend listens for WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Frontend makes WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Data sent over WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **WebSocket data displayed** - I did not complete this part of the deliverable.
- [ ] **Application is fully functional** - I did not complete this part of the deliverable.
