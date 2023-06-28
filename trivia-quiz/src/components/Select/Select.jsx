import {Select as SelectChakra} from '@chakra-ui/react';

const Select = () => {
  return (
    <SelectChakra placeholder='Select option'>
      <option value='option1'>Option 1</option>
      <option value='option2'>Option 2</option>
      <option value='option3'>Option 3</option>
    </SelectChakra>
  );
};

export default Select;
