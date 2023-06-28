import SliderDifficulty
  from '../../components/SliderDifficulty/SliderDifficulty';
import SliderQuestions from '../../components/SliderQuestions/SliderQuestions';
import Select from '../../components/Select/Select';
import Btn from '../../components/Btn/Btn';


const LandingPage = () => {
  const buttonClickHandler = (e) => {
    console.log('click');
  };

  const selectChangeHandler = (e) => {
    console.log(e.target.value);
  };

  return (
    <>
      <Select changeHandler={selectChangeHandler} />
      <SliderDifficulty />
      <SliderQuestions />
      <Btn text={'click me'} clickHandler={buttonClickHandler}/>
    </>
  );
};

export default LandingPage;
