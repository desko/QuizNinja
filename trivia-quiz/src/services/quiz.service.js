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
