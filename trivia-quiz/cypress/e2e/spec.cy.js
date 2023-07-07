/* eslint-disable no-useless-escape */
/* eslint-disable cypress/no-unnecessary-waiting */
describe('QuizNinja spec', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('User can visit QuizNinja home page', () => {
    cy.findByRole('img', {name: /quizninja logo/i});
    // eslint-disable-next-line max-len
    cy.findByText( /welcome to quizninja! are you ready to put your knowledge to the test\? take a thrilling journey through a world of trivia and challenge yourself with exciting quizzes\. choose your preferred category, select the difficulty level that matches your expertise, and decide the number of questions to tackle\. whether you are a history buff, a pop culture enthusiast, or a science geek, quizninja has something for everyone\. sharpen your mind, learn new facts, and have fun along the way\. get started now and let the quiz adventure begin!/i );

    cy.findByRole('slider', {name: /slider\-questions/i}).should('not.exist');
    cy.findByRole('button', {name: /start quiz/i}).as('startQuizButton').should('have.attr', 'disabled');


    // select category
    cy.findByRole('combobox').select('21');

    // choose difficulty
    cy.findByRole('slider', {name: /slider\-difficulty/i}).as('sliderDifficulty');
    cy.get('@sliderDifficulty').should('have.attr', 'aria-valuenow', '0');
    cy.get('@sliderDifficulty').get('input').invoke('val', 1).trigger('change', {force: true});
    cy.get('@sliderDifficulty').trigger('pointerdown');
    cy.get('@sliderDifficulty').get('input').should('have.attr', 'value', '0');

    // choose amount of questions
    cy.findByRole('combobox').select('21');
    cy.findByRole('slider', {name: /slider\-questions/i}).as('sliderQuestions');
    cy.get('@sliderQuestions').should('have.attr', 'aria-valuenow', '5');
    cy.get('@sliderQuestions').get('input[type=hidden]').eq(0).invoke('val', 5).trigger('change', {force: true});
    cy.get('@sliderQuestions').trigger('pointerdown');
    cy.get('@sliderQuestions').get('input').should('have.attr', 'value', '5');

    // start quiz
    cy.get('@startQuizButton').should('not.have.attr', 'disabled');
    cy.get('@startQuizButton').click();
  });
});


