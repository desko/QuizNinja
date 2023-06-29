export const fetchCategories = async () => {
  const url = `https://opentdb.com/api_category.php`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data.trivia_categories;
  } catch (error) {
    console.error('err: '+error);
  }
};

export const fetchQuestions = async (amount, category, difficulty) => {
  const url = `https://opentdb.com/api.php?
  amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`;

  try {
    const response = await fetch(url);

    return response.json();
  } catch (error) {
    console.error('Error fetching questions:', error);
    throw error;
  }
};
