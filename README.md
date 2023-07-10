<img src="./trivia-quiz/src/assets/img/QuizNinja-Logo.png" alt="QuizNinja logo" />


***
# Trivia-Quiz-App-Team-3

## Team Members
@radostin-radev, @desislav-dimitrov

Here is your source for questions: [Open Trivia Database API](https://opentdb.com/api_config.php). 

### App Requirements:
- The app should integrate with the Open Trivia Database API to fetch trivia questions.
- Users should have the ability to select the quiz category, difficulty level, and the number of questions. It is up to you as a developer if you want to display multiple-choice questions only or single-choice ones. You can hardcode that choice in the API request.
- Users should be able to start the quiz once they have configured their preferences.
- The app should implement a multi-step wizard-like flow for the quiz, i.e should display a single question at a time. 
- Users should be able to navigate between questions using forward and backward buttons (browser buttons).
- The current progress of the quiz should be displayed, indicating the number of completed questions and the total number of questions.
- The app should handle errors gracefully and display meaningful error messages to the user.
- Once the user completes all the questions, the app should display a summary of their results. The summary should include the user's score, the number of correct and incorrect answers, and the percentage of correct answers.
- Users should have the option to review their answers and see the correct answers for the questions they answered incorrectly.
- BONUS: Include a timer to limit the time for each question or for the entire quiz. Include the remaining time in the score calculation.
- BONUS: Write end-to-end tests with Cypress.
- BONUS: Make the app pretty & responsive with Chakra UI (there will be a lecture on that).

## Project Description
QuizNinja is a modern, simple, lightweight and fully responsive Trivia Quiz application. It has a fun and highly intuitive UI. As the name "QuizNinja" suggests, it's idea is to challenge the user in a fun to way to test his knowledge in a specific area. He gets to choose a category, a level of difficulty and a number of questions he would like to answer, as the minimum is 5 question and he will have a total time to answer all questions of a minute for each question (example: if the user chooses 20 questions, he will have a total time of 20 minutes). Once the users starts a quiz, he will be navigated to the first question where sees a very intuitive page with a timer, a question card, quick navigation with all questions and a quick submit button, and a progress bar that tracks what percentage of the questions were answered. Once the user submits his answers he will get a total score (percentage of correct answers and bonus percentage for remaining time) based on which he will receive a colored belt and a fun message, so that the user can proudly call himself a QuizNinja by now having an expertise. At this page he is also provided a list of all questions, where he can check which answers he have the chance to compare his results to the correct ones.

## Setup guide
In order to start the application you need to be in a folder by your choice and open a terminal inside it.
You need to go in GitLab and copy the SSH URL. Then you need to run `https://gitlab.mentormate.bg/base/mmu/foundation/react/trivia-quiz-app-team-3` in the terminal. Open the folder that you just cloned by running `cd ""trivia-quiz-app-team-3`. At this point you will see only a `README.md` file, and you will need to switch to the branch where the project is at the moment, since it has not been merged to the main branch yet. Run `git checkout development` in order to do so. Now a folder named `trivia-quiz` should appear. Get inside that folder by running `cd "trivia-quiz"` to access the root of the project. Here you need to run `npm install` to restore all the necessary dependencies for the project to work properly. Then you can simply run `npm run dev` to run the QuizNinja app in the browser. 
To start the tests you need to run `npx cypress open`.

## Project structure
On the root level of the project are the src folder, the cypress folder (responsible for the E2E test), the index.html file the package.json and the configuration files for Vite and ESLint. In the src folder we have:
- `assets` - contains the `img` folder with the images that are used in this project
- `common` - a folder that holds a constants file, a file with helper functions and a file for constants related to routes
- `components` - this is the folder with all the reusable components that are used to construct different pages or other uncontrolled components
- `context` - it holds the `QuizContext` that offers the context provider
- `hoc` - here are the two files with high order components that are used for protected routes
- `hooks` - contains the custom hooks that are used throughout the project
- `pages` - here are the four pages for this application
- `services` - contains a file with all the services needed for this project
- `styles` - holds the styles for the application, as well as the custom Chakra themes

## Technologies
- React Vite
- React Router version 6
- Chakra UI
- React Query
- ESLint
- Cypress for E2E testing
