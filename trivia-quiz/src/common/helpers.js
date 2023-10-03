export const shuffleAnswers = (answers) => {
  const shuffledAnswers = [...answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);
  return shuffledAnswers;
};

export const timeConverter = (num) => {
  const hours = Math.floor(num / 3600);
  const minutes = Math.floor((num % 3600) / 60);
  const seconds = Math.floor(num % 60);

  return {
    hours,
    minutes,
    seconds,
  };
};
