import {QuizContext} from '../context/QuizContext';
import {useQuery} from '@tanstack/react-query';
import {fetchCategories, fetchQuestionCountByCategoryAndType} from '../services/quiz.service';
import {useContext, useEffect, useState} from 'react';
import {DIFFICULTY, MIN_NUMBER_OF_QUESTIONS} from '../common/constants';

export const useQuizForm = () => {
  const [difficulty, setDifficulty] = useState(DIFFICULTY.EASY.NAME);
  const [category, setCategory] = useState(null);
  const [isLoadingCount, setIsLoadingCount] = useState(false);
  const [questionsAmount, setQuestionsAmount] = useState(MIN_NUMBER_OF_QUESTIONS);
  const [errorQuiz, setErrorQuiz] = useState(false);

  const {
    isLoading: isLoadingCategories,
    error: errorCategories,
    data: quizCategories,
  } = useQuery({
    queryKey: ['quizCategories'],
    queryFn: fetchCategories,
  });

  const {setQuizData, setQuizTime, setIsSubmitted} = useContext(QuizContext);

  const {
    error: errorQuestions,
    data: quizQuestionCount,
    refetch: refetchSliderCount,
  } = useQuery({
    queryKey: ['quizQuestionCount'],
    queryFn: () => category && fetchQuestionCountByCategoryAndType(category, difficulty),
    enabled: false,
  });

  useEffect(() => {
    setIsLoadingCount(false);
  }, [quizQuestionCount, setIsLoadingCount]);

  useEffect(() => {
    refetchSliderCount();
    setIsLoadingCount(true);
  }, [difficulty, category, refetchSliderCount]);

  return {
    questionsAmount,
    category,
    difficulty,
    setQuizData,
    setQuizTime,
    setIsSubmitted,
    setErrorQuiz,
    isLoadingCategories,
    isLoadingCount,
    errorCategories,
    errorQuestions,
    errorQuiz,
    quizCategories,
    quizQuestionCount,
    setDifficulty,
    setQuestionsAmount,
    setCategory,
  };
};
