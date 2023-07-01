export const shuffleAnswers = (answers) => {
  const shuffledAnswers = [...answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);
  return shuffledAnswers;
};

