/* eslint-disable cypress/no-unnecessary-waiting */
describe('QuizNinja spec', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('User can visit QuizNinja home page', () => {
    cy.findByRole('img', {name: /quizninja logo/i});
    // eslint-disable-next-line max-len
    cy.findByText( /welcome to quizninja! are you ready to put your knowledge to the test\? take a thrilling journey through a world of trivia and challenge yourself with exciting quizzes\. choose your preferred category, select the difficulty level that matches your expertise, and decide the number of questions to tackle\. whether you are a history buff, a pop culture enthusiast, or a science geek, quizninja has something for everyone\. sharpen your mind, learn new facts, and have fun along the way\. get started now and let the quiz adventure begin!/i );
  });
});


