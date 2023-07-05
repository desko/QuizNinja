export const DIFFICULTY = {
  EASY: {
    VALUE: 0,
    NAME: 'easy',
  },
  MEDIUM: {
    VALUE: 1,
    NAME: 'medium',
  },
  HARD: {
    VALUE: 2,
    NAME: 'hard',
  },
};
export const SLIDER_DIFFICULTY = {
  0: 'easy',
  1: 'medium',
  2: 'hard',
};

export const MIN_NUMBER_OF_QUESTIONS = 5;
export const SECONDS_PER_QUESTION = 60;

export const SCORE_MAP = [
  {
    SCORE_TRESHHOLD: 0,
    COLOR: '#ffffff',
    MESSAGE: `You've earned a white belt, like a blank canvas ready for your ninja knowledge to paint upon.`,
  },
  {
    SCORE_TRESHHOLD: 10,
    COLOR: '#f7ca12',
    // eslint-disable-next-line max-len
    MESSAGE: `Your quiz skills shine brighter than gold! You've earned a yellow belt, illuminating the path of knowledge.`,
  },
  {
    SCORE_TRESHHOLD: 20,
    COLOR: '#f2920c',
    // eslint-disable-next-line max-len
    MESSAGE: `Orange you glad you took the quiz? Your performance has earned you an orange belt, signaling your zest for learning.`,
  },
  {
    SCORE_TRESHHOLD: 30,
    COLOR: '#1ddb55',
    // eslint-disable-next-line max-len
    MESSAGE: `You've proven your quiz prowess! It's time to embrace the power of the green belt, a symbol of growth and expertise.`,
  },
  {
    SCORE_TRESHHOLD: 40,
    COLOR: '#118233',
    // eslint-disable-next-line max-len
    MESSAGE: `Mastering the art of quizzes with grace! Earned the dark green belt, signifying advanced growth and expertise.`,
  },
  {
    SCORE_TRESHHOLD: 50,
    COLOR: '#196cd1',
    // eslint-disable-next-line max-len
    MESSAGE: `You're riding the waves of success! Your exceptional quiz performance has earned you a blue belt, making you a true quiz ninja.`,
  },
  {
    SCORE_TRESHHOLD: 60,
    COLOR: '#104585',
    MESSAGE: `Taking your knowledge to new depths! Achieved the dark blue belt, a symbol of unmatched mastery.`,
  },
  {
    SCORE_TRESHHOLD: 70,
    COLOR: '#854494',
    // eslint-disable-next-line max-len
    MESSAGE: `You've unlocked the secrets of the quiz kingdom! Wear your purple belt with pride as a testament to your exceptional knowledge.`,
  },
  {
    SCORE_TRESHHOLD: 80,
    COLOR: '#e62c2c',
    // eslint-disable-next-line max-len
    MESSAGE: `Your quiz skills are on fire! Embrace the intensity of the red belt, a symbol of your passion and determination.`,
  },
  {
    SCORE_TRESHHOLD: 90,
    COLOR: '#442b19',
    // eslint-disable-next-line max-len
    MESSAGE: `You've demonstrated unmatched quiz wisdom! Wear your brown belt proudly as a mark of your deep understanding.`,
  },
  {
    SCORE_TRESHHOLD: 100,
    COLOR: '#373737',
    // eslint-disable-next-line max-len
    MESSAGE: `Congratulations, quiz master! You've achieved the highest honor with the black belt, signifying your absolute quiz mastery.`,
  },
];
