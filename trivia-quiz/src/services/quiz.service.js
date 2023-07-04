
import {shuffleAnswers} from '../common/helpers';

export const fetchCategories = async () => {
  const url = `https://opentdb.com/api_category.php`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.trivia_categories;
  } catch (error) {
    console.error('err: '+error);
  }
};

export const fetchQuestionCountByCategoryAndType = async (category, difficulty) => {
  const categoryUrl = `https://opentdb.com/api_count.php?category=${category}`;

  const fetchQuestionsCount = async (category, difficulty, amount) => {
    const questionsUrl = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}`;

    try {
      const response = await fetch(questionsUrl);
      const data = await response.json();

      return data.results;
    } catch (error) {
      console.error('Error fetching questions:', error);
      throw error;
    }
  };

  try {
    const categoryResponse = await fetch(categoryUrl);
    const categoryData = await categoryResponse.json();
    const questionCount = categoryData.category_question_count[`total_${difficulty}_question_count`];
    // Array of all questions from the category
    const questions = await fetchQuestionsCount(category, difficulty, questionCount);
    const filteredQuestions = questions?.filter((question) => question.type === 'multiple');
    return filteredQuestions.length;
  } catch (error) {
    console.error('Error fetching questions:', error);
    throw error;
  }
};

export const fetchQuestions = async (amount, category, difficulty) => {
  const url = `https://opentdb.com/api.php?
  amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    const transformedData = data?.results?.map((question) => {
      question.answers = shuffleAnswers([
        ...question.incorrect_answers,
        question.correct_answer,
      ]);
      question.selectedAnswer = '';
      return question;
    });

    return transformedData;
  } catch (error) {
    console.error('Error fetching questions:', error);
    throw error;
  }
};
