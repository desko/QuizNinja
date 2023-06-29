import {Select as SelectChakra} from '@chakra-ui/react';

const Select = ( {changeHandler, options} ) => {
  return (
    <SelectChakra
      mb='4rem'
      placeholder='Select option'
      onChange={ changeHandler}>
      {
        options?.map( (option) => <option key={option.name+'_'+option.id} value={option.id}>
          {option.name}
        </option> )
      }
    </SelectChakra>
  );
};

export default Select;
